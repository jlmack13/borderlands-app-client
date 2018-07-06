import { resetLootForm } from './lootForm';
const API_URL = process.env.REACT_APP_API_URL;

// *= Action Creators **
const setLoot = loot => {
    return {
        type: 'GET_LOOT_SUCCESS',
        loot
    }
}

const addLoot = loot => {
    return {
        type: 'CREATE_LOOT_SUCCESS',
        loot
    }
}

// *= Async Actions **
export const getLoot = () => {
    return dispatch => {
       return fetch(`${API_URL}loots`)
            .then(response => response.json())
            .then(loot => dispatch(setLoot(loot)))
            .catch( error => console.log(error))
    }
}

export const getStoryLoot = () => {
    return dispatch => {
        return fetch(`${API_URL}storymode`)
            .then(response => response.json())
            .then(loot => dispatch(setLoot(loot)))
            .catch(error => console.log(error))
    }
}

export const createLoot = loot => {
    return dispatch => {
        return  fetch(`${API_URL}loots`, {
             method: 'POST',
             body: JSON.stringify(loot),
             headers: {
               'Content-Type': 'application/json',
             }
           })
            .then(response => response.json())
            .then(loot => {
                dispatch(addLoot(loot))
                dispatch(resetLootForm())
            })
            .catch(error => console.log(error))
    }
}