

import { GET_USER_DATA, GET_USER_DATA_ERROR, GET_USER_DATA_LOADING,IS_TOKEN_EXPIRED } from "../actions";

export interface GetUserDataActionPayload {
    data: any;
    isLoading: boolean;
    isError: boolean;
    isTokenExpired:boolean;
  }
interface GetUserDataActionBase{
    type:string;
    payload:any
}

export interface GetUserDataAction extends GetUserDataActionBase {
    type: typeof GET_USER_DATA;
  }
  
  export interface GetUserDataLoadingAction extends GetUserDataActionBase {
    type: typeof GET_USER_DATA_LOADING;
  }
  
  export interface GetUserDataErrorAction extends GetUserDataActionBase {
    type: typeof GET_USER_DATA_ERROR;
  }
  export interface IsTokenExpiredAction extends GetUserDataActionBase {
    type: typeof IS_TOKEN_EXPIRED;
  }
  type AllActions = GetUserDataAction | GetUserDataLoadingAction | GetUserDataErrorAction |IsTokenExpiredAction

const initialState: GetUserDataActionPayload = {
  data:null,
  isLoading: true,
  isError: false,
  isTokenExpired:false,
};

const getUserData = (state: GetUserDataActionPayload = initialState, action: AllActions): GetUserDataActionPayload=> {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case GET_USER_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    case IS_TOKEN_EXPIRED:
      return {
        ...state,
        isTokenExpired: action.payload,
      };
    default:
      return state;
  }
};

export default getUserData;
