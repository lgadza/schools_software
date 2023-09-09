

import { EDIT_USER_DATA, EDIT_USER_DATA_ERROR, EDIT_USER_DATA_LOADING } from "../actions";

export interface EditPersonalDataActionPayload {
    data: any;
    isLoading: boolean;
    isError: boolean;
  }
interface EditPersonalDataActionBase{
    type:string;
    payload:EditPersonalDataActionPayload
}

export interface EditPersonalDataAction extends EditPersonalDataActionBase {
    type: typeof EDIT_USER_DATA;
  }
  
  export interface EditPersonalDataLoadingAction extends EditPersonalDataActionBase {
    type: typeof EDIT_USER_DATA_LOADING;
  }
  
  export interface EditPersonalDataErrorAction extends EditPersonalDataActionBase {
    type: typeof EDIT_USER_DATA_ERROR;
  }
  type AllActions = EditPersonalDataAction | EditPersonalDataLoadingAction | EditPersonalDataErrorAction

const initialState: EditPersonalDataActionPayload = {
  data:null,
  isLoading: true,
  isError: false,
};

const editPersonalData = (state: EditPersonalDataActionPayload = initialState, action: AllActions): EditPersonalDataActionPayload=> {
  switch (action.type) {
    case EDIT_USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case EDIT_USER_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case EDIT_USER_DATA_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default editPersonalData;
