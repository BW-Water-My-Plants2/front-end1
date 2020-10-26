import AxiosWithAuth from '../utils/AxiosWithAuth'
import axios from 'axios'

export const FETCHING_START = 'FETCHING_START'
export const FETCHING_FAIL = 'FETCHING_FAIL'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const fetchData = () => dispatch => {
    dispatch({ type: FETCHING_START })
    console.log('fetch in action')
    AxiosWithAuth()
        .get('/plants/')
        .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data }))
        .catch(err => console.log(err),
            dispatch({ type: FETCHING_FAIL }))
}

export const addPlant = newPost => {
    // console.log('addPost in action',newPost) 
    AxiosWithAuth()
        .post('/plants/', newPost)
        .then(res => console.log('post res in actions', res))
        .catch(err => console.log('err in action add-', err))
    return {
        type: ADD_POST,
        payload: newPost
    }
}

export const editPlant = (id, updated) => {
    console.log('editing in actions editPost:id and updated', id, updated)
    AxiosWithAuth()
        .put(`/plants/${id}`, updated)
        .then(res => console.log('post res in actions', res))
        .catch(err => console.log('err in action add-', err))
    return {
        type: EDIT_POST,
        payload: updated
    }
}


export const deletePlant = id => {
    // console.log('delete in action deletePost',id)
    AxiosWithAuth()
        .delete(`/plants/${id}`)
        .then(res => console.log('post res in actions', res))
        .catch(err => console.log('err in action add-', err))

    return {
        type: DELETE_POST,
        payload: id
    }
}

export const START_EDIT = "START_EDIT"

export const startEdit = plant => {
    return {
        type: START_EDIT,
        payload: plant
    }
}
