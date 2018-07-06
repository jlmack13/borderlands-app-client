export default (state = {
    name: '',
    item_type: '',
    manufacturer: '',
    location: '',
    drop: ''
}, action) => {

    switch (action.type) {
        case 'UPDATED_DATA':
            return action.lootFormData;
        default: 
            return state;
    }
}