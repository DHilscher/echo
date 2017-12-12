const getAnswerBegin = () => {
  return { type: "GET_ANSWER_BEGIN" };
};

const getAnswerSuccess = data => {
  return { type: "GET_ANSWER_SUCCESS", data };
};

const getAnswerError = Err => {
  return { type: "GET_ANSWER_ERROR", Err };
};

export const getAnswer = () => async dispatch => {
  dispatch(getAnswerBegin());
  try {
    const data = await fetch(
      "/Users/mark/Desktop/REDAppDev/Echo/js/redux/modules/SurveyAnswer.json"
    );
    const Answer = await data.json();
    dispatch(getAnswerSuccess(Answer));
  } catch (Err) {
    dispatch(getAnswerError(Err));
  }
};

const initialState = {
  answer: [],
  errorMsg: {},
  isLoading: false
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ANSWER_BEGIN":
      return {
        ...state,
        isLoading: true
      };

    case "GET_ANSWER_SUCCESS":
      return {
        ...state,
        answer: action.data,
        isLoading: false
      };

    case "GET_ANSWER_ERROR":
      return {
        ...state,
        errorMsg: action.Err,
        isLoading: false
      };

    default:
      return state;
  }
};

export default answerReducer;
