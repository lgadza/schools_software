

import { POST_ANALYZE_IMAGE, POST_ANALYZE_IMAGE_ERROR, POST_ANALYZE_IMAGE_LOADING } from "../actions";

export interface PostAnalyzeImageActionPayload {
    data: any;
    isLoading: boolean;
    isError: boolean;
  }
interface PostAnalyzeImageActionBase{
    type:string;
    payload:PostAnalyzeImageActionPayload
}

export interface PostAnalyzeImageAction extends PostAnalyzeImageActionBase {
    type: typeof POST_ANALYZE_IMAGE;
  }
  
  export interface PostAnalyzeImageLoadingAction extends PostAnalyzeImageActionBase {
    type: typeof POST_ANALYZE_IMAGE_LOADING;
  }
  
  export interface PostAnalyzeImageErrorAction extends PostAnalyzeImageActionBase {
    type: typeof POST_ANALYZE_IMAGE_ERROR;
  }
  type AllActions = PostAnalyzeImageAction | PostAnalyzeImageLoadingAction | PostAnalyzeImageErrorAction

const initialState: PostAnalyzeImageActionPayload = {
  data:null,
  isLoading: true,
  isError: false,
};

const postAnalyzeImage = (state: PostAnalyzeImageActionPayload = initialState, action: AllActions): PostAnalyzeImageActionPayload=> {
  switch (action.type) {
    case POST_ANALYZE_IMAGE:
      return {
        ...state,
        data: action.payload,
      };
    case POST_ANALYZE_IMAGE_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case POST_ANALYZE_IMAGE_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default postAnalyzeImage;
