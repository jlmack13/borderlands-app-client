import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "typeface-oswald";
import "typeface-roboto";
import store from './store.js';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();


// var store = {
//     loot: {
//         {...}
//     },
//     lootFormData: [
//         {
//             name: '',
//             item_type: '',
//             manufacturer: '',
//             location: '',
//             drop: '',
//             image_url: '',
//             story_id: '',
//             story_quest: '',
//             note: ''

//         }
//     ]
// }