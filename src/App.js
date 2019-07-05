import React from 'react';
import Firebase from "./Components/Firebaseconfig"
import './App.css';
import Login from './Components/Login';
import Survey from './Components/Survey';
import Footer from "./Footer"

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    
  }

  componentDidMount=()=> {
    this.authListener();
  }

  authListener=()=> {
    Firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div className="App">
       
      { this.state.user ?  (<Survey />) : (<Login />) }
      <br/>
      <br/>
      <Footer />
    </div>
    )
  }
}

 export default App;