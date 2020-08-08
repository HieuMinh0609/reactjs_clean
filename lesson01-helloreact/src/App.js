import React,{Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';



class  App extends Component {

  constructor(props){
    super(props);
    this.state  = {
      color : 'red',
      fontSize : 15 
    }
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize =this.onChangeSize.bind(this);
    this.ResetSizeLetGo = this.ResetSizeLetGo.bind(this);
  }

  onSetColor = (params) =>{ 
    //console.log(params);
    this.setState({
        color: params
    });
  }
  // setOnResize = (color,size) =>{
  //   this.setState({
  //     color: color,
  //     fontSize: size
  // });
  // }
  onChangeSize(value){
      if(this.state.fontSize + value >=8 && this.state.fontSize + value <=36){
        this.setState({
            fontSize : this.state.fontSize + value
        });
      }
     // console.log(value)
  }
  ResetSizeLetGo = (fontSize,color) =>{
    this.setState({
      fontSize :fontSize,
      color: color
    })
  }

  render() {
      return (
            <div className="container mt-50">
              <div className="row">
                  <ColorPicker color={this.state.color} onReceiveColor= {this.onSetColor}/>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                       <SizeSetting fontSize={this.state.fontSize}
                        onChangeSize = {this.onChangeSize}
                       />
                      <div>
                       {/* <button className="btn btn-danger" onClick={this.ResetSize}>Reset</button> */}
                        <Reset setOnResize={this.ResetSizeLetGo} />
                      </div>
                  </div>
              </div>
            <Result color ={this.state.color} fontSize={this.state.fontSize}/> 
            </div>
      )
  }
}

export default App;
