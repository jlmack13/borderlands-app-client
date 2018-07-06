const initialState = {
    name: '',
    item_type: '',
    manufacturer: '',
    location: '',
    drop: ''
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATED_DATA':
            return action.lootFormData;
        case 'RESET_LOOT_FORM':
            return initialState;
        default: 
            return state;
    }
}