export default (state = [], action) => {
    switch (action.type) {
        case 'GET_LOOT_SUCCESS':
            return action.loot
        case 'CREATE_LOOT_SUCCESS':
            return state.concat(action.loot)
        default:
            return state;
    }
}