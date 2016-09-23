var React = require('react');

    var MovieList = React.createClass({

        getInitialState: function () {
          return ({key: "",current:""});
         },


    addMovie:function(e){
        e.preventDefault();
        var x=e.target.value;
         console.log(x);
        {this.props.list.map(function(result) {
            if(x==result.imdbID)
            {
                console.log("hello1");
                $.ajax({
                  url:"http://localhost:8080/movie",
                  dataType: 'json',
                  type: 'POST',
                  cache:false,
                  data:result,

                  success: function(data) {
                             console.log('success');
                             console.log(JSON.stringify(data));
                         }
                 })
             }
    } )}

    },


    render: function() {
    return (
        <div>
            {this.props.list.map(function(result) {
              return (
                  <div className="jumbotron container-fluid" id="list">
                       <div key={result.imdbID} className="row" id="movieList">
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
                                     <button type="button" className="btn btn-primary btn-lg pull-left"   value={result.imdbID} onClick={this.addMovie}>Add Movie</button>
                           </div>
                       </div>
                  </div>
              );
          }.bind(this))}
            
      </div>
    );
    }
    });
module.exports=MovieList;
