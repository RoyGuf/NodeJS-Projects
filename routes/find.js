var mongo = require("mongodb").MongoClient;
var validUrl = require("valid-url");
var dburl = 'mongodb://127.0.0.1:27017/mongopro'

function find(req,res){
  var id = req.params.id;
    mongo.connect(dburl, function(err, db){
      if(err){console.log(err)}
      console.log('connected');
      var shortener = db.collection('shortener');
      shortener.find({short: id}).toArray(function(err,data){
		  if(err){console.log(err)}
		  if(data.length>0){	  
			  db.close();
			  res.redirect(data[0].url)
		  }else{
			  db.close();
			  res.end('Not Found');
		  }
	  })
		  
      })
	  
    }
 


module.exports = find;