import React, { Component } from 'react'
import { NavItem } from 'react-bootstrap'
import Switch from 'react-bootstrap/esm/Switch'
import Navbar from 'react-bootstrap/Navbar'
import { Link, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import About from './About'
import Blog from './Blog'
import CreatePost from './CreatePost'
import { ViewPost } from './ViewPost'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand as={Link} to="/About">Home</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <NavItem>
                                <Nav.Link as={Link} to="/About">About</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <Switch>
                        <Route path="/About" component={About} />
                        <Route path="/Blog" component={Blog} />
                        <Route path="/CreatePost">
                            <CreatePost/>
                        </Route>
                        <Route exact path="/Posts/:postId" component={ViewPost} />
                    </Switch>
                </div>
            </div>
        )
    }
}
