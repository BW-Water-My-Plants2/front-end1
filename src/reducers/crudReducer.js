import {
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAIL,
    START_EDIT
} from "../actions";

const initialState = {
    plants: [],
    isFetching: false,
    fetchErr: "",
    editing: false,
    plant: {
        "plant_name": "",
        "plant_species": "",
        "water_schedule": ""
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
                fetchingErr: ''
            };

        case FETCHING_SUCCESS:
            console.log('fetchingSucces action.payload', action.payload)
            return {
                ...state,
                plants: action.payload,
                isFetching: false,
                fetchingErr: ''
            };

        case FETCHING_FAIL:
            console.log("error")
            return {
                ...state,
                isFetching: false,
                fetchingErr: 'Fetching error'
            };

        case ADD_POST:
            // console.log("ADDPost in reducer")
            // console.log("payload",action.payload)
            return { ...state, plants: [...state.plants, action.payload] };

        case EDIT_POST:
            console.log("action.payload - EDIT_POST reducer", action.payload);
            console.log("state.plants", state.plants);
            return {
                ...state,
                editing: false,
                plant: {
                    "plant_name": "",
                    "plant_species": "",
                    "water_schedule": ""
                }
            };

        case DELETE_POST:
            // console.log('action.payload - DELETE_POST reducer', action.payload)
            // console.log('looking for state id', state.plants)
            return {
                ...state,
                plants: [...state.plants.filter((post) => post.id != action.payload)],
            };

        case START_EDIT:
            return {
                ...state,
                editing: true,
                plant: action.payload
            }
    }

    return state;
};

export default reducer