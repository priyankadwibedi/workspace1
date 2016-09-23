var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory,Route,Router,IndexRoute}=require('react-router');
var Navbar=require('./components/Navbar');
var MovieBox=require('./components/MovieBox');
var Home=require('./components/Home');
var About=require('./components/movielist');
var FavouriteMovies=require('./components/FavouriteMovies');

var Main = React.createClass({

        render: function(){
            return (
                  <div>
                  <Navbar />
                  <br/>
                  {this.props.children}
                  </div>
             );
         }
});

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/about/:value" component={About}/>
            <Route path="/moviebox" component={MovieBox}/>
            <Route path="/favmovie" component={FavouriteMovies}/>
        </Route>
    </Router >,document.getElementById("app"));
