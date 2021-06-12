import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class SuccesStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          successtory: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("successtory").on("value", snapshot => {  
          let successtory = [];     
          snapshot.forEach(snap => {
            successtory.push(snap.val());   
          });
          this.setState({ successtory: successtory });
        })
      }

    render() {
        return (
             <div>
                {this.state.successtory.map(data=>{
                 return(
                   <div className="card">
                    <label1>Succes_Story</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default SuccesStory
