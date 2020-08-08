import React,{Component} from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Search from './component/Search';
import TaskListContainer from './containers/TaskListContainer';
import {findIndex , filter, parseInt } from 'lodash'
import {BrowserRouter as Router ,Route ,Link } from 'react-router-dom';

import home from './component/Home';
import about from './component/About';

import _ from 'lodash';

class  App extends Component {

  constructor(props){
    super(props);
    this.state  = {
        filter: {
            name: '',
          status: -1
        }
    }
  }

  onGenerateData = () => {
       var tasks = [
         {
          id: this.generateID(),
          name : 'Ăn',
          status : true

        },
        {
          id: this.generateID(),
          name : 'Ngủ',
          status : false

        }, 
        {
          id: this.generateID(),
          name : 'Chơi',
          status : true

        }
      ] 

      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks));

  
  }


  findIndex2 = (id) =>{
    var {tasks} = this.state;
    var i = 0 ;
    tasks.forEach((task,index) => {
        if(task.id === id){
          i= index;
          return;
        }
    });
    return i;
  }

  onSubmit = (data) =>
  {
    var { tasks } = this.state;
    
    if(data.id===''){
      data.id = this.generateID();
      tasks.push(data);
    }else{
      let index =  _.findIndex(data.id);
      //console.log(index);
      tasks[index]= data;
    }
    this.setState({
      tasks :tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }


   
 
   

  render() {
    var {  editing } = this.state; 
    


    return (

        <div className="container">
             <Router>
                  <nav className="navbar navbar-default" role="navigation">
                      
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" >Title</a>
                    </div>
                  
                    
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                      <ul className="nav navbar-nav">
                        <li className="active"><Link to="/home"   >Home</Link></li>
                        <li><a >Link</a></li>
                      </ul>
                      <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                      </form>
                      <ul className="nav navbar-nav navbar-right">
                        <li><a  >Link</a></li>
                        <li className="dropdown">
                          <a  className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                          <ul className="dropdown-menu">
                            <li><a >Action</a></li>
                            <li><a  >Another action</a></li>
                            <li><a >Something else here</a></li>
                            <li><a >Separated link</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div> 
                  </nav>

             
                  <Route path="/home" exact  component={home}/>
             </Router>
                
              <TaskForm onSubmit = {this.onSubmit}
                        onUpdate = {this.onUpdate}
                         task = {editing}
              />

              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div>
                        <button type="button" className="btn btn-primary"
                        onClick = {this.onAdd}
                        >Thêm công việc</button> &nbsp;
                        <button type="button" className="btn btn-danger" 
                            onClick={ this.onGenerateData}
                        >Lấy danh sách</button> 
                    </div>
                    <br></br>
                    <div className="row"> 
                        
                          <Search />

                          <div className="col-md-4">    
                            <div className="btn-group" role="group">
                              <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sắp xếp&nbsp;<i className="fa fa-caret-square-o-down" aria-hidden="true"></i>
                              </button>
                              <div className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                                <div className="dropdown-item cs-pointer" href="#">&nbsp;A đến Z</div>
                                <div className="dropdown-item cs-pointer" href="#">&nbsp;Z đến A</div>
                                <hr></hr>
                                <div className="dropdown-item cs-pointer active" href="#">&nbsp;Trạng thái :Hoạt động</div>
                                <div className="dropdown-item cs-pointer" href="#">&nbsp;Trạng thái : Ẩn</div>
                              </div>
                          
                            </div>
                          </div>
                    
                      </div>

                  <div>
                  <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Tên</th>
                          <th>Trạng thái</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                     
                      

                         <TaskListContainer 
                        //  onChangeStatus={this.onChangeStatus}
                        //  onDelete={this.onDelete}
                        //  onEdit= {this.onEdit}
                        //  onFilter= {this.onFilter}
                         />

                      
                    </table>
              </div>

              </div>

              
                
                

        </div> 
           
 
    );
  }
}

export default App;
