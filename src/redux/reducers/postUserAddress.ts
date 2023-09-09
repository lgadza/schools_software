

import { POST_USER_ADDRESS, POST_USER_ADDRESS_ERROR, POST_USER_ADDRESS_LOADING } from "../actions";

export interface PostUserAddressActionPayload {
    address: any;
    isLoading: boolean;
    isError: boolean;
  }
interface PostUserAddressActionBase{
    type:string;
    payload:PostUserAddressActionPayload
}

export interface PostUserAddressAction extends PostUserAddressActionBase {
    type: typeof POST_USER_ADDRESS;
  }
  
  export interface PostUserAddressLoadingAction extends PostUserAddressActionBase {
    type: typeof POST_USER_ADDRESS_LOADING;
  }
  
  export interface PostUserAddressErrorAction extends PostUserAddressActionBase {
    type: typeof POST_USER_ADDRESS_ERROR;
  }
  type AllActions = PostUserAddressAction | PostUserAddressLoadingAction | PostUserAddressErrorAction

const initialState: PostUserAddressActionPayload = {
  address:null,
  isLoading: true,
  isError: false,
};

const postUserAddress = (state: PostUserAddressActionPayload = initialState, action: AllActions): PostUserAddressActionPayload=> {
  switch (action.type) {
    case POST_USER_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case POST_USER_ADDRESS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case POST_USER_ADDRESS_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default postUserAddress;
