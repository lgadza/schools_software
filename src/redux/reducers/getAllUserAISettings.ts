import { UserAISettingsPayload } from "../../Types";
import {
    GET_ALL_USER_AI_SETTINGS,
    GET_ALL_USER_AI_SETTINGS_ERROR,
    GET_ALL_USER_AI_SETTINGS_LOADING,
  } from "../actions";
  
  export interface GetAllUserAISettingsActionPayload {
    data: UserAISettingsPayload[];
    isLoading: boolean;
    isError: boolean;
  }
  
  interface GetAllUserAISettingsActionBase {
    type: string;
    payload: any;
  }
  
  export interface GetAllUserAISettingsAction
    extends GetAllUserAISettingsActionBase {
    type: typeof GET_ALL_USER_AI_SETTINGS;
  }
  
  export interface GetAllUserAISettingsLoadingAction
    extends GetAllUserAISettingsActionBase {
    type: typeof GET_ALL_USER_AI_SETTINGS_LOADING;
  }
  
  export interface GetAllUserAISettingsErrorAction
    extends GetAllUserAISettingsActionBase {
    type: typeof GET_ALL_USER_AI_SETTINGS_ERROR;
  }
  

  type AllActions =
    | GetAllUserAISettingsAction
    | GetAllUserAISettingsLoadingAction
    | GetAllUserAISettingsErrorAction;
  
  const initialState: GetAllUserAISettingsActionPayload = {
    data: [],
    isLoading: true,
    isError: false,
  };
  
  const getAllUserAISettings = (
    state: GetAllUserAISettingsActionPayload = initialState,
    action: AllActions
  ): GetAllUserAISettingsActionPayload => {
    switch (action.type) {
      case GET_ALL_USER_AI_SETTINGS:
        return {
          ...state,
          data: action.payload,
        };
  
      case GET_ALL_USER_AI_SETTINGS_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
      case GET_ALL_USER_AI_SETTINGS_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default getAllUserAISettings;
  