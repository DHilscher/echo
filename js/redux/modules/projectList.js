import { queryProject } from "../../config/models";

const getProjectListBegin = () => {
  return { type: "GET_PROJECT_LIST_BEGIN" };
};

const getProjectListSuccess = data => {
  return { type: "GET_PROJECT_LIST_SUCCESS", data };
};

const getProjectListError = Err => {
  return { type: "GET_PROJECT_LIST_ERROR", Err };
};

export const getProjectList = () => {
  return (dispatch) => {
    const allProjects = queryProject().reduce((acc, cur) => {
      acc.push(cur.title);
      return acc;
    }, []);
    dispatch(getProjectListSuccess(allProjects));
  };
};

const initialState = {
  projectList: [],
  errorMsg: {},
  isLoading: false
}

export default (state= initialState, action) => {
  switch(action.type) {
    case 'GET_PROJECT_LIST_BEGIN':
    return {
      ...state,
      isLoading: true,
    }
    
    case 'GET_PROJECT_LIST_SUCCESS':
    return {
      ...state,
      isLoading: false,
      projectList: action.data,
    }

    case 'GET_PROJECT_LIST_ERROR':
    return {
      ...state,
      isLoading: false,
      errorMsg: action.Err,
    }

    default: 
      return state
  }
}