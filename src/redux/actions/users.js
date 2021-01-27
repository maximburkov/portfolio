export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const RESET_ERROR = "RESET_ERROR";

export const login = (login, password) => ({
    type: LOGIN,
    payload : { login, password }
})

export const logout = () => ({
    type: LOGOUT
})

export const resetError = () => ({
    type: RESET_ERROR
})

// function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
