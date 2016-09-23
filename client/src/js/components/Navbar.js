var React = require('react');
var {Link}=require('react-router');
var NavLink=require('./NavLink');

var Navbar = React.createClass({

    render: function() {
        return (
        <div>
            <div className="container-fluid" id="main">
                <div className="navbar navbar-fixed-top navbar-inverse">
                  <div className="container-fluid">
                       <a className="navbar-brand" href="#">MOVIE|MASTI</a>
                       <ul className="nav navbar-nav">
                          <li>
                              <NavLink to="/home">Home</NavLink>
                          </li>

                          <li>
                              <NavLink to="/favmovie" >Favourite Movie</NavLink>

                          </li>

                          <li>
                              <NavLink to="/moviebox" >MovieBox</NavLink>

                          </li>


                          <li>
                              <a href="#" >LOGIN</a>

                          </li>

                          <li>
                              <a href="#" >LOGOUT</a>

                          </li>

                      </ul>

                   </div>
               </div>
           </div>
       </div>
        );
        }
    });

module.exports=Navbar;
