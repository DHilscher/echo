export const projectTitle = (data) => {
  return { type: 'ADD_PROJECT_TITLE', data }
}

export const projectDesc = (data) => {
  return { type: 'ADD_PROJECT_DESC', data }
}

const initialState = {
  projectTitle: '',
  projectDesc: ''

}

export default (state= initialState, action) => {
  switch(action.type) {
    case 'ADD_PROJECT_TITLE':
    return {
      ...state,
      projectTitle: action.data
    }
    
    case 'ADD_PROJECT_DESC':
    return {
      ...state,
      projectDesc: action.data
    }

    default: 
      return state
  }
}