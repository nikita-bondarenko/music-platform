import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {reducer,RootState} from "./reducers";
import {applyMiddleware, Store} from 'redux'
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
const makeStore = (context: Context) => configureStore({reducer, middleware: [thunk]});
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});