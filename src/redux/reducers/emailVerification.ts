import {
    EMAIL_VERIFICATION,
    EMAIL_VERIFICATION_ERROR,
    EMAIL_VERIFICATION_LOADING,
  } from "../actions";
  
  export interface EmailVerificationActionPayload {
    data: any;
    isLoading: boolean;
    isError: boolean;
  }
  
  interface EmailVerificationActionBase {
    type: string;
    payload: any;
  }
  
  export interface EmailVerificationAction
    extends EmailVerificationActionBase {
    type: typeof EMAIL_VERIFICATION;
  }
  
  export interface EmailVerificationLoadingAction
    extends EmailVerificationActionBase {
    type: typeof EMAIL_VERIFICATION_LOADING;
  }
  
  export interface EmailVerificationErrorAction
    extends EmailVerificationActionBase {
    type: typeof EMAIL_VERIFICATION_ERROR;
  }
  

  type AllActions =
    | EmailVerificationAction
    | EmailVerificationLoadingAction
    | EmailVerificationErrorAction;
  
  const initialState: EmailVerificationActionPayload = {
    data: null,
    isLoading: true,
    isError: false,
  };
  
  const emailVerification = (
    state: EmailVerificationActionPayload = initialState,
    action: AllActions
  ): EmailVerificationActionPayload => {
    switch (action.type) {
      case EMAIL_VERIFICATION:
        return {
          ...state,
          data: action.payload,
        };
  
      case EMAIL_VERIFICATION_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
      case EMAIL_VERIFICATION_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default emailVerification;
  