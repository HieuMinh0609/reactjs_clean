import React,{Component} from 'react';
import TaskITem from './../component/TaskItem';
import TaskList from './../component/TaskList';
import { connect } from 'react-redux';
import { onFilter } from './../actions/index';
import * as action from './../actions/index'
import PropTypes from 'prop-types';
import _ from 'lodash';

class  TaskListContainer extends Component {
   
showTask(tasks){
       // console.log(tasks);
        var { changeStatus} = this.props;
        var { deleteItem} = this.props;
        var { onEditTask} = this.props;
        var {filter} = this.props;
        console.log(filter);
                if(filter.name!==''){
                    //console.log(filter.name);
                   var name =filter.name.toLowerCase();
                    tasks = _.filter(tasks,item => item.name.toLowerCase().indexOf(name) !== -1)
                }
                if(filter.status!== -1){
                   // console.log(filter.status);
                   var status =parseInt(filter.status,10);
                    tasks = _.filter(tasks,item => item.status === (status===0?true:false))
                }
        var result = null;
        result = tasks.map((tasks,index) =>  {
            return <TaskITem key={tasks.id}  
                            item = {tasks} 
                            index = {index}  
                            changeStatus = {changeStatus}
                            deleteItem = {deleteItem}
                            onEditTask = {onEditTask}               
                            />  
        })
        return result;
    }


  render() {
    var {tasks} = this.props;
   
    var { onChangeFilter} = this.props;
    console.log(this.props.onChangeFilter)
    return (
        
        <TaskList 
             state = {tasks} 
             onChangeFilter = {onChangeFilter}   
        >
             { this.showTask(tasks) }
        </TaskList>  
    );
  }
}

TaskListContainer.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.bool.isRequired,        
    })).isRequired,
    onChangeFilter : PropTypes.func.isRequired,
    changeStatus : PropTypes.func.isRequired,
    deleteItem : PropTypes.func.isRequired,
    onEditTask : PropTypes.func.isRequired,
}


const mapStateToProps = (state) =>{
      return {
        tasks: state.tasks,
        filter : state.filter
        
      } 
}

 
 
 

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeFilter: (name,status) => {
            dispatch(onFilter(name,status));
        },
        changeStatus: (id) =>{
            dispatch(action.updateStatus(id));
        },
        deleteItem: (id) =>{
            dispatch(action.deleteItem(id));
        },
        onEditTask: (task) =>{
            dispatch(action.onEdit(task));  
        }
    }
}


export default connect (mapStateToProps,mapDispatchToProps) (TaskListContainer);
