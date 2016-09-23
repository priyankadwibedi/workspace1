var React = require('react');
var AboutReact=require('./AboutReact');
var AboutMean=require('./AboutMean');

var About= React.createClass({
        render: function(){
            return (
                  <div>
                  <h2>About</h2>
                    URL:{this.props.params.value}
                  </div>
             );
         }
});

module.exports=About;
