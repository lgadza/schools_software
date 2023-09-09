import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGOUT_USER
} from "../actions";

interface LoginUserActionPayload {
  accessToken: any; // Assuming accessToken is a string
  isLoading: boolean,
  isError: boolean,
}

interface LoginUserActionBase {
  type: string;
  payload: any; 
}

export interface LoginUserAction extends LoginUserActionBase {
  type: typeof LOGIN_USER;
  payload: {
    accessToken: any;
  };
}

export interface LoginUserLoadingAction extends LoginUserActionBase {
  type: typeof LOGIN_USER_LOADING;
  payload: boolean;
}
export interface LogoutUserLoadingAction extends LoginUserActionBase {
  type: typeof LOGOUT_USER;
  payload:{
    accessToken:""
  };
}

export interface LoginUserErrorAction extends LoginUserActionBase {
  type: typeof LOGIN_USER_ERROR;
  payload:boolean;
}

type AllActions =
  | LoginUserAction
  |LogoutUserLoadingAction
  | LoginUserLoadingAction
  | LoginUserErrorAction;

const initialState: LoginUserActionPayload = {
  accessToken: "",
  isLoading: true,
  isError: false,
};

const loginUser = (
  state: LoginUserActionPayload = initialState,
  action: AllActions
): LoginUserActionPayload => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        accessToken: action.payload,
      };

    case LOGIN_USER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOGIN_USER_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
      case LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
};

export default loginUser;
