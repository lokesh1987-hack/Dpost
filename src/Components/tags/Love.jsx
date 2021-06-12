import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class Love extends Component {
    constructor(props) {
        super(props);
        this.state = {
          love: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("love").on("value", snapshot => {  
          let love = [];     
          snapshot.forEach(snap => {
            love.push(snap.val());   
          });
          this.setState({ love: love });
        })
      }

    render() {
        return (
             <div>
                {this.state.love.map(data=>{
                 return(
                   <div className="card">
                    <label1>Love</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default Love
