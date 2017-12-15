export const writtenAnswer = (data) => {
  return { type: 'ADD_WRITTEN_ANSWER', data }
}

const initialState = {
  writtenAnswer: ''
}

export default (state= initialState, action) => {
  switch(action.type) {
    case 'ADD_WRITTEN_ANSWER':
    return {
      ...state,
      writtenAnswer: action.data
    }

    default: 
      return state
  }
}