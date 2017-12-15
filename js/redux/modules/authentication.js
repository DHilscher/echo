const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = user => ({
    type: LOGIN,
    payload: user
})

export const logout = () => ({
    type: LOGOUT,
})


export default (state = {isAuthed: null}, action) => {
    
    switch(action.type) {
        case LOGIN:
            return { ...state, user: action.payload, isAuthed: true };
        case LOGOUT:
            return { ...state, user: null, isAuthed: false}
        default:
            return state;
    }
}