import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const lootReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_LOOT_SUCCESS':
            return action.loot
        default: 
            return state;
    }
}

const reducers = combineReducers({
    loot: lootReducer
});

const middleware = [thunk];

export default createStore(
    reducers, 
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
