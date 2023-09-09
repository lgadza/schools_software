import {
  USER_REGISTRATION,
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION_LOADING,
} from "../actions";

export interface UserRegistrationActionPayload {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

interface UserRegistrationActionBase {
  type: string;
  payload: any;
}

export interface UserRegistrationAction
  extends UserRegistrationActionBase {
  type: typeof USER_REGISTRATION;
}

export interface UserRegistrationLoadingAction
  extends UserRegistrationActionBase {
  type: typeof USER_REGISTRATION_LOADING;
}

export interface UserRegistrationErrorAction
  extends UserRegistrationActionBase {
  type: typeof USER_REGISTRATION_ERROR;
}

// Remove the extra "|" at the end of this line
type AllActions =
  | UserRegistrationAction
  | UserRegistrationLoadingAction
  | UserRegistrationErrorAction;

const initialState: UserRegistrationActionPayload = {
  data: null,
  isLoading: true,
  isError: false,
};

const userRegistration = (
  state: UserRegistrationActionPayload = initialState,
  action: AllActions
): UserRegistrationActionPayload => {
  switch (action.type) {
    case USER_REGISTRATION:
      return {
        ...state,
        data: action.payload,
      };

    case USER_REGISTRATION_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case USER_REGISTRATION_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default userRegistration;
