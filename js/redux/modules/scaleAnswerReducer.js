export const scaleQuestion = (data) => {
  return { type: 'ADD_SCALE_QUESTION', data }
}

export const scaleAnswers = (data) => {
  return { type: 'ADD_SCALE_ANSWER', data }
}

export const scaleValue = (data) => {
  return { type: 'ADD_SCALE_VALUE', data }
}

const initialState = {
  scaleQuestion: '',
  scaleAnswer: '',
  scaleValue
}

export default (state= initialState, action) => {
  switch(action.type) {
    case 'ADD_SCALE_QUESTION':
    return {
      ...state,
      scaleQuestion: action.data
    }

    case 'ADD_SCALE_ANSWER':
    return {
      ...state,
      scaleAnswer: action.data
    }

    case 'ADD_SCALE_VALUE':
    return {
      ...state,
      scaleValue: action.data
    }

    default: 
      return state
  }
}