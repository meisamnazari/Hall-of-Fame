import {combineReducers} from 'redux';
import NavReducer from './NavReducer';
import fameList from "./fameList";


const rootReducer = combineReducers({
    nav: NavReducer,
    fameList
});

export default rootReducer;