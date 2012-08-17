var http = require('http'),
    response = JSON.stringify([{'title':'Wire the money to Panama','isDone':true},{'title':'Get hair dye, beard trimmer, dark glasses and passport','isDone':false},{'title':'Book taxi to airport','isDone':false},{'title':'Arrange for someone to look after the cat','isDone':false}]);

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(response);
}).listen(1337, '127.0.0.1');
