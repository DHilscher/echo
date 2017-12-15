export const multipleChoiceQuestion = (data) => {
  return { type: 'ADD_MULTIPLE_CHOICE_QUESTION', data }
}

export const multipleChoiceAnswersA = (data) => {
  return { type: 'ADD_MULTIPLE_CHOICE_ANSWERA', data }
}

export const multipleChoiceAnswersB = (data) => {
  return { type: 'ADD_MULTIPLE_CHOICE_ANSWERB', data }
}

export const multipleChoiceAnswersC = (data) => {
  return { type: 'ADD_MULTIPLE_CHOICE_ANSWERC', data }
}

export const multipleChoiceAnswersD = (data) => {
  return { type: 'ADD_MULTIPLE_CHOICE_ANSWERD', data }
}

const initialState = {
  multipleChoice: '',
  multipleChoiceAnswersA: '',
  multipleChoiceAnswersB: '',
  multipleChoiceAnswersC: '',
  multipleChoiceAnswersD: '',
}

export default (state= initialState, action) => {
  switch(action.type) {
    case 'ADD_MULTIPLE_CHOICE_QUESTION':
    return {
      ...state,
      multipleChoice: action.data
    }

    case 'ADD_MULTIPLE_CHOICE_ANSWERA':
    return {
      ...state,
      multipleChoiceAnswersA: action.data
    }

    case 'ADD_MULTIPLE_CHOICE_ANSWERB':
    return {
      ...state,
      multipleChoiceAnswersB: action.data
    }

    case 'ADD_MULTIPLE_CHOICE_ANSWERC':
    return {
      ...state,
      multipleChoiceAnswersC: action.data
    }

    case 'ADD_MULTIPLE_CHOICE_ANSWERD':
    return {
      ...state,
      multipleChoiceAnswersD: action.data
    }

    default: 
      return state
  }
}