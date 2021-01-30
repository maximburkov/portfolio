import React, { Component } from 'react'
import { NavItem } from 'react-bootstrap'
import Switch from 'react-bootstrap/esm/Switch'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, Route } from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import CreatePost from './CreatePost'
import EditPost from './EditPost'
import { ViewPost } from './ViewPost'
import Login from './Login' 

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="sm">
                    <Navbar.Brand as={Link} to="">
                    <img
                        alt=""
                        src="favicon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Maxim's blog
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <NavItem>
                                <Nav.Link as={Link} to="">About</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="mr-auto">
                        <NavItem className="navbar-right">
                            {/* <Nav.Link as={Link} to="/Blog">Log In</Nav.Link> */}
                            <Login/>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div>
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/Blog" component={Blog} />
                        <Route path="/CreatePost">
                            <CreatePost/>
                        </Route>
                        <Route exact path="/Posts/:postId" component={ViewPost} />
                        <Route exact path="/EditPost/:postId" component={EditPost} />
                    </Switch>
                </div>
            </div>
        )
    }
}
