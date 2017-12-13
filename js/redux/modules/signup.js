export const fullname = (data) => {
    return { type: 'ADD_FULLNAME', data }
}

export const occupation = (data) => {
    return { type: 'ADD_OCCUPATION', data }
}

export const email = (data) => {
    return { type: 'GET_EMAIL', data }
}

export const password = (data) => {
    return { type: 'GET_PASSWORD', data }
}

const initialState = {
    fullname: '',
    occupation: '',
    email: '',
    password: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FULLNAME':
            return { ...state, fullname: action.data}
        case 'ADD_OCCUPATION':
            return { ...state, occupation: action.data}
        case 'GET_EMAIL':
            return { ...state, email: action.data}
        case 'GET_PASSWORD':
            return { ...state, password: action.data}
        default: 
            return state
    }
}