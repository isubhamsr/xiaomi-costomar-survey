import React, { Component } from 'react'
import Firebase from './Firebaseconfig'

export default class NavSurvey extends Component {

    logout=()=>{

        //logout
        Firebase.auth().signOut()
    
        var lout = document.getElementById("logout")
        var err = "Thanks for using our application"
        // lout.classList.add("hide");
        this.setState({
            err:err
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark justify-content-between">
                    <a className="navbar-brand">Xiaomi Customer Survey</a>
                        <button className="btn btn-danger my-2 my-sm-0" onClick={this.logout}>Log Out</button>
                    </nav>
            </div>
        )
    }
}
