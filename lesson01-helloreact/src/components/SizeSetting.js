import React,{Component} from 'react';



class  SizeSetting extends Component {

    changeSize(value){
        this.props.onChangeSize(value);
    }
    
  render() {
      return (
          <div>
            <div className="panel panel-warning">
            <div className="panel-heading">
            <h3 className="panel-title">
                Size : {this.props.fontSize} px
                </h3>
            </div>
            </div>
            <div className="panel panel-body">
                <button type="button" className="btn btn-success" onClick={() =>this.changeSize(2)}>Tăng </button>
                <button type="button" className="btn btn-warning ml-10" onClick={() => this.changeSize(-2)}>Giảm</button>
                <hr></hr>
            </div>
      </div>
      )

  }
  
}

export default SizeSetting;
