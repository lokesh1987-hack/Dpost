import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class Thoughts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          thoughts: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("thoughts").on("value", snapshot => {  
          let thoughts = [];     
          snapshot.forEach(snap => {
            thoughts.push(snap.val());   
          });
          this.setState({ thoughts: thoughts });
        })
      }

    render() {
        return (
             <div>
                {this.state.thoughts.map(data=>{
                 return(
                   <div className="card">
                    <label1>Thoughts</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default Thoughts
