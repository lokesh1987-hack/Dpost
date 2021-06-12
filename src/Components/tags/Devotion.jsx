import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class Devotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          devotion: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("devotion").on("value", snapshot => {  
          let devotion = [];     
          snapshot.forEach(snap => {
            devotion.push(snap.val());   
          });
          this.setState({ devotion: devotion });
        })
      }

    render() {
        return (
             <div>
                {this.state.devotion.map(data=>{
                 return(
                   <div className="card">
                    <label1>Devotion</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default Devotion
