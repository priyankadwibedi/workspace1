var React = require('react');

var SearchBox = React.createClass({

    getInitialState:function(){
            return ({title:''})
        },

        titleChange: function(e) {
        this.setState({title : e.target.value});
        },

    handleSubmit: function(e) {
        e.preventDefault();
       this.props.change(this.state.title);
    },

    render: function() {
        return (
        <div>
            <div className="container-fluid" id="main">
                  <div className="container-fluid">
                        <form  className="navbar-form">
                            <input type="text" onChange={this.titleChange} className="form-control" placeholder="Search Movie..." id="searchInput" />
                            <input type="button" value="Search" className="btn btn-default " onClick={this.handleSubmit}/>
                        </form>
                   </div>
               </div>
       </div>
        );
        }
    });

module.exports=SearchBox;
