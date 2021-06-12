import React, { Component } from 'react'
import fire from "/ReactProject/myfirstreact/src/fire";

export class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = {
          trending: []
        }
      }
    
      componentDidMount() {
    
        fire.database().ref("trending").on("value", snapshot => {  
          let trending = [];     
          snapshot.forEach(snap => {
            trending.push(snap.val());   
          });
          this.setState({ trending: trending });
        })
      }

    render() {
        return (
             <div>
                {this.state.trending.map(data=>{
                 return(
                   <div className="card">
                    <label1>Trending</label1><br />
                    <label2>"{data}"</label2>
                  </div>
                  )})}                 
            </div>
        )
    }
}

export default Trending

