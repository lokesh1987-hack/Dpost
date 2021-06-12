import React from 'react'
import { Route, Switch } from 'react-router'
import CurrentNews from './tags/CurrentNews'
import Devotion from './tags/Devotion'
import FriendshipGoal from './tags/FriendshipGoal'
import Inspiring from './tags/Inspiring'
import Love from './tags/Love'
import Motivational from './tags/Motivational'
import Other from './tags/Other'
import SuccesStory from './tags/SuccesStory'
import Thoughts from './tags/Thoughts'
import Trending from './tags/Trending'

function Tags() {
    return (
        <div>
            <Switch>
                <Route exact path="/motivational" component={Motivational} />
                <Route exact path="/currentnews" component={CurrentNews} />
                <Route exact path="/devotion" component={Devotion} />
                <Route exact path="/friendshipgoal" component={FriendshipGoal} />
                <Route exact path="/inspiring" component={Inspiring} />
                <Route exact path="/love" component={Love} />
                <Route exact path="/successtory" component={SuccesStory} />
                <Route exact path="/thoughts" component={Thoughts} />
                <Route exact path="/trending" component={Trending} />
                <Route exact path="/other" component={Other} />
            </Switch>
        </div>
    )
}


export default Tags
