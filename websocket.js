var ws = require("nodejs-websocket");
var chokidar = require('chokidar');

/* Start websocket server */

var server = ws.createServer(function (conn) {

    chokidar.watch('.', {ignored: ['node_modules', '.git']}).on('all', (event, path) => {
      console.log(event, path);
      var message = `I see a ${event} on ${path}`
      var eventType = event
      conn.sendText(JSON.stringify({message,eventType}))
    });
    console.log("New connection")
    //conn.sendText('hello front end')
    conn.on('connection',function(conn){
      console.log('conection made')
      //conn.sendText('hello front end')
    })
    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
    conn.on('error', function(errObj){
      console.log('there was an error')
      console.log(errObj)
    })
}).listen(3001)

/* End websocket server */