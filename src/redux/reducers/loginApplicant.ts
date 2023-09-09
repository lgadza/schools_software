import {
  LOGIN_APPLICANT,
  LOGIN_APPLICANT_ERROR,
  LOGIN_APPLICANT_LOADING,
  LOGOUT_USER
} from "../actions";

interface LoginApplicantActionPayload {
  accessToken: any; // Assuming accessToken is a string
  isLoading: boolean,
  isError: boolean,
}

interface LoginApplicantActionBase {
  type: string;
  payload: any; 
}

export interface LoginApplicantAction extends LoginApplicantActionBase {
  type: typeof LOGIN_APPLICANT;
  payload: {
    accessToken: any;
  };
}

export interface LoginApplicantLoadingAction extends LoginApplicantActionBase {
  type: typeof LOGIN_APPLICANT_LOADING;
  payload: boolean;
}
export interface LogoutUserLoadingAction extends LoginApplicantActionBase {
  type: typeof LOGOUT_USER;
  payload:{
    accessToken:""
  };
}

export interface LoginApplicantErrorAction extends LoginApplicantActionBase {
  type: typeof LOGIN_APPLICANT_ERROR;
  payload:boolean;
}

type AllActions =
  | LoginApplicantAction
  |LogoutUserLoadingAction
  | LoginApplicantLoadingAction
  | LoginApplicantErrorAction;

const initialState: LoginApplicantActionPayload = {
  accessToken: "",
  isLoading: true,
  isError: false,
};

const loginApplicant = (
  state: LoginApplicantActionPayload = initialState,
  action: AllActions
): LoginApplicantActionPayload => {
  switch (action.type) {
    case LOGIN_APPLICANT:
      return {
        ...state,
        accessToken: action.payload,
      };

    case LOGIN_APPLICANT_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOGIN_APPLICANT_ERROR:
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

export default loginApplicant;
