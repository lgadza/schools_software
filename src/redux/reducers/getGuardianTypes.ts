

import { GET_GUARDIAN_TYPES, GET_GUARDIAN_TYPES_ERROR, GET_GUARDIAN_TYPES_LOADING } from "../actions";

export interface GetGuardianTypesActionPayload {
    guardian_types: any;
    isLoading: boolean;
    isError: boolean;
  }
interface GetGuardianTypesActionBase{
    type:string;
    payload:GetGuardianTypesActionPayload
}

export interface GetGuardianTypesAction extends GetGuardianTypesActionBase {
    type: typeof GET_GUARDIAN_TYPES;
  }
  
  export interface GetGuardianTypesLoadingAction extends GetGuardianTypesActionBase {
    type: typeof GET_GUARDIAN_TYPES_LOADING;
  }
  
  export interface GetGuardianTypesErrorAction extends GetGuardianTypesActionBase {
    type: typeof GET_GUARDIAN_TYPES_ERROR;
  }
  type AllActions = GetGuardianTypesAction | GetGuardianTypesLoadingAction | GetGuardianTypesErrorAction

const initialState: GetGuardianTypesActionPayload = {
  guardian_types:null,
  isLoading: true,
  isError: false,
};

const getGuardianTypes = (state: GetGuardianTypesActionPayload = initialState, action: AllActions): GetGuardianTypesActionPayload=> {
  switch (action.type) {
    case GET_GUARDIAN_TYPES:
      return {
        ...state,
        guardian_types: action.payload,
      };
    case GET_GUARDIAN_TYPES_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case GET_GUARDIAN_TYPES_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default getGuardianTypes;
