

import { GET_USER_ADDRESS, GET_USER_ADDRESS_ERROR, GET_USER_ADDRESS_LOADING } from "../actions";

export interface GetUserAddressActionPayload {
    address: any;
    isLoading: boolean;
    isError: boolean;
  }
interface GetUserAddressActionBase{
    type:string;
    payload:GetUserAddressActionPayload
}

export interface GetUserAddressAction extends GetUserAddressActionBase {
    type: typeof GET_USER_ADDRESS;
  }
  
  export interface GetUserAddressLoadingAction extends GetUserAddressActionBase {
    type: typeof GET_USER_ADDRESS_LOADING;
  }
  
  export interface GetUserAddressErrorAction extends GetUserAddressActionBase {
    type: typeof GET_USER_ADDRESS_ERROR;
  }
  type AllActions = GetUserAddressAction | GetUserAddressLoadingAction | GetUserAddressErrorAction

const initialState: GetUserAddressActionPayload = {
  address:null,
  isLoading: true,
  isError: false,
};

const getUserAddress = (state: GetUserAddressActionPayload = initialState, action: AllActions): GetUserAddressActionPayload=> {
  switch (action.type) {
    case GET_USER_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case GET_USER_ADDRESS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case GET_USER_ADDRESS_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default getUserAddress;
