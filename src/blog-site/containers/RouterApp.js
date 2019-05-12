import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "../css/App.css";

import Navbar from "./Navbar";
import BlogMaker from "../functionalComponents/BlogMaker";
import PostContainer from "./PostContainer";
import Login from "./Login";
import IndividualPost from "./IndividualPost";
import Footer from "./Footer";

const RouterApp = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={BlogMaker} />
        <Route exact path="/Kirby" component={PostContainer} />
        <Route exact path="/Login" component={Login} />
        <Route
          path={"/Post/:id"}
          component={props => <IndividualPost postId={props.match.params.id} />}
        />

        <Route path="/" component={Footer} />
      </div>
    </Router>
  );
};

export default RouterApp;
