import React, { Component } from 'react';
import Firebase from './Firebaseconfig'
import NavSurvey from './NavSurvey';

var uuid = require('uuid-v4');


export default class Survey extends Component {
    
    nameSubmit = (event)=>{ // this event holding the value on ref in input
        this.setState({
            studentName : this.refs.name.value
        }, ()=>{
            console.log(this.state);
            
        })
    }

    answerSelected = (event) =>{
        var answers = this.state.answers;
        if(event.target.name === "answer1"){
            answers.answer1 = event.target.value;
        }else if(event.target.name === "answer2"){
            answers.answer2 = event.target.value;
        }else if(event.target.name === "answer3"){
            answers.answer3 = event.target.value;
        }else if(event.target.name === "answer4"){
            answers.answer4 = event.target.value;
        }else if(event.target.name === "answer5"){
            answers.answer5 = event.target.value;
        }else if(event.target.name === "answer6"){
            answers.answer6 = event.target.value;
        }else if(event.target.name === "answer7"){
            answers.answer7 = event.target.value;
        }else if(event.target.name === "answer8"){
            answers.answer8 = event.target.value;
        }

        // change the state
        this.setState({
            answers : answers
        }, ()=>{
            console.log(this.state);
            
        })
    }

    questionSubmit = () =>{
        Firebase.database().ref("Survey/"+this.state.uid).set({
            studentName : this.state.studentName,
            answers : this.state.answers
        });

        this.setState({
            isSubmit : true
        })
    }

    constructor(props){
        super(props);

        this.state = {
            uid : uuid(), //it gives unique user id
            studentName : "", // this is student name by input
            answers : { //this are the questions
                answer1 : "",
                answer2 : "",
                answer3 : "",
                answer4 : "",
                answer5 : "",
                answer6 : "",
                answer7 : "",
                answer8 : ""   
            },
            isSubmit : false // inisially no one submit anything, so it is false
        }
    }

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
        console.log(uuid());
        console.log(this.state.uid);
        console.log(Firebase);
        
