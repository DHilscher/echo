export const nextProjectPage = data => ({
  type: "NEXT_PROJECT_PAGE",
  payload: data
});

const initialState = {
  projectPage: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_PROJECT_PAGE":
      return {
        ...state,
        projectPage: action.payload
      };
    default:
      return state;
  }
};
