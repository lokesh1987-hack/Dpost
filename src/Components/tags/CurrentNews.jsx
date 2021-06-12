import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class CurrentNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentnews: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("currentnews").on("value", snapshot => {  
          let currentnews = [];     
          snapshot.forEach(snap => {
            currentnews.push(snap.val());   
          });
          this.setState({ currentnews: currentnews });
        })
      }

    render() {
        return (
             <div>
                {this.state.currentnews.map(data=>{
                 return(
                   <div className="card">
                    <label1>Current_News</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default CurrentNews
