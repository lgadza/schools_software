import {
    POST_USER_AI_SETTINGS,
    POST_USER_AI_SETTINGS_ERROR,
    POST_USER_AI_SETTINGS_LOADING,
  } from "../actions";
  
  export interface PostUserAISettingsActionPayload {
    data: any;
    isLoading: boolean;
    isError: boolean;
  }
  
  interface PostUserAISettingsActionBase {
    type: string;
    payload: any;
  }
  
  export interface PostUserAISettingsAction
    extends PostUserAISettingsActionBase {
    type: typeof POST_USER_AI_SETTINGS;
  }
  
  export interface PostUserAISettingsLoadingAction
    extends PostUserAISettingsActionBase {
    type: typeof POST_USER_AI_SETTINGS_LOADING;
  }
  
  export interface PostUserAISettingsErrorAction
    extends PostUserAISettingsActionBase {
    type: typeof POST_USER_AI_SETTINGS_ERROR;
  }
  

  type AllActions =
    | PostUserAISettingsAction
    | PostUserAISettingsLoadingAction
    | PostUserAISettingsErrorAction;
  
  const initialState: PostUserAISettingsActionPayload = {
    data: null,
    isLoading: true,
    isError: false,
  };
  
  const postUserAISettings = (
    state: PostUserAISettingsActionPayload = initialState,
    action: AllActions
  ): PostUserAISettingsActionPayload => {
    switch (action.type) {
      case POST_USER_AI_SETTINGS:
        return {
          ...state,
          data: action.payload,
        };
  
      case POST_USER_AI_SETTINGS_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
      case POST_USER_AI_SETTINGS_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default postUserAISettings;
  