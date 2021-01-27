import React, {useState} from 'react'
import { login, logout, resetError } from '../redux/actions/users'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Modal, Form, Alert } from 'react-bootstrap'

const Login = ({isLoggedIn,
     login,
     logout, 
     resetError, 
     isLoginError}) => {
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
        console.log('handle login');
        login(name, password);
    }

    const handleLogout = () => {
        console.log('handle logout');
        logout();
    }

    React.useEffect(() => {
        if(show && isLoggedIn)
            setShow(false);
    }, [isLoggedIn])

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
    isLoginError : state.users.isLoginError
});

export default connect(mapStateToProps, {login, logout, resetError} )(Login);


