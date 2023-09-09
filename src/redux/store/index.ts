
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import applicantRegistration from "../reducers/applicantRegistration";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import getApplicantData from "../reducers/getApplicantData";
import activeNav from "../reducers/activeNav";
import loginApplicant from "../reducers/loginApplicant";
import editPersonalData from "../reducers/editPersonaData";
import getUserAddress from "../reducers/getUserAddress";
import getGuardianTypes from "../reducers/getGuardianTypes";
import editUserAddress from "../reducers/editUserAddress";
import postUserAddress from "../reducers/postUserAddress";
import getAllAiChats from "../reducers/getAllAiChats";
import { chatReducer } from "../actions";


const persistConfig = {
  key: "root",
  storage:AsyncStorage,
  transforms: [
    encryptTransform({
      secretKey: "1234456",
    }),
  ],
};

const mainReducer = combineReducers({
  applicantRegistration: applicantRegistration,
  applicantData:getApplicantData,
  activeNav:activeNav,
  accessToken:loginApplicant,
  editPersonalData:editPersonalData,
  getUserAddress:getUserAddress,
  getGuardianTypes:getGuardianTypes,
  editUserAddress:editUserAddress,
  postUserAddress:postUserAddress,
  getAllAiChats:getAllAiChats,
  chat:chatReducer
});

const persistedReducer = persistReducer(persistConfig, mainReducer);
export type RootState = ReturnType<typeof mainReducer>;
const middleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

const persister = persistStore(store);

export { store, persister, mainReducer };
