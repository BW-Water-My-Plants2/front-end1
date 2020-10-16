import { combineReducers } from 'redux'
import dataReducer from './dataReducer'

export const root = combineReducers({ data: dataReducer })