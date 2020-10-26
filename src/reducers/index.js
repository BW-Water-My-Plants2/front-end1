import { combineReducers } from 'redux'
import authReducer from './authReducer'
import crudReducer from './crudReducer'

export const reducer = combineReducers({ auth: authReducer, crud: crudReducer })

