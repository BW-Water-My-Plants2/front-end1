import axios from 'axios'

export const GET_DATA = "GET_DATA"
export const GET_SUCCESS = "GET_SUCCESS"
export const GET_FAIL = "GET_FAIL"

export const getData = () => dispach => {
    dispach({ type: GET_DATA })
    axios
        .get("https://dog.ceo/api/breeds/image/random/10")
        .then(res => {
            console.log(res)
            dispach({ type: GET_SUCCESS, payload: res })
        })
    // .catch(err => {
    //     console.log(err)
    //     dispatch({ type: GET_FAIL, payload: err })
    // })
}
