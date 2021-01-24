import React, {useState} from 'react'
import { login, logout } from '../redux/actions/users'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap'

const Login = ({isLoggedIn, login, logout}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = () => {
        console.log('handle login');
        login();
    }

    const handleLogout = () => {
        console.log('handle logout');
        logout();
    }

    return (
        <div>    
            {isLoggedIn
                ? <Button onClick={handleLogout} variant="outline-light">Log Out</Button>
                : <Button onClick={handleShow} variant="outline-light">Log In</Button>
            } 
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Logging in</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                <Button variant="primary" onClick={handleLogin}>
                    Log In
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
  )
}

const mapStateToProps = state => {
    const isLoggedIn = state.users.isLoggedIn;
    return { isLoggedIn };
}

export default connect(mapStateToProps, {login, logout} )(Login);


