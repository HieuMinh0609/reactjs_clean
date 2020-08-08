import { combineReducers } from 'redux';
import tasks from './task'
import itemTask from './edit'
import filter from './filter'
const myReducer = combineReducers({
        tasks ,
        itemTask ,
        filter
});

 
export default myReducer;