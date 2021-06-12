import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class FriendshipGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          friendshipgoal: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("friendshipgoal").on("value", snapshot => {  
          let friendshipgoal = [];     
          snapshot.forEach(snap => {
            friendshipgoal.push(snap.val());   
          });
          this.setState({ friendshipgoal: friendshipgoal });
        })
      }

    render() {
        return (
             <div>
                {this.state.friendshipgoal.map(data=>{
                 return(
                   <div className="card">
                    <label1>Friendship_Goal</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default FriendshipGoal
