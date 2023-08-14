// // var express = require('express');
// // var router = express.Router();

// //const SerialPort = require('serialport');
// //const ByteLength = SerialPort.parsers.ByteLength;
// // // Add your USB port name
// // const port = new SerialPort("COM6", {
// //     baudrate: 9600
// // 	parser: SerialPort.parsers.readline('\n')
// // });

// // port.on('open', function () {
// // 	console.log('Opened port...');
// // });
// //import { ByteLengthParser } from 'serialport';
// // const port = new SerialPort({ path: 'COM6', baudRate: 9600,})

// // port.on('open', function () {
// // 	console.log('Opened port...')
// // })

// // port.open(function (err) {
// // 	if (err) {
// // 	  return console.log('Error opening port: ', err.message)
// // 	}
  
// // 	// Because there's no callback to write, write errors will be emitted on the port:
// // 	//port.write('main screen turn on')
// //   })

//   //const { ReadlineParser } = require('@serialport/parser-readline')
//   const { SerialPort } = require('serialport')
//   const { ReadlineParser } = require('@serialport/parser-readline')
//   //const port = new SerialPort({ path: 'COM6', baudRate: 9600 })
  
//   const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
//   parser.on('data', console.log("Parser started"))

//   port.on('open', function () {
// 	console.log('Opened port...')
// })

// port.open(function (err) {
// 	if (err) {
// 	  return console.log('Error opening port: ', err.message)
// 	}
// })






// // SerialPort.list(function (err, ports) {
// //     ports.forEach(function(port) {
// //         console.log(port.comName, port.pnpId, port.manufacturer); // or console.log(port)
// //     });
// // });

// // router.get('/', function(req, res){
// //     function sendData(code, msg) {
// //         res.statusCode = 500;
// //         res.write(msg);
// //         console.log(msg);   
// //     }

// //     var port = new SerialPort("COM6", {
// //         baudRate: 38400
// //     });

// //     port.on('open', function() {
// //         port.write(Buffer.from('status1', 'ascii'), function(err) {
// //             if (err) 
// //                 return sendData(500, err.message);

// //             console.log('message written');
// //         });
// //     });

// //     var buffer = '';
// //     port.on('data', function(chunk) {
// //         buffer += chunk;
// //         var answers = buffer.split(/\r?\n/); // Split data by new line character or smth-else
// //         buffer = answers.pop(); //Store unfinished data

// //         if (answer.length > 0) 
// //             sendData(200, answer[0]);
// //     });

// //     port.on('error', function(err) {
// //         sendData(500, err.message);
// //     });
// // });

// // module.exports = router;