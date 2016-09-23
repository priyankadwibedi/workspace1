var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the add route", function(err){
  it("should insert data", function(done){
    url
        .post("/movie")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          //expect(res.text).to.be.equal("Hello!");
          res.text.should.be.equal("movie added");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the display route", function(err){
  it("should display movie", function(done){
    url
        .get("/movie")
        .expect(200)
        .end(function(err,res){
         var myObj = JSON.parse(res.text);
         myObj[0].Title.should.be.equal("batman vs superman");
         done();
        });

  });
});

describe("Testing the third route", function(err){
  it("should handle and send the JSON data Part 1", function(done){
    url
        .get("/movie")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.name.should.be.equal("Amit");
          done();
        });

  });
  it("should handle and send the JSON data Part 2", function(done){
    url
        .get("/movie")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.name.should.be.equal("Mahesh");
          done();
        });

  });
});
