// Async action
// Action dispatched -> state is updated

//State
// stateObj = {
// loading : true, //data is fetched or not (loading spinner in your components)
// data: []
// error :'', //dispaly the error msg
// }

// Actions 
// 3 actions--
// 1st : FETCH_USER_REQUEST: fetch the list of users 
// 2nd : FETCH_USER _SUCCESS: fetched successfully
// 3rd: FETCH_USER_ERROR: fetching the error data

// Reducer
// case: FETCH_USER_REQUEST: 
// loading: true

//case: FETCH_USER _SUCCESS:
//loading: false
//error {from API}

//case: FETCH_USER_ERROR:
//loading:false
//error: {from API}

//AXIOS: Request to an API endpoint
//redux-thun: middleware: standard way to define async action creators

const redux = require('redux');
const createStore = redux.createStore

const initialState = {
    loading: false,
    users: [],
    error:''
}

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_ERROR = "FETCH_USER_ERROR"

// action creator 
const fetchUsersRequest =() => {
    return {
        type: FETCH_USER_REQUEST
    }
}

//store list of user
const fetchUsersSuccess = users => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return{
        type: FETCH_USER_ERROR,
        payload: error
    }
}

//reducer function
const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error:''
            }
        case FETCH_USER_ERROR:
            return{
                loading: false,
                users: [],
                error: action.payload
            }        
    }
}

const store= createStore(reducer)