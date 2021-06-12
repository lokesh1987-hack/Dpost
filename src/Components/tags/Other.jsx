import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class Other extends Component {
    constructor(props) {
        super(props);
        this.state = {
          other: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("other").on("value", snapshot => {  
          let other = [];     
          snapshot.forEach(snap => {
            other.push(snap.val());   
          });
          this.setState({ other: other });
        })
      }

    render() {
        return (
             <div>
                {this.state.other.map(data=>{
                 return(
                   <div className="card">
                    <label1>Other</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default Other

