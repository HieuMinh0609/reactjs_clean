import React,{Component} from 'react';
import { connect } from 'react-redux'
import * as action from './../actions/index'

class  TaskForm extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            id : '',
            name : '',
            status : false
        }
    }
   

    componentWillReceiveProps(nextProps){
      console.log(nextProps);
        if(nextProps && nextProps.task){
                this.setState({
                    id :  nextProps.task.id,
                  name :  nextProps.task.name,
                status :  nextProps.task.status
              })
        }else{
          this.setState({
            id :  '',
          name : '',
        status :  false
      })
        }
    }
    
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onAddTask(this.state);
    }
    onClear = () =>{
        this.setState({
            id : '',
            name : '',
            status : false
        })
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = (target.value === 'false')? false : target.value ;
        this.setState({
            [name] : value
        })
    }

  
  render() {
      let  {id} = this.state;
      
      console.log(id);
    return (
       <div>
              <div className="page-header text-center">
                <h1 >QUẢN LÝ CÔNG VIỆC</h1>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                 <div className="panel panel-warning">
                     <div className="panel-heading">
                    <h3 className="panel-title">{id?'Sửa công việc':'Thêm công việc'} <i className="fa fa-times-circle-o fl-r" aria-hidden="true"></i></h3>
                     </div>
                     <div className="panel-body">
                        
                        <form onSubmit={this.onSubmit }>
                          <div className="form-group">
                            <span>Tên </span>
                            <input type="text" className="form-control" id="name"  value={this.state.name} name="name" placeholder="Tên"
                            onChange={this.onChange}
                            />
                          </div>
                          <div className="form-group">
                            <span>Trạng thái </span>
                          <select name="status" className="form-control"  
                        
                            onChange={this.onChange}
                            value={this.state.status}
                          >
                            <option value={true}>Hoạt động</option>
                            <option value={false}>Ẩn</option>
                          </select>
                          </div>
                        
                          <button type="submit"  className="btn btn-primary">Lưu lại</button>&nbsp;
                          <button type="reset" className="btn btn-warning"
                          onClick={this.onClear}
                          >Hủy bỏ</button>
                        </form>
                        
                     </div>
                 </div>
              </div>
            </div>   
 
    );
  }
}
const mapStateToProps = state =>{
        return {
          task: state.itemTask
        }
}

const mapDispatchToProps = (dispath,props) => {
  return {
    onAddTask : (task) =>{
        dispath(action.addTask(task));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)  (TaskForm);
