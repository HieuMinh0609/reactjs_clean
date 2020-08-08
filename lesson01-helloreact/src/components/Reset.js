import React,{Component} from 'react';
class  Reset extends Component {
    ResetSizeClick(size,color){
        //console.log(color);
        this.props.setOnResize(size,color);
    }

  render() {
      return (
        <button className="btn btn-danger" onClick={() => this.ResetSizeClick(15,'red')}>Reset</button>
      )
  }
}

export default Reset;
