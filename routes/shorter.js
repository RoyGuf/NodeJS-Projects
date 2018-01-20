var mongo = require("mongodb").MongoClient;
var validUrl = require("valid-url");
var dburl = 'mongodb://127.0.0.1:27017/mongopro'

function shorty(req,res){
  var url = req.params.url;
  var results = {};
  if(validUrl.isUri(url)){
    mongo.connect(dburl, function(err, db){
      if(err){console.log(err)}
      var shortener = db.collection('shortener');
      var random=[];
      for(var i =0;i<4;i++){
        random.push(Math.floor(Math.random()*9))
      }
      shortener.insert([{url: url, short: random.join('')}],function(){
          results = {
            original_url: url,
            short_url: req.protocol+'://'+req.headers['host']+'/'+random.join('')
          }
		  db.close();
		  res.send(results);
		  
      })
	  
    })
	
  }else{
	  res.status(404).send('Wrong URL. Try again.');
  }
	

}


module.exports = shorty;