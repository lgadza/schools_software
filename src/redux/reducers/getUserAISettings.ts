import {
    GET_USER_AI_SETTINGS,
    GET_USER_AI_SETTINGS_ERROR,
    GET_USER_AI_SETTINGS_LOADING,
  } from "../actions";
  
  export interface GetUserAISettingsActionPayload {
    data: any;
    isLoading: boolean;
    isError: boolean;
  }
  
  interface GetUserAISettingsActionBase {
    type: string;
    payload: any;
  }
  
  export interface GetUserAISettingsAction
    extends GetUserAISettingsActionBase {
    type: typeof GET_USER_AI_SETTINGS;
  }
  
  export interface GetUserAISettingsLoadingAction
    extends GetUserAISettingsActionBase {
    type: typeof GET_USER_AI_SETTINGS_LOADING;
  }
  
  export interface GetUserAISettingsErrorAction
    extends GetUserAISettingsActionBase {
    type: typeof GET_USER_AI_SETTINGS_ERROR;
  }
  

  type AllActions =
    | GetUserAISettingsAction
    | GetUserAISettingsLoadingAction
    | GetUserAISettingsErrorAction;
  
  const initialState: GetUserAISettingsActionPayload = {
    data: null,
    isLoading: true,
    isError: false,
  };
  
  const getUserAISettings = (
    state: GetUserAISettingsActionPayload = initialState,
    action: AllActions
  ): GetUserAISettingsActionPayload => {
    switch (action.type) {
      case GET_USER_AI_SETTINGS:
        return {
          ...state,
          data: action.payload,
        };
  
      case GET_USER_AI_SETTINGS_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
      case GET_USER_AI_SETTINGS_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default getUserAISettings;
  