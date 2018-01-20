
function time (timestamp){
  var results = {
    unix: null,
    natural: null
  }
  var mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var date;
  if(!isNaN(parseInt(timestamp))){
    date = new Date(parseInt(timestamp*1000));
  }else{
    date = new Date(timestamp);
    
  }
  if(!isNaN(date.getTime())){
    results.unix = Math.floor(date.getTime()/1000);
    results.natural = mon[date.getMonth()] + ' ' + date.getDate() +' '+ date.getFullYear();
  }else{
	  results = 'Wrong Date';
  }

return results;
}



module.exports = time;