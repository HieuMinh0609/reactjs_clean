import * as types from './../constants/ActionTypes';

var initiaState = {}
var myReducer = (state = initiaState ,action) =>{
    switch(action.type){
        case types.EDIT_TASK:
            console.log(action);
            return action.task;
        default:
            return state;

    }
}

export default myReducer;