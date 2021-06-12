import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class Inspiring extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inspiring: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("inspiring").on("value", snapshot => {  
          let inspiring = [];     
          snapshot.forEach(snap => {
            inspiring.push(snap.val());   
          });
          this.setState({ inspiring: inspiring });
        })
      }

    render() {
        return (
             <div>
                {this.state.inspiring.map(data=>{
                 return(
                   <div className="card">
                    <label1>Inspiring</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default Inspiring
