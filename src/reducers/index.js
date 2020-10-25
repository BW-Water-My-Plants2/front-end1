// import { combineReducers } from 'redux'
// import authReducer from './authReducer'
// import crudReducer from './crudReducer'

// export const reducer = combineReducers({ auth: authReducer, crud: crudReducer})

import {
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAIL,
} from "../actions";

const initialState = {
    data: [],
    isFetching: false,
    fetchErr: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
                fetchingErr: ''
            };

        case FETCHING_SUCCESS:
            // console.log('fetchingSucces action.payload', action.payload)
            return {
                ...state,
                posts: action.payload,
                isFetching: false,
                fetchingErr: ''
            };

        case FETCHING_FAIL:
            return {
                ...state,
                isFetching: false,
                fetchingErr: 'Fetching error'
            };

        case ADD_POST:
            // console.log("ADDPost in reducer")
            // console.log("payload",action.payload)
            return { ...state, posts: [...state.posts, action.payload] };

        case EDIT_POST:
            console.log("action.payload - EDIT_POST reducer", action.payload);
            console.log("state.posts", state.posts);
            return {
                ...state,
                posts: state.posts.map((story) =>
                    story.id === action.payload.id ? action.payload : story
                ),
            };

        case DELETE_POST:
            // console.log('action.payload - DELETE_POST reducer', action.payload)
            // console.log('looking for state id', state.posts)
            return {
                ...state,
                posts: [...state.posts.filter((post) => post.id != action.payload)],
            };
    }

    return state;
};
