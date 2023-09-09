

import { EDIT_APPLICANT_DATA, EDIT_APPLICANT_DATA_ERROR, EDIT_APPLICANT_DATA_LOADING } from "../actions";

export interface EditUserAddressActionPayload {
    editedAddress: any;
    isLoading: boolean;
    isError: boolean;
  }
interface EditUserAddressActionBase{
    type:string;
    payload:EditUserAddressActionPayload
}

export interface EditUserAddressAction extends EditUserAddressActionBase {
    type: typeof EDIT_APPLICANT_DATA;
  }
  
  export interface EditUserAddressLoadingAction extends EditUserAddressActionBase {
    type: typeof EDIT_APPLICANT_DATA_LOADING;
  }
  
  export interface EditUserAddressErrorAction extends EditUserAddressActionBase {
    type: typeof EDIT_APPLICANT_DATA_ERROR;
  }
  type AllActions = EditUserAddressAction | EditUserAddressLoadingAction | EditUserAddressErrorAction

const initialState: EditUserAddressActionPayload = {
  editedAddress:null,
  isLoading: true,
  isError: false,
};

const editUserAddress = (state: EditUserAddressActionPayload = initialState, action: AllActions): EditUserAddressActionPayload=> {
  switch (action.type) {
    case EDIT_APPLICANT_DATA:
      return {
        ...state,
        editedAddress: action.payload,
      };
    case EDIT_APPLICANT_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case EDIT_APPLICANT_DATA_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default editUserAddress;
