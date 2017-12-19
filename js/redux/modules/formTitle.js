export const addFormTitle = data => {
  return { type: "ADD_FORM_TITLE", data };
};

const initialState = {
  formTitle: '',
}

export default (state= initialState, action) => {
  switch(action.type) {
    case 'ADD_FORM_TITLE':
    return {
      ...state,
      formTitle: action.data
    }

    default: 
      return state
  }
}