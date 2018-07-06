export default (state = [], action) => {
    switch (action.type) {
        case 'GET_LOOT_SUCCESS':
            return action.loot
        default:
            return state;
    }
}