import { combineReducers, createStore } from "redux";
import { currencyReducer } from './currencyReducer';

export type IGlobalState = ReturnType<typeof reducers>

const reducers = combineReducers({
    currency: currencyReducer,
});

export const store = createStore(reducers);