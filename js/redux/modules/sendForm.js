export const addRecipientName = data => ({
  type: "ADD_RECIPIENT_NAME",
  payload: data
});

export const addRecipientEmail = data => ({
  type: "ADD_RECIPIENT_EMAIL",
  payload: data
});

export const updateToSentList = data => ({
  type: "UPDATE_SENT_LIST",
  payload: data
});

const initialState = {
  recipientName:'',
  recipientEmail:'',
  sentList:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RECIPIENT_NAME":
      return {
        ...state,
        recipientName: action.payload
      };
    case "ADD_RECIPIENT_EMAIL":
      return {
        ...state,
        recipientEmail: action.payload
      };
    case "UPDATE_SENT_LIST":
      return {
        ...state,
        recipientName:'',
        recipientEmail:'',
        sentList: action.payload
      };
    default:
      return state;
  }
};
  