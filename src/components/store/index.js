import { createStore, combineReducers } from "redux";
// import { createStore, combineReducers, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

import { emplReducer } from "./emplReducer";


const rootReducers = combineReducers({ empl: emplReducer });

const persistConfig = { key: "root", storage }
const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);