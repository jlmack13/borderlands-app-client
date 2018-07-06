const API_URL = process.env.REACT_APP_API_URL;

// *= Action Creators **
const setLoot = loot => {
    return {
        type: 'GET_LOOT_SUCCESS',
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