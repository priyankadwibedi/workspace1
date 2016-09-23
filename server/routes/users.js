var express = require('express');
var user1=require('../model/user');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("<a href='/users'>Show Data</a>");
});

router.post('/userinsert/:userid/:password', function(req, res) {
    var user=new user1();
    user.username=req.params.userid;
    user.password=req.params.password;
    user.save(function(error){
        if(error)
        {
            res.send(error);
        }
        else
            {
                res.send("user created");
            }

    });
});

router.put('/', function(req, res, next) {
  res.send('respond with a resource put');
});

router.delete('/', function(req, res, next) {
  res.send('respond with a resource delete');
});

module.exports = router;
