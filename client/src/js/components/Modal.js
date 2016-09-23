var React = require('react');

var Modal=React.createClass({

    getInitialState:function()
      {
         return ({title:"",year:""});
       },

    componentDidMount: function()
    {
           {this.props.handleHideModal}
   },

updateMovie:function(e)
{
    e.preventDefault();
    var id=e.target.value;

    {this.props.values.map(function(result) {
        if(id==result._id)
        {
            console.log(result);
            result.Title=this.state.title;
            result.Year=this.state.year;
            console.log(result.Title);
            console.log(result.Year);
            $.ajax({
              url:"http://localhost:8080/movie/"+id,
              dataType: 'json',
              type: 'PUT',
              cache:false,
              data:result,

              success: function(data) {
                         console.log('success');
                         console.log(JSON.stringify(data));
                     }
             })
         }
}.bind(this) )}
},


handleChangeTitle:function(e)
{
    this.setState({title: e.target.value});

},

handleChangeYear:function(e)
{
    this.setState({year: e.target.value});

},

render : function(){

      var display=this.props.values.map(function(result) {
          if(result._id==this.props.x)
          {
          return(
        <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Update Movie</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                               <div classname="col-sm-4">
                                     <img   src={result.Poster} alt={result.Title}  width="200" height="200"/>
                               </div>
                               <div classname="col-sm-8">
                                   <div className="list-group">
                                     <p className="list-group-item">
                                         <h3 className="list-group-item-heading pull-left">Title</h3>
                                          <input type="text" displayValue={result.Title}  ref="t" onChange={this.handleChangeTitle.bind(this)}/>
                                     </p>
                                     <p className="list-group-item">
                                         <h3 className="list-group-item-heading pull-left">Year</h3>
                                         <input type="text" displayValue={result.Year}  ref="y" onChange={this.handleChangeYear.bind(this)}/>
                                     </p>
                                   </div>
                               </div>
                           </div>
                          </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-primary btn-lg" value={result._id}  onClick={this.updateMovie} >Update Movie</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                   </div>

               </div>
           </div>
       );
   }
   }.bind(this))

   return (
       <div>
       {display}
    </div>
);
}
});
module.exports=Modal;