        // in react we can store html in a variable
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmit === false){
            studentName = <div>
                <h1>Welcome to Xiaomi Customer Survey</h1>
                <br/>
                
                <h2>Hey, write your name: </h2>
                <form onSubmit={this.nameSubmit}>
                    <input className="namy" type="text" placeholder="Enter your name" ref="name"/><br/><br/>
                    <input className="feedback-button" type="submit" value="Submit"/>
                </form>
            </div>;
            questions = '';
        }else if(this.state.studentName !== '' && this.state.isSubmit === false){
            studentName = <h1>Welcome to survey, {this.state.studentName}</h1>;
            questions = <div>
                <h2>Here some questions</h2>
                <form onSubmit={this.questionSubmit}>
                    <div className="card">
                        <label>1. How old are you?</label>
                        <table>
                            <tr>
                                <input type="radio" value="Under 18 years old" name="answer1" onChange={this.answerSelected}/> Under 18 years old
                            </tr>
                            <tr>
                                <input type="radio" value="18 - 24 years old" name="answer1" onChange={this.answerSelected}/> 18 - 24 years old
                            </tr>
                            <tr>
                                <input type="radio" value="25 - 55 years old" name="answer1" onChange={this.answerSelected}/> 25 - 55 years old
                            </tr>
                            <tr>
                                <input type="radio" value="over 55 years old" name="answer1" onChange={this.answerSelected}/> over 55 years old
                            </tr>
                        </table>
                        
                    </div>
                    <div className="card">
                    <label>2. What is your occupation?</label>
                        <table>
                            <tr>
                                <input type="radio" value="Student" name="answer2" onChange={this.answerSelected}/> Student
                            </tr>
                            <tr>
                                <input type="radio" value="Job" name="answer2" onChange={this.answerSelected}/> Job
                            </tr>
                            <tr>
                                <input type="radio" value="Business" name="answer2" onChange={this.answerSelected}/> Business
                            </tr>
                            <tr>
                                <input type="radio" value="Other" name="answer2" onChange={this.answerSelected}/> Other
                            </tr>
                        </table>
                    </div>
                    <div className="card">
                    <label>3. Do you own a Xiaomi Smartphone?</label>
                        <table>
                            <tr>
                                <input type="radio" value="Yes" name="answer3" onChange={this.answerSelected}/> Yes
                            </tr>
                            <tr>
                                <input type="radio" value="No" name="answer3" onChange={this.answerSelected}/> No
                            </tr>
                        </table>
                    </div>
                    <div className="card">
                    <label>4. If so, why did you choose to buy a Xiaomi Smartphone?</label>
                        <table>
                            <tr>
                                <input type="radio" value="My friend recommended it to me" name="answer4" onChange={this.answerSelected}/> My friend recommended it to me
                            </tr>
                            <tr>
                                <input type="radio" value="The price suited my budget" name="answer4" onChange={this.answerSelected}/> The price suited my budget
                            </tr>
                            <tr>
                                <input type="radio" value="It looked good" name="answer4" onChange={this.answerSelected}/> It looked good
                            </tr>
                            <tr>
                                <input type="radio" value="I had done some research on it" name="answer4" onChange={this.answerSelected}/> I had done some research on it
                            </tr>
                        </table>
                    </div>
                    <div className="card">
                    <label>5. What is the most important feature for you when choosing a new smartphone?</label>
                        <table>
                            <tr>
                                <input type="radio" value="Price" name="answer5" onChange={this.answerSelected}/> Price
                            </tr>
                            <tr>
                                <input type="radio" value="Camera" name="answer5" onChange={this.answerSelected}/> Camera
                            </tr>
                            <tr>
                                <input type="radio" value="Battery Life" name="answer5" onChange={this.answerSelected}/> Battery Life
                            </tr>
                            <tr>
                                <input type="radio" value="Storage Size" name="answer5" onChange={this.answerSelected}/> Storage Size
                            </tr>
                        </table>
                    </div>
                    <div className="card">
                    <label>6. Do you shop online?</label>
                        <table>
                            <tr>
                                <input type="radio" value="Often" name="answer6" onChange={this.answerSelected}/> Often
                            </tr>
                            <tr>
                                <input type="radio" value="Sometimes" name="answer6" onChange={this.answerSelected}/> Sometimes
                            </tr>
                            <tr>
                                <input type="radio" value="Never" name="answer6" onChange={this.answerSelected}/> Never
                            </tr>
                        </table>
                    </div>
                    <div className="card">
                    <label>7. If you shop online, which websites do you choose to shop from?</label>
                        <table>
                            <tr>
                                <input type="radio" value="Amazom.com" name="answer7" onChange={this.answerSelected}/> Amazom.com
                            </tr>
                            <tr>
                                <input type="radio" value="Flipkart.com" name="answer7" onChange={this.answerSelected}/> Flipkart.com
                            </tr>
                            <tr>
                                <input type="radio" value="Ebay.com" name="answer7" onChange={this.answerSelected}/> Ebay.com
                            </tr>
                            <tr>
                                <input type="radio" value="Amazon.in" name="answer7" onChange={this.answerSelected}/> Amazon.in
                            </tr>
                        </table>
                    </div>
                    <div className="card">
                    <label>8. Do you prefer Xiaomi?</label>
                        <table>
                            <tr>
                                <input type="radio" value="Yes" name="answer8" onChange={this.answerSelected}/> Yes
                            </tr>
                            <tr>
                                <input type="radio" value="No" name="answer8" onChange={this.answerSelected}/> No
                            </tr>
                        </table>
                    </div>
                    <input className="feedback-button" type="submit" value="Submit"/>
                </form>
            </div>;
        }else if(this.state.isSubmit===true){
            studentName = <div> 
                <h1>Thank You: {this.state.studentName}</h1>
                <br />
                <h3>Survey is over, you can logout now :)</h3>
                </div>
        }


        return (
            <div>
                <NavSurvey />
                <br />
                <br/>
                {/*here we call the variable*/}
                {studentName} <br/>
                ---------------------------------------------------------------------
                {questions}
                <br />
                
            </div>
        )
    }
}


// logout=()=>{

//     //logout
//     Firebase.auth().signOut()

//     var lout = document.getElementById("logout")
//     var err = "Thanks for using our application"
//     // lout.classList.add("hide");
//     this.setState({
//         err:err
//     })
// }

// <button onClick={this.logout}  id="logout">Log Out</button><br />