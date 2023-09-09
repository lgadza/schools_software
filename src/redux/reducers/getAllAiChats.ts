import { GET_ALL_AI_CHATS, GET_ALL_AI_CHATS_ERROR, GET_ALL_AI_CHATS_LOADING } from "../actions";

export interface GetAllAiChatsAction {
  type: typeof GET_ALL_AI_CHATS;
  payload: [];
}

export interface GetAllAiChatsLoadingAction {
  type: typeof GET_ALL_AI_CHATS_LOADING;
  payload: {
    isLoading: boolean;
  };
}

export interface GetAllAiChatsErrorAction {
  type: typeof GET_ALL_AI_CHATS_ERROR;
  payload: {
    isError: boolean;
  };
}

export const getAllAiChats = (chats: []): GetAllAiChatsAction => ({
  type: GET_ALL_AI_CHATS,
  payload: chats,
});

export const setGetAllAiChatsLoading = (isLoading: boolean): GetAllAiChatsLoadingAction => ({
  type: GET_ALL_AI_CHATS_LOADING,
  payload: {
    isLoading,
  },
});

export const setGetAllAiChatsError = (isError: boolean): GetAllAiChatsErrorAction => ({
  type: GET_ALL_AI_CHATS_ERROR,
  payload: {
    isError,
  },
});

export type GetAllAiChatsActionTypes =
  | GetAllAiChatsAction
  | GetAllAiChatsLoadingAction
  | GetAllAiChatsErrorAction;



export interface GetAllAiChatsActionPayload {
  chats: [] ;
  isLoading: boolean;
  isError: boolean;
}

const initialState: GetAllAiChatsActionPayload = {
  chats:[],
  isLoading: true,
  isError: false,
};

const getAllAiChatsReducer = (
  state: GetAllAiChatsActionPayload = initialState,
  action: GetAllAiChatsActionTypes
): GetAllAiChatsActionPayload => {
  switch (action.type) {
    case GET_ALL_AI_CHATS:
      return {
        ...state,
        chats:action.payload,
      };
    case GET_ALL_AI_CHATS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case GET_ALL_AI_CHATS_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default getAllAiChatsReducer;
