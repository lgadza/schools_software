import { ACTIVE_NAV } from "../actions";
interface ActionPayload {
    state:string;
    
  }
interface ActionBase{
    type:string;
    payload:ActionPayload
}
export interface Action extends ActionBase {
    type: typeof ACTIVE_NAV;
  }
const initialState:ActionPayload={
    state:""
}

const activeNav=(state=initialState,action:Action)=>{
    switch (action.type) {
        case ACTIVE_NAV:
          return {
            ...state,
            data: action.payload,
          };
        default:
          return state;
      }
}

export default activeNav