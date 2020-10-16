import React, { Component } from 'react';
import {Route, withRouter} from "react-router-dom";
import './App.css';

//Header, footer, friend list, profile, posts
import Header from "./components/Header";
import LoginForm from "./components/forms/LoginForm";
import Profile from "./components/Profile"
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "Chewy",
        password: "HansPal1",
        profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShmnxkgxMaKHlolPPw0BlJw4FfKr4g6QGS_w&usqp=CAU",
        posts: [],
        friends: []
      },
      loggedIn: false,
      error: ""
    }

    this.logIn = this.logIn.bind(this)
  }

  logIn(e, userData) {
    e.preventDefault();
    const user = this.state.user;
    if(userData.username === user.username && userData.password === user.password) {
      this.setState({
        loggedIn: true
      })
      this.props.history.push('/profile');
      localStorage.setItem("jwt", "abcdefghijklmnop")
    } else {
      this.setState({ error: "Incorrect credentials"})
    }
  }

  componentDidMount() {
    if(localStorage.getItem("jwt")) {
      this.setState({
        loggedIn: true
      })
    }
    // When working with a real database, fire off an http request with the jwt token to get back the user data
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
    this.setState({
      loggedIn: false
    })
    
  }
  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
        <Route path="/login" render={(props) => <LoginForm logIn={this.logIn} error={this.state.error}/>} />
        <Route path="/profile" render={(props) => <Profile user={this.state.user} />} />
      </div>
    );
  }
  
}

export default withRouter(App);
