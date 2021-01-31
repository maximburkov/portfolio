import React, {useState} from 'react'
import { login, logout, resetError } from '../redux/actions/users'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Modal, Form, Alert } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

const Login = ({isLoggedIn,
     login,
     logout, 
     resetError, 
     isLoginError,
     loggedInAs}) => {
         debugger;
    const [show, setShow] = useState(false);
    const [name, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onLoginChanged = e => setLogin(e.target.value);
    const onPasswordChanged = e => setPassword(e.target.value);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        resetError();
        setShow(true);
    }

    const handleLogin = () => {
        login(name, password);
    }

    const handleLogout = () => {
        logout();
    }

    React.useEffect(() => {
        if(show && isLoggedIn)
            setShow(false);
    }, [isLoggedIn])

    return (
        <div>    
            {isLoggedIn
                ? 
                <div>
                    <Navbar.Text>
                        Signed in as: {loggedInAs} {' '}
                    </Navbar.Text>
                    <Button onClick={handleLogout} variant="outline-light">Log Out</Button>
                </div>
                : <Button onClick={handleShow} variant="outline-light">Log In</Button>
            } 
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Logging in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {isLoginError &&
                          <Alert variant="danger">
                          Username or password is incorrect
                        </Alert>
                        }
                        <Form.Group controlId="form-login">
                            <Form.Label>Login</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter login" 
                            onChange={onLoginChanged}/>
                        </Form.Group>
                        <Form.Group controlId="form-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Enter password" 
                            onChange={onPasswordChanged}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
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

const mapStateToProps = state => ({ 
    isLoggedIn : state.users.isLoggedIn,
    isLoginError : state.users.isLoginError,
    loggedInAs : state.users.user ? state.users.user.login : ''
});

export default connect(mapStateToProps, {login, logout, resetError} )(Login);


