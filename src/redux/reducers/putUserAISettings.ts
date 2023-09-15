import {
    PUT_USER_AI_SETTINGS,
    PUT_USER_AI_SETTINGS_ERROR,
    PUT_USER_AI_SETTINGS_LOADING,
  } from "../actions";
  
  export interface PutUserAISettingsActionPayload {
    data: any;
    isLoading: boolean;
    isError: boolean;
  }
  
  interface PutUserAISettingsActionBase {
    type: string;
    payload: any;
  }
  
  export interface PutUserAISettingsAction
    extends PutUserAISettingsActionBase {
    type: typeof PUT_USER_AI_SETTINGS;
  }
  
  export interface PutUserAISettingsLoadingAction
    extends PutUserAISettingsActionBase {
    type: typeof PUT_USER_AI_SETTINGS_LOADING;
  }
  
  export interface PutUserAISettingsErrorAction
    extends PutUserAISettingsActionBase {
    type: typeof PUT_USER_AI_SETTINGS_ERROR;
  }
  

  type AllActions =
    | PutUserAISettingsAction
    | PutUserAISettingsLoadingAction
    | PutUserAISettingsErrorAction;
  
  const initialState: PutUserAISettingsActionPayload = {
    data: null,
    isLoading: true,
    isError: false,
  };
  
  const putUserAISettings = (
    state: PutUserAISettingsActionPayload = initialState,
    action: AllActions
  ): PutUserAISettingsActionPayload => {
    switch (action.type) {
      case PUT_USER_AI_SETTINGS:
        return {
          ...state,
          data: action.payload,
        };
  
      case PUT_USER_AI_SETTINGS_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
      case PUT_USER_AI_SETTINGS_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default putUserAISettings;
  