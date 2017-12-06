export const nextRegisterPage = data => ({
    type: "NEXT_REGISTER_PAGE",
    payload: data
  });
  const initialState = {
    registerPage: 1
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case "NEXT_REGISTER_PAGE":
        return {
          ...state,
          registerPage: action.payload
        };
      default:
        return state;
    }
  };
  