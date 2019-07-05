import React, { Component } from 'react'
import Firebase from "./Firebaseconfig"
import NavLogin from './NavLogin';


var uuid = require('uuid-v4');


export default class Authen extends Component {

    constructor(props){
        super(props);

        this.state = {
            uid : uuid(),
            err : ""
        }
    }

    login=()=>{
        const email = this.refs.email.value;
        const pass = this.refs.password.value;
        console.log(email, pass);

        const auth = Firebase.auth();

        //for log in
        const promise = auth.signInWithEmailAndPassword(email,pass);

        
        
        // handle log in promises
        promise.then(()=>{
            var lout = document.getElementById("logout");
            // lout.classList.remove("hide");
        })

        var err = "Welcome our appication"
        this.setState({
            err:err
        })

        promise.catch((e)=>{
            var err = e.message;
            console.log(err)
            this.setState({
                err:err
            })
        })    
    }

    signin=()=>{
        const email = this.refs.email.value;
        const pass = this.refs.password.value;
        console.log(email,pass);

        const auth = Firebase.auth()

        // need to create a user

        const promise = auth.createUserWithEmailAndPassword(email,pass);

        promise.then(() =>{
            var err = "Welcome "+ email; // to show the user in poge
            // push data (email & password) in database
            Firebase.database().ref("users/" + this.state.uid).set({
               email : email,
               pass : pass 
            })
            
            this.setState({
                err : err
            })
        }).catch(e =>{
            var err = e.message;
            this.setState({
                err:err
            })
        })

    }


    logout=()=>{

        //logout
        Firebase.auth().signOut()

        var lout = document.getElementById("logout")
        var err = "Thanks for using our application"
        lout.classList.add("hide");
        this.setState({
            err:err
        })
    }

    google=()=>{
        console.log("Google click");

        // we need a provider
        var provider = new Firebase.auth.GoogleAuthProvider() // creating a new provider
        // it reterns a promise
        var promise = Firebase.auth().signInWithPopup(provider);

        promise.then((result)=>{
            var user = result.user
            // database entry
            Firebase.database().ref("google/"+ this.state.uid).set({
                email : user.email,
                name : user.displayName
            })
        })

        
    }

    render() {
        // console.log(Firebase);
        
        return (
            <div>
                <NavLogin />
                <br/>
                <br/>
                <h1>Welcome to Xiaomi Customer Survey</h1>
                <input type="email" placeholder="Enter your email" id="email" ref="email" required/><br/>
                <input type="password" placeholder="Enter your password" id="pass" ref="password" required/><br/>
                <p>{this.state.err}</p>
                <p>*Note: First you need to sign-in</p>
                <button onClick={this.login} >Log In</button>
                <button onClick={this.signin}>Sign Up</button>
                

                
            </div>
        )
    }
}
