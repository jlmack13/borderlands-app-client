const initialState = {
    name: '',
    item_type: '',
    manufacturer: '',
    location: '',
    drop: '',
    show: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATED_DATA':
            return action.lootFormData;
        case 'RESET_LOOT_FORM':
            return initialState;
        case 'TOGGLE_LOOT_FORM':
            if (state.show) {
                return Object.assign({}, state, {
                    show: false
                })
            } else {
               return Object.assign({}, state, {
                   show: true
               })
            }
        default: 
            return state;
    }
}