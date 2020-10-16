import React, { Component } from 'react';

import './App.css';

//Header, footer, friend list, profile, posts

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
  }

  logIn(e, userData) {
    e.preventDefault();
    const user = this.state.user;
    if(userData.username === user.username && userData.password === user.password) {
      this.setState({
        loggedIn: true
      })
    } else {
      this.setState({ error: "Incorrect credentials"})
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Salyd</h1>
          <button>Log In / Register</button>
        </header>
      </div>
    );
  }
  
}

export default App;
