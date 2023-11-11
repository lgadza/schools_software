

import { POST_TEXT_TO_DETECT_FOR_AI, POST_TEXT_TO_DETECT_FOR_AI_ERROR, POST_TEXT_TO_DETECT_FOR_AI_LOADING } from "../actions";

export interface PostDetectAiTextActionPayload {
    analyzedText: any;
    isLoading: boolean;
    isError: boolean;
  }
interface PostDetectAiTextActionBase{
    type:string;
    payload:PostDetectAiTextActionPayload
}

export interface PostDetectAiTextAction extends PostDetectAiTextActionBase {
    type: typeof POST_TEXT_TO_DETECT_FOR_AI;
  }
  
  export interface PostDetectAiTextLoadingAction extends PostDetectAiTextActionBase {
    type: typeof POST_TEXT_TO_DETECT_FOR_AI_LOADING;
  }
  
  export interface PostDetectAiTextErrorAction extends PostDetectAiTextActionBase {
    type: typeof POST_TEXT_TO_DETECT_FOR_AI_ERROR;
  }
  type AllActions = PostDetectAiTextAction | PostDetectAiTextLoadingAction | PostDetectAiTextErrorAction

const initialState: PostDetectAiTextActionPayload = {
    analyzedText:null,
  isLoading: true,
  isError: false,
};

const detectAiText = (state: PostDetectAiTextActionPayload = initialState, action: AllActions): PostDetectAiTextActionPayload=> {
  switch (action.type) {
    case POST_TEXT_TO_DETECT_FOR_AI:
      return {
        ...state,
        analyzedText: action.payload,
      };
    case POST_TEXT_TO_DETECT_FOR_AI_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case POST_TEXT_TO_DETECT_FOR_AI_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default detectAiText;
