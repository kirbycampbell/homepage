import React, { Component } from "react";
import { db } from "../db/firebase";
import PostedElements from "./PostedElements";
import "../css/App.css";
import SocialBox from "./SocialBox";

class InidividualPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postPage: [],
      count: 0,
      loaded: false,
      postId: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.postId !== prevState.postId) {
      return { postId: nextProps.postId };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.postId !== this.state.postId) {
      this.setState({ postPage: [], postId: this.props.postId });
      this.loadDb(this.props.postId);
    }
  }

  async loadDb(id) {
    await db
      .collection(`blogs/`)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.id === id) {
            doc._document.proto.fields.post.arrayValue.values.forEach(
              element => {
                this.setState({
                  postPage: [...this.state.postPage, element.mapValue.fields],
                  postId: id
                });
              }
            );
          }
        });
        this.setState({ loaded: true });
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadDb(this.props.postId);
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <SocialBox />
          <PostedElements elements={this.state.postPage} />
          <div className="footer-space"> </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default InidividualPost;
