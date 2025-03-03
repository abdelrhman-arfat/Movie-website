import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { allReducers } from "./allReducers";
const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["userInfo",""],
};



  

export const persistedReducer = persistReducer(persistConfig, allReducers);
