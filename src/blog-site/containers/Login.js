import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    loginName: "",
    submitted: false
  };

  componentDidMount() {
    if (localStorage.getItem("loginName"))
      this.setState({
        loginName: localStorage.getItem("loginName")
      });
  }

  handleLogin = event => {
    event.preventDefault();
    localStorage.setItem("loginName", this.state.loginName);
    this.setState({
      submitted: true
    });
  };

  handleInput = event => {
    this.setState({
      loginName: event.target.value
    });
  };
  render() {
    if (this.state.submitted) {
      return <Redirect to="/" />;
    } else
      return (
        <div>
          <span>Type Your name to Login as an author:</span>
          <form>
            <input
              onChange={this.handleInput}
              placeholder="Type Name"
              value={this.state.loginName}
              className="form-control"
              style={{ width: "500px", margin: "auto", marginTop: "20px" }}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleLogin}
              style={{ width: "160px", margin: "auto", marginTop: "20px" }}
            >
              Login
            </button>
          </form>
          <img
            src="https://media.giphy.com/media/GcSqyYa2aF8dy/giphy.gif"
            alt="do it"
            style={{ marginTop: "100px", height: "300px" }}
          />
        </div>
      );
  }
}
export default Login;
