import React from 'react'
import {Switch, Route} from 'react-router-dom'
import BlogList from './pages/BlogList';

const Blog = () => (

    <Switch>
        <Route exact path='/blog' component={BlogList}/>
    </Switch>

)


export default Blog