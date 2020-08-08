import * as types from './../constants/ActionTypes';
import { random } from 'lodash';
import _ from 'lodash';
import {findIndex , filter, parseInt } from 'lodash';

//const { default: myReducer } = require(".")
var data  = JSON.parse(localStorage.getItem('tasks'))
var initalState =data?data:[]

var s4 = () => {
    return Math.floor((1+ Math.random())* 0x100000).toString(16).substring(1);
  }

var generateID = () =>{
    return s4() +"-"+ s4()+"-"+ s4()+"-"+ s4()+"-"+ s4()+"-"+s4()+"-"+ s4()+"-"+ s4();
}

const myReducer = (state = initalState , action) => {

    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            if(action.task.id){
                let index =  _.findIndex(action.task.id);
                state[index]= action.task;
                console.log(state);
                localStorage.setItem('tasks',JSON.stringify(state));
            }else{
                var newTask = {
                    id: generateID(),
                    name : action.task.name,
                    status :action.task.status  === 'true'?true:false
                }
                    state.push(newTask);
                    localStorage.setItem('tasks',JSON.stringify(state));
            }   
            return [...state]
        case types.UPDATE_STATUS_TASK:
                var id = action.id;
                var index = _.findIndex(state,(task) => {
                    return task.id === id;
                });
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
              //console.log(state)
            localStorage.setItem('tasks',JSON.stringify(state));
         
            return [...state]
        case types.DELETE_ITEM:
            var id = action.id;
            var index = _.findIndex(state,(task) => {
                return task.id === id;
            });
             state.splice(index,1);
             localStorage.setItem('tasks',JSON.stringify(state));
            return [...state]
        default: return state;
    }

}

export default myReducer;