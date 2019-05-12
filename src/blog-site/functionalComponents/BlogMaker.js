import React, { Component } from "react";
import "../css/Element.css";
import "../css/blogForm.css";
import "../css/NavBar.css";
import * as uuid from "uuid";
import { db } from "../db/firebase";
import Buttons from "../containers/Buttons";
import UserElements from "../containers/UserElements";
import { Link } from "react-router-dom";

class BlogMaker extends Component {
  state = {
    postPage: [],
    count: 0,
    posted: false,
    reference: "aop",
    toolbar: true,
    author: ""
  };

  componentWillMount() {
    if (parseInt(localStorage.getItem("count")) > 0) {
      this.setState({
        postPage: JSON.parse(localStorage.getItem("postPage")),
        count: parseInt(localStorage.getItem("count"))
      });
    }
  }

  componentDidMount() {
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    if (localStorage.getItem("loginName") !== this.state.author) {
      this.setState({
        author: localStorage.getItem("loginName")
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  saveStateToLocalStorage() {
    localStorage.setItem("postPage", JSON.stringify(this.state.postPage));
    localStorage.setItem("count", this.state.count);
  }

  writeContent = event => {
    this.setItem(event.target.name, event.target.value);
  };

  // ::::::::::: EVERY KEYSTROKE IS ADDED TO CONTENT :::::::::::
  setItem = (num, text) => {
    const newPostPage = this.state.postPage.slice();
    newPostPage.filter(item => {
      if (item.number === Number(num)) {
        return (item.content = text);
      } else {
        return null;
      }
    });
    this.setState({
      postPage: newPostPage
    });
  };

  // :::::::::: BUTTON RELOADS PREVIOUS DATA IF CLEARED :::::::::::::
  loadItems = () => {
    if (parseInt(localStorage.getItem("count")) > 0) {
      this.setState({
        postPage: JSON.parse(localStorage.getItem("postPage")),
        count: parseInt(localStorage.getItem("count"))
      });
    } else {
      alert("Nothing Saved - Start new Post & it will auto-save!");
    }
  };

  //:::::::::::::::::::: THIS SECTION ADDS ELEMENTS TO THE ARRAY ::::::::::::::::::::
  addSection = event => {
    this.setState({ count: this.state.count + 1 });
    let heading = { type: "h1", content: "", number: this.state.count };
    let author = { type: "author", content: "", number: this.state.count };
    let paragraph = { type: "p", content: "", number: this.state.count };
    let codeSnippet = {
      type: "code",
      content: "",
      number: this.state.count,
      loaded: false,
      language: ""
    };
    let image = {
      type: "img",
      content: "",
      number: this.state.count,
      loaded: false
    };
    let video = {
      type: "video",
      content: "",
      number: this.state.count,
      loaded: false
    };
    if (event.target.name === "h1") {
      this.setState({ postPage: [...this.state.postPage, heading] });
    } else if (event.target.name === "author") {
      this.setState({ postPage: [...this.state.postPage, author] });
    } else if (event.target.name === "p") {
      this.setState({ postPage: [...this.state.postPage, paragraph] });
    } else if (event.target.name === "code") {
      this.setState({ postPage: [...this.state.postPage, codeSnippet] });
    } else if (event.target.name === "img") {
      this.setState({ postPage: [...this.state.postPage, image] });
    } else if (event.target.name === "video") {
      this.setState({ postPage: [...this.state.postPage, video] });
    }
    localStorage.setItem("postPage", JSON.stringify(this.state.postPage));
    localStorage.setItem("count", parseInt(this.state.count));
  };

  // :::::::::::: ABSTRACT FUNCTION FOR DELETING ANY ELEMENT :::::::::::::::
  deleteElement = num => {
    const newPostPage = this.state.postPage.slice();
    const filteredPage = newPostPage.filter(el => el.number !== num);
    this.setState({
      postPage: filteredPage
    });
    localStorage.setItem("postPage", JSON.stringify(this.state.postPage));
    localStorage.setItem("count", this.state.count);
  };

  clearState = () => {
    this.setState({ postPage: [], count: 0 });
    //Ask are you sure?
  };

  //:::::::::::::::::::: HANDLE SUBMIT BELOW  ::::::::::::::::::::
  handleSubmission = () => {
    db.collection("blogs")
      .add({
        post: this.state.postPage,
        count: parseInt(this.state.count),
        id: uuid(),
        author: this.state.author
      })
      .then(docRef => {
        this.setState({
          posted: true,
          reference: docRef.id
        });
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
    this.clearState();
    localStorage.setItem("postPage", []);
    localStorage.setItem("count", 0);
  };

  // ::::::::::::: TOGGLES EDIT VIEW FOR IMG/VID/CODE ::::::::::::::::::
  toggleView = event => {
    const newPostPage = this.state.postPage.slice();
    newPostPage.filter(item => {
      if (item.number === Number(event.target.name)) {
        return (item.loaded = !item.loaded);
      } else {
        return null;
      }
    });
    this.setState({
      postPage: newPostPage
    });
    localStorage.setItem("postPage", JSON.stringify(this.state.postPage));
    localStorage.setItem("count", this.state.count);
  };

  toggleEdit = num => {
    const newPostPage = this.state.postPage.slice();
    newPostPage.filter(item => {
      if (item.number === Number(num)) {
        let thing = item.loaded;
        return (item.loaded = !thing);
      } else {
        return null;
      }
    });
    this.setState({
      postPage: newPostPage
    });

    localStorage.setItem("postPage", JSON.stringify(this.state.postPage));
    localStorage.setItem("count", this.state.count);
  };

  // :::::::: TOGGLES TOOLBAR VIEW :::::::::::::::
  handleToolView = () => {
    this.setState({
      toolbar: !this.state.toolbar
    });
  };

  // :::::::::: HANDLES CODE SYNTAX HIGHLIGHTING :::::::::::::
  languageChoice = lang => {
    let num = lang.target.name;
    let text = lang.target.value;
    const newPostPage = this.state.postPage.slice();
    newPostPage.filter(item => {
      if (item.number === Number(num)) {
        return (item.language = text);
      } else {
        return null;
      }
    });
    this.setState({
      postPage: newPostPage
    });
    localStorage.setItem("postPage", JSON.stringify(this.state.postPage));
  };

  // ::::::::::: RENDER RENDER RENDER RENDER RENDER ::::::::::::::::::::
  render() {
    // ::::::::::: Tool Bar Component ::::::::::::::
    const ToolBar = () => {
      return (
        <Buttons
          addSection={this.addSection}
          clearState={this.clearState}
          loadItems={this.loadItems}
          handleSubmission={this.handleSubmission}
          closeToolBar={this.handleToolView}
          count={this.state.count}
          toolbarView={this.state.toolbar}
        />
      );
    };
    // :::::::::::  MAIN SECTION OF THE PAGE :::::::::::::::
    if (this.state.posted) {
      return (
        <div>
          <h1>Successfully Created your blog!</h1>
          <div>
            <Link className="links navbox" to={`/Post/${this.state.reference}`}>
              View Your Blog Post
            </Link>
          </div>
        </div>
      );
    } else if (this.state.postPage.length > 0) {
      return (
        <div>
          <UserElements
            elements={this.state.postPage}
            writeContent={this.writeContent}
            deleteElement={this.deleteElement}
            toggleView={this.toggleView}
            toggleEdit={this.toggleEdit}
            languageChoice={this.languageChoice}
          />
          <div className="tools-box user-made">
            <ToolBar />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Add Elements to create your blog!</h1>
          <div className="tools-box user-made">
            <ToolBar />
          </div>
        </div>
      );
    }
  }
}

export default BlogMaker;
