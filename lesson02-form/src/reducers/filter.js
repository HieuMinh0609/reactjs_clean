import * as types from './../constants/ActionTypes';

var initiaState = {
        name : '',
        status: -1
    }
var myReducer = (state = initiaState ,action) =>{
    switch(action.type){
        case types.FILTER_TABLE:
            return   {
                name : action.name,
                status :parseInt(action.status,10)
            };
        default:
            return state;

    }
}

export default myReducer;