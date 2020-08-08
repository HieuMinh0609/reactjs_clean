import React,{Component} from 'react';
 
 
 
 


class  TaskList extends Component {

  constructor(props){
    super(props);
    this.state  = {
        filter: {
            name: '',
          status: -1
        }
    }
  }


    onChangeFilter = (event) =>{
      var { onChangeFilter } = this.props;
      let target = event.target;
      let name =target.name;
      let value = target.value;
      onChangeFilter (
        name === 'filterName'? value : this.state.filter.name,
        name === 'filterStatus'? value : this.state.filter.status
      ) 
    }
    

  render() {
   
    var {state} = this.props;
 
    return (
         
        <tbody>
        <tr>
        <td></td>
        <td>
          <input type="text" className="form-control" id="" name="filterName" placeholder="Tên"
          value ={state.filterName}
          onChange = {this.onChangeFilter}
          />
        </td>
        <td>
            <select name="filterStatus" id="input" className="form-control" required="required"
            onChange = {this.onChangeFilter}
            value = {state.filterStatus}
            > <option value="-1">Tất cả</option>
              <option value="1">Ẩn</option>
              <option value="0">Kích hoạt</option>
            </select>
            
        </td>
      </tr>
      {this.props.children}
       
    </tbody>
    );
  }
}

 
export default  TaskList;
