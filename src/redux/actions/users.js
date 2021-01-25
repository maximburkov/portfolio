export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (login, password) => ({
    type: LOGIN,
    payload : { login, password }
})

export const logout = () => ({
    type: LOGOUT
})

function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
