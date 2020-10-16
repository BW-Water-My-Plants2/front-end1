import { GET_DATA, GET_SUCCESS, GET_FAIL } from '../actions'

const initialState = {
    "data": [],
    "isFetching": false,
    "error": ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                "isFetching": true,
                "error": ""
            }
        case GET_SUCCESS:
            return {
                ...state,
                "isFetching": false,
                "data": action.payload
            }
        case GET_FAIL:
            return {
                ...state,
                "isFetching": false,
                "error": action.payload
            }
        default:
            return state
    }
}

export default reducer