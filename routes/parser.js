function parser(req){
  return {
    ipaddress: req.headers['x-forwarded-for'].split(',')[0],
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].split(/[()]/)[1]
  };

}


module.exports = parser;