import React,{Component} from 'react';
 

 
class  TaskItem extends Component {

    changeStatus = () =>{
      var { changeStatus } = this.props;
         changeStatus(this.props.item.id);
    }
    onDelete = () =>{
      var { deleteItem } = this.props;
        deleteItem(this.props.item.id);
    }
    onEditTask = ()=>{
      var { onEditTask } = this.props;
        onEditTask(this.props.item);
    }


  render() {
    
    var item = this.props.item;
    var index = this.props.index;

    return (
         
        <tr>
            <td>{index + 1}</td>
            <td>
            <span>{item.name}</span>
            </td>
            <td> 
                 <span className={item.status ? 'label label-success cs-pointer': 'label label-danger cs-pointer'}
                 onClick={this.changeStatus}
                 >{item.status ? 'Hoạt động': 'Ẩn'}</span>
            </td> 
            <td> 
                
                <button  type="button" className="btn btn-large btn_table btn-success"
                onClick = {this.onEditTask}
                >Sửa</button>&nbsp;
                <button onClick={this.onDelete} type="button" className="btn btn-large btn_table btn-danger">Xóa</button>
            </td>     
        </tr>
    );
  }
}

// const mapStateToProps = (id) =>{
//     return {}
// }
// const mapDispatchToProps = (dispatch,props) => {
//   return {
//     changeStatus: (id) =>{
//           dispatch(action.updateStatus(id));
//       },
//     deleteItem: (id) =>{
//         dispatch(action.deleteItem(id));
//     },
//     onEditTask: (task) =>{
//         dispatch(action.onEdit(task));  
//     }
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
export default  TaskItem ;
