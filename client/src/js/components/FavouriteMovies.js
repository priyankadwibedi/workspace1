var React = require('react');
var Modal=require('./Modal');

var FavouriteMovies= React.createClass({

    getInitialState:function()
      {
         return ({data:[],showModal: false,x:""})
       },
       handleHideModal:function(){
        this.setState({showModal: false})
    },
    handleShowModal:function(e){
        this.setState({showModal: true})
        this.setState({x:e.target.value})
    },

    componentDidMount:function(){
                $.ajax({
                  url:"http://localhost:8080/movie",
                  dataType: 'json',
                  type: 'GET',
                  cache:false,
                  success: function(data1) {
                     this.setState({data: data1});
                          console.log("data"+data);
                      }.bind(this)
                 })
    },

    deleteMovie:function(e){
        e.preventDefault();
        var x=e.target.value;
        console.log(x);
        $.ajax({
          url:"http://localhost:8080/movie/"+x,
          dataType: 'json',
          type: 'DELETE',
          cache:false,
          success: function(data) {
                  console.log(data);
              }.bind(this)
         })
    },

        render: function(){

                    var display=this.state.data.map(function(result) {

                      return (
                          <div className="jumbotron container-fluid" id="list">
                               <div key={result.ImdbID} className="row" id="movieList">
                                   <div className="col-sm-4">
                                       <img src={result.Poster} alt={result.Title} width="200" height="200"/>
                                   </div>
                                       <div className="col-sm-8">
                                             <div className="list-group">
                                               <p className="list-group-item">
                                                   <h3 className="list-group-item-heading pull-left">Title</h3>
                                                   <h4 className="list-group-item-text">{result.Title}</h4>
                                               </p>
                                               <p className="list-group-item">
                                                   <h3 className="list-group-item-heading pull-left">Year</h3>
                                                   <h4 className="list-group-item-text">{result.Year}</h4>
                                               </p>
                                               </div>
                                             <button type="button"  id="space" className="btn btn-primary btn-lg pull-left" value={result._id}  data-toggle="modal" data-target="#myModal" onClick={this.handleShowModal}>Update Movie</button>
                                             {this.state.showModal ? <Modal handleHideModal={this.handleHideModal}     values= {this.state.data}  x={this.state.x}/> : null}

                                            <button type="button" className="btn btn-success btn-lg pull-left"  value={result._id}  onClick={this.deleteMovie}>Delete Movie</button>
                                     </div>
                               </div>
                          </div>
                      )
                  }.bind(this));

                  return (
                      <div>
                      {display}
                      </div>
            );
            }
});

module.exports=FavouriteMovies;
