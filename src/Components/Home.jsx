import React from 'react'
import { fire } from "../fire";
import '../Deign/Home.css';
import { NavLink, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Tag from './Tags'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      messages: [],
      title: ""
    }
  }

  // componentDidMount() {

  //   fire.database().ref("pages").on("value", snapshot => {  //messages
  //     let pages = [];     //messages
  //     snapshot.forEach(snap => {
  //       pages.push(snap.val());   //messages
  //     });
  //     this.setState({ messages: pages });
  //   })
  // }


  handler() {
    console.log(this.state.title);
    console.log(this.state.text);
    var k = this.state.title
    console.log(k)
    if (k.trim() != 0 && this.state.text.trim() != 0) {
      if (k == "currentnews") {
        let messageRef = fire.database().ref('currentnews').orderByKey().limitToLast;
        fire.database().ref('currentnews').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in messages")
      }
      else if (k == "devotion") {
        let messageRef = fire.database().ref('devotion').orderByKey().limitToLast;
        fire.database().ref('devotion').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in pages")
      }
      else if (k == "friendshipgoal") {
        let messageRef = fire.database().ref('friendshipgoal').orderByKey().limitToLast;
        fire.database().ref('friendshipgoal').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in pages")
      } else if (k == "inspiring") {
        let messageRef = fire.database().ref('inspiring').orderByKey().limitToLast;
        fire.database().ref('inspiring').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in pages")
      } else if (k == "love") {
        let messageRef = fire.database().ref('love').orderByKey().limitToLast;
        fire.database().ref('love').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in pages")
      } else if (k == "motivational") {
        let messageRef = fire.database().ref('motivational').orderByKey().limitToLast;
        fire.database().ref('motivational').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in pages")
      } else if (k == "successtory") {
        let messageRef = fire.database().ref('successtory').orderByKey().limitToLast;
        fire.database().ref('successtory').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in pages")
      } else if (k == "thoughts") {
        let messageRef = fire.database().ref('thoughts').orderByKey().limitToLast;
        fire.database().ref('thoughts').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in pages")
      } else if (k == "trending") {
        let messageRef = fire.database().ref('trending').orderByKey().limitToLast;
        fire.database().ref('trending').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in pages")
      }
      else {
        let messageRef = fire.database().ref('other').orderByKey().limitToLast;
        fire.database().ref('other').push(this.state.text);
        this.setState({ text: "" });
        this.setState({ title: "" });
        console.log("Message is send in pages")
      }
      document.getElementById("danger_title").innerHTML = ""
      document.getElementById("danger_message").innerHTML = ""
    }
    else {
      if (k== 0) {
        document.getElementById("danger_title").innerHTML = "Please choose title"
      }
      else {
        document.getElementById("danger_message").innerHTML = "Please Write somethng here"
      }
    }




    // let messageRef = fire.database().ref('pages').orderByKey().limitToLast;   //messages
    // fire.database().ref('pages').push(this.state.text);     //messages
    // this.setState({
    //   text: ""
    // })
  }

  render() {
    return (
      <div >
        <div class="section1">
        <div class="img">
            <div class="thought1">
                <h4>"Don't hide your feelings from the people you care about.</h4><br /> 
                  <h4>  If you wait too long to tell them,</h4> <br />
                   <h4> you might miss your chance."</h4>
            </div>
            <div class="thought2">
                <h1>"Let me live, love</h1>
                <h3>and say it well in good sentences."</h3>
            </div>
           
        </div>
        </div>
        <Router>
          <div className="section2">
            <div className="tags">
              <NavLink className="tag" exact to="/currentnews">Current News</NavLink>
              <NavLink className="tag" exact to="/motivational">Motivatcional</NavLink>
              <NavLink className="tag" exact to="/inspiring">Inspiring</NavLink>
              <NavLink className="tag" exact to="/love">Love</NavLink>
              <NavLink className="tag" exact to="/thoughts">Thoughts</NavLink>
              <NavLink className="tag" exact to="/friendshipgoal">Friendship Goal</NavLink>
              <NavLink className="tag" exact to="/trending">Trending</NavLink>
              <NavLink className="tag" exact to="/devotion">Devotion</NavLink>
              <NavLink className="tag" exact to="/successtory">Succes Story</NavLink>
              <NavLink className="tag" exact to="/other">Other</NavLink>
            </div>
          </div>
          <div className="section3">
            <div className="posts">
              <div className="input_container">
                <div className="title_container">
                  <lable id="lable" /* style={"font-size: 2vw;font-weight: 900; margin-right: 15vw; font-family: Righteous;"} */>Title :</lable>
                  <select name="input" id="input" value={this.state.title} onChange={(t) => { this.setState({ title: t.target.value }) }}>
                    <option value="0">--Select Tags--</option>
                    <option value="motivational">Motivational</option>
                    <option value="currentnews">Current News</option>
                    <option value="inspiring">Inspiring</option>
                    <option value="love">Love</option>
                    <option value="devotion">Devotion</option>
                    <option value="successtory">Succes Story</option>
                    <option value="trending">Trending</option>
                    <option value="thoughts">Thoughts</option>
                    <option value="friendshipgoal">Friendship Goal</option>
                    <option value="other">Other</option>

                  </select>
                  <label id="danger_title"></label>
                </div>
                <div className="massage_container">
                  <span> <label for="Message">Message :</label></span>
                  <textarea className="input" type="text" value={this.state.text} onChange={(e) => { this.setState({ text: e.target.value }) }} />
                  <label id="danger_message"></label>
                </div>
                <button type="submit" onClick={() => { this.handler() }} >Submit</button>
              </div>
              <div className="post_container">
                <div >

                  <Tag />

                  {/* {this.state.messages.map(data=>{
                 return(
                   <div className="card">
                    <label1>Motivational</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}  */}
                </div>
              </div>
            </div>
          </div>
        </Router>
        <footer>
          <h4>Copyright</h4>
        </footer>
      </div>

    );
  }
}