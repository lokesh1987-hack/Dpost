
import React from 'react';
import './App.css';
// import { Card } from "@material-ui/core";
import Header from "./Components/Header"
// import { Dropdown } from "bootstrap";
// import { Dropdown } from "bootstrap";
import { BrowserRouter as Router} from 'react-router-dom'
import Routing from './Components/Routing'
import Tags from './Components/Tags'
// import Home from './Components/Home'
// import Images from './Components/Images'
// import About from './Components/About'
// import Contact from './Components/Contact'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text :""
  }
}

 
  render(){
    return (
      <div class="App">
        <Router> 
          <Header />
          <Routing />
        </Router>
       
      </div>

    );
  }
}

