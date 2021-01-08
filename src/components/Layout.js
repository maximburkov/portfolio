import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Navigation from './Navigation'

export class Layout extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navigation/>
                </Router>
            </div>
        )
    }
}

export default Layout

