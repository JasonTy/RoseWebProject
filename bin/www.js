/**
 * Created by tangyitangyi on 16/8/3.
 */
var http=require('http');
var app=require('../app.js')
http.createServer(app).listen(8400).on('listening',function(){
    console.log('Listening on port 8400');
});
