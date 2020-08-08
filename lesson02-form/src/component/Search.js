import React,{Component} from 'react';

class  Search extends Component {
  render() {
    return (
        <div className="col-md-8">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" id="txtSearch"/>
                <div className="input-group-btn">
                <button className="btn btn-primary" type="submit">
                    <span className="glyphicon glyphicon-search"></span> Tìm kiếm
                </button>
                </div>
            </div>
        </div>
    );
  }
}

export default Search;
