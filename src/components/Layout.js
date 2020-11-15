import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Blog from './Blog'

export class Layout extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/About">About</Link>
                    <br/>
                    <Link to="/Blog">Blog</Link>
                    <Route path="/About" component={About} />
                    <Route path="/Blog" component={Blog} />
                </Router>
            </div>
        )
    }
}

export default Layout

