import React,{Component} from 'react';


class  ColorPicker extends Component {

        constructor(props){
            super(props);
            this.state ={
                colors : ['red','green','blue','#ccc']
            };
        }
        showColor(color){
            console.log(this.props.color);
           return {
               backgroundColor:color
           }
        }
        setActiveColor(color){
            //console.log(color);
            this.props.onReceiveColor(color);
        }

  render() {


    var elmColors = this.state.colors.map((color,index) => {
            // return <span key={index}></span>
            return <div 
            className={this.props.color === color ? 'active w40 h40 ml-10 float-left cs-pt':'w40 h40 ml-10 float-left cs-pt '} 
            key={index} style={this.showColor(color)}
            onClick={() => this.setActiveColor(color)}
             
            ></div>
    });
  
      return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel panel-body">
            
                  { elmColors }
           
           
          </div>
          <hr></hr>
        </div>
      </div>
      )

  }
  
}

export default ColorPicker;
