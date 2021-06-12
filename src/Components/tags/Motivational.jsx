import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class Motivational extends Component {
    constructor(props) {
        super(props);
        this.state = {
          motivational: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("motivational").on("value", snapshot => {  
          let motivational = [];     
          snapshot.forEach(snap => {
            motivational.push(snap.val());   
          });
          this.setState({ motivational: motivational });
        })
      }

    render() {
        return (
             <div>
                {this.state.motivational.map(data=>{
                 return(
                   <div className="card">
                    <label1>Motivational</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default Motivational
