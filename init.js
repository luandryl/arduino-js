var five = require("johnny-five");
var request = require('request');
var request = require('sync-request');
var buf = require('Buffer')
var ligado = false

var url = "https://rolinhas-project.herokuapp.com/arduino"
const board = new five.Board({ timeout: 3600 });


board.on("ready", function() {

  loop()
      
});
var loop = function(){
   
   setTimeout(function(){
     buf = onoff(url)
      if(buf.toString() == "true"){
        if(ligado === false){
           var led = new five.Led(12);
           led.on()
           ligado = true
        }
      }else{
        if(ligado === true){
            var led = new five.Led(12);
            led.off()
            ligado = false
        }
      }
      loop()
 }, 10);
}

var onoff = function (url) {
    var res = request('GET', url)
    return res.getBody()
} 

