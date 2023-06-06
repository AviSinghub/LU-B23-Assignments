//Kfc store
// Wings are available at the kitchen
// store manager handles the WINGS_ORDERS from the customer
// coke is stored in the freezer 
// delivery manager 2 handle COKE_ORDER from the customer 

//State 


// import from 'redux'
const redux = require('redux');

const reduxLogger = require('redux-logger');

//helper function
const bindActionCreators =  redux.bindActionCreators
const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()



const combineReducers = redux.combineReducers



const createStore = redux.createStore
// const createStore = redux.configureStore
console.log("This is KFC store.");

//Action 
// This is the only way your application can interact with the store
// Action is a plain js object
// Acton carries some information from the app to the redux store
// Acton have a type property,thta describes tht the happened ina particular app
// type property defined  as string constants 

//Action: WINGS_ORDERED
const WINGS_ORDERED = "WINGS_ORDERED"
//New action scenario: WINGS_RESTOCK
const WINGS_RESTOCKED = "WINGS_RESTOCKED"

const COKE_ORDERED = "COKE_ORDERED"
const COKE_RESTOCKED = "COKE_RESTOCKED"
//Define action

//action creator function that returns an action
function orderwings(qty=1){
    return{
        //defined action
        type : WINGS_ORDERED,
        // r_quantity: r_qty,
        payload: qty,
    }  
}

function orderCoke(qty = 1){
    return{
        type: COKE_ORDERED,
        payload: qty,
    }
}

function restockCoke(qty=1){
    return{
        type: COKE_RESTOCKED,
        payload: qty,
    }
}

//action creator function as per Restocked-WINGS
function restockWings(qty=1){
    return{
        type: WINGS_RESTOCKED,
        payload: qty,
        // quantity: qty,
    }
}



//Reducer
// reducer specify how the app's state changes in response to a action sent to the store
// Reducers are function that accepts a state and action as a argument and returns the next state to the app
// (previousState, action) => newState

(previousState, action) => newState


// const initialState = {
//     numberofWings:50,
//     numberofCoke: 80,
// }

const initialWingsState = {
    numberofWings:50,
    
}

const initialCokeState = {
    numberofCoke: 80,
}



const Coke_reducer = (state = initialCokeState, action) => {
    switch(action.type){
        //  coke stats    
        case COKE_ORDERED:
            return{
                ...state,
                numberofCoke: state.numberofCoke - action.payload
            }
        case COKE_RESTOCKED:
            return{
                ...state,
                numberofCoke: state.numberofCoke + action.payload
            }    
            

        default:
            return state    
    }
}


const Wings_reducer = (state = initialWingsState, action) => {
    switch(action.type){
        case WINGS_ORDERED:
            return{
                //copy of state obj
                ...state,
                //updating the no of wings with respect to r_quantity
                numberofWings : state.numberofWings - action.payload
            }
        case WINGS_RESTOCKED:
            return{
                ...state,
                // numberofWings: state.numberofWings + action.quantity
                numberofWings: state.numberofWings + action.payload
            } 
        default:
            return state    
    }
}




//Redux store 
//for entire app will have the store
// Responsibilities
// 1- Holds the application state
// 2- Allows access to state via getState()
// 3- Allows state to be update via dispatch (action)
// 4- Registors listeners via subscribe (listener)
// 5- Unsubscribe from the store - store handles unregisterning of listeners via
//   the function returned by the  subscrib(listener) 
//

// combine the store 
const rootReducer = combineReducers({
    wings: Wings_reducer,
    coke: Coke_reducer

})

// 1-
// const store =  createStore(reducer)

//combine root reducer included  
const store =  createStore(rootReducer, applyMiddleware(logger))
// 2
console.log("initial State", store.getState())
// 4
// store.subscribe( ()=> console.log("Üpdated state:", store.gerState()))
const unsubscribe = store.subscribe(()=> {}
    // console.log("Updated state", store.getState())
)
// 3
// (invoke the action creator)
// store.dispatch(orderwings(2))
// store.dispatch(restockWings(10))

const actions = bindActionCreators({orderwings, restockWings, orderCoke, restockCoke}, store.dispatch);
actions.orderCoke()
actions.orderCoke()
actions.orderCoke()
actions.restockCoke(5)
actions.orderwings()
actions.orderwings()
actions.orderwings()
actions.orderwings()
actions.orderwings()
actions.restockWings(3)
actions.orderCoke()
actions.orderCoke()
actions.orderCoke()
actions.orderCoke()
actions.orderCoke()
actions.orderCoke()
actions.orderCoke()
actions.restockCoke(4)
actions.orderwings(16)
actions.restockWings(100)
actions.orderCoke(12)
actions.restockCoke(50)
actions.orderwings(40)
actions.restockWings(200)
actions.orderCoke(47)
actions.restockCoke(500)
actions.orderwings(290)
actions.orderCoke(550)
actions.orderwings(2)
actions.orderwings(1)
actions.restockWings(300)
actions.orderwings(42)
actions.orderCoke(55)
actions.restockCoke(124)
actions.restockWings(59)
actions.orderCoke(10)
actions.orderwings(236)
actions.restockWings(8)
actions.restockCoke(25)



//5
unsubscribe()

//Previous scenario --> Ordering the wings.

//New scenario ---> Restocking the wings


//Middleware
//Provides 3rd party extension point between dispatcjing the action and the monent it eeaches the reducer
//Logging, crash reporting, performing async tasks
// npm i redux-logger


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






