

import { GET_APPLICANT_DATA, GET_APPLICANT_DATA_ERROR, GET_APPLICANT_DATA_LOADING,IS_TOKEN_EXPIRED } from "../actions";

export interface GetApplicantDataActionPayload {
    data: any;
    isLoading: boolean;
    isError: boolean;
    isTokenExpired:boolean;
  }
interface GetApplicantDataActionBase{
    type:string;
    payload:any
}

export interface GetApplicantDataAction extends GetApplicantDataActionBase {
    type: typeof GET_APPLICANT_DATA;
  }
  
  export interface GetApplicantDataLoadingAction extends GetApplicantDataActionBase {
    type: typeof GET_APPLICANT_DATA_LOADING;
  }
  
  export interface GetApplicantDataErrorAction extends GetApplicantDataActionBase {
    type: typeof GET_APPLICANT_DATA_ERROR;
  }
  export interface IsTokenExpiredAction extends GetApplicantDataActionBase {
    type: typeof IS_TOKEN_EXPIRED;
  }
  type AllActions = GetApplicantDataAction | GetApplicantDataLoadingAction | GetApplicantDataErrorAction |IsTokenExpiredAction

const initialState: GetApplicantDataActionPayload = {
  data:null,
  isLoading: true,
  isError: false,
  isTokenExpired:false,
};

const getApplicantData = (state: GetApplicantDataActionPayload = initialState, action: AllActions): GetApplicantDataActionPayload=> {
  switch (action.type) {
    case GET_APPLICANT_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case GET_APPLICANT_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_APPLICANT_DATA_ERROR:
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

export default getApplicantData;
