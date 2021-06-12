import React from 'react'
import Home from './Home'
import About from './About'
import Images from './Images'
import Contact from './Contact'

import { Switch, Route } from 'react-router-dom'


function Routing() {


    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/images" component={Images} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}


export default Routing
