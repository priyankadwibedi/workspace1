var React = require('react');
var ReactDOM = require('react-dom');
var SearchBox=require('./SearchBox');
var MovieList=require('./MovieList');

var MovieBox = React.createClass({

    getInitialState:function()
      {
         return ({Query:'',Movies:[]})
       },
     queryChange:function (v)
      {
         this.setState({Query:v});
         $.ajax({
           url:"http://www.omdbapi.com/?type=movie&s="+v,
           dataType: 'json',
           type: 'GET',
           success: function(data) {
               console.log(data.Search);
           this.setState({Movies:data.Search});
           }.bind(this),
           error: function(xhr, status, err) {
           console.error(this.props.url, status, err.toString());
          }.bind(this)
      });
      },

        render: function()
         {
            return (
                <div>
                    <SearchBox  change={this.queryChange}/>
                    <MovieList list={this.state.Movies} />
                </div>
             );
         }
});
module.exports = MovieBox;
