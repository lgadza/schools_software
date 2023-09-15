
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import userRegistration from "../reducers/userRegistration";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import getUserData from "../reducers/getUserData";
import activeNav from "../reducers/activeNav";
import loginUser from "../reducers/loginUser";
import editPersonalData from "../reducers/editPersonaData";
import getUserAddress from "../reducers/getUserAddress";
import getGuardianTypes from "../reducers/getGuardianTypes";
import editUserAddress from "../reducers/editUserAddress";
import postUserAddress from "../reducers/postUserAddress";
import getAllAiChats from "../reducers/getAllAiChats";
import { chatReducer } from "../actions";
import emailVerification from "../reducers/emailVerification";
import postUserAISettings from "../reducers/postUserAISettings";
import getUserAISettings from "../reducers/getUserAISettings";
import putUserAISettings from "../reducers/putUserAISettings";
import getAllUserAISettings from "../reducers/getAllUserAISettings";


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
  verifyEmail: emailVerification,
  userRegistration: userRegistration,
  userData:getUserData,
  activeNav:activeNav,
  accessToken:loginUser,
  editPersonalData:editPersonalData,
  getUserAddress:getUserAddress,
  getGuardianTypes:getGuardianTypes,
  editUserAddress:editUserAddress,
  postUserAddress:postUserAddress,
  getAllAiChats:getAllAiChats,
  postUserAISettings:postUserAISettings,
  getUserAISettings:getUserAISettings,
  putUserAISettings:putUserAISettings,
  getAllUserAISettings:getAllUserAISettings,
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
