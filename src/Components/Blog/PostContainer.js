import React, { Component } from "react";
import { db } from "./db/firebase";
import "firebase/firestore";
import "./PostContainer.css";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      rightClick: false,
      soloPost: false,
      reference: ""
    };
  }

  componentDidMount() {
    this.setState({
      soloPost: false
    });
    db.collection(`blogs`)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc._document.proto.fields.author) {
            if (
              doc._document.proto.fields.author.stringValue === "Kirby Campbell"
            )
              this.setState({
                posts: [...this.state.posts, doc]
              });
          }
        });

        const sortedPosts = this.state.posts
          .sort((a, b) => {
            return (
              new Date(a._document.proto.updateTime).getTime() -
              new Date(b._document.proto.updateTime).getTime()
            );
          })
          .reverse();

        this.setState({
          posts: sortedPosts
        });
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  loadSinglePost = id => {
    this.setState({
      soloPost: true
    });
    return null;
  };

  loadReference = id => {
    //console.log(id.target.id);
    this.setState({
      reference: id.target.id
    });
  };

  // link format https://siq-blog.herokuapp.com/Post/YWXjkJwBiwAQNPxiPPD9
  render() {
    return (
      <div className="container-blog">
        <div className="outer-card-blog">
          {this.state.posts.map(post => {
            let time = new Date(
              post._document.proto.createTime
            ).toLocaleString();
            let pictureSrc;
            post._document.proto.fields.post.arrayValue.values.find(els => {
              if (els.mapValue.fields.type.stringValue === "img") {
                return (pictureSrc = els.mapValue.fields.content.stringValue);
              } else {
                return null;
              }
            });

            return (
              <a
                href={"https://blog-creator.jkirbycampbell.com/Post/" + post.id}
                key={post.id}
                className="boxerson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  id={post.id}
                  onClick={this.loadSinglePost}
                  onMouseOver={this.loadReference}
                  className="card"
                >
                  <img
                    src={pictureSrc}
                    id={post.id}
                    alt={post.id}
                    className="container-image image-card"
                  />

                  <h1
                    id={post.id}
                    onClick={this.loadSinglePost}
                    onMouseOver={this.loadReference}
                    className="h1-card"
                  >
                    {
                      post._document.proto.fields.post.arrayValue.values["0"]
                        .mapValue.fields.content.stringValue
                    }
                  </h1>
                  <p
                    id={post.id}
                    onClick={this.loadSinglePost}
                    onMouseOver={this.loadReference}
                    className="p-card"
                  >
                    {time}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostContainer;
