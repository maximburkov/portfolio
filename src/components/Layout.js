import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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

