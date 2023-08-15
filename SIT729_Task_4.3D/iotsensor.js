const express = require('express');
const app = express();
const Sensor = require('./Model/sensor');
const mongoose = require('mongoose')
var AWS = require("aws-sdk");
//var mysql = require('mysql');
const url ="mongodb+srv://kaviuln1335:kaviuln@cluster0.hcagxgu.mongodb.net/?retryWrites=true&w=majority"
const sgMongo_url = "mongodb://admin:QoTcV6tkoblTOm73@SG-boom-tiger-7766-59231.servers.mongodirector.com:27017/admin"
//var plotly = require('plotly')("kaviuln", "0BfILaNw8CW0AKHmq3CT")
var plotly = require('plotly')("kaviul","RX4q02OWUKAzP3Yxsc7w")


var data =
{
x: [],
y: [],
type: "scatter"
};

// var data_sg =
// {
// x: [],
// y: [],
// type: "scatter"
// };

setInterval(sensortest, 10000);

function sensortest(){

    //MongoDB Connection

    // try{
    //     mongoose.connect(url, {useUnifiedTopology: true},
    //         () => console.log("Mongoose connected"),
    //         );
    //     } catch (e) {
    //         console.log("Mongoose not connected!");
    //     }
    //     const db1 = mongoose.connection
        
    //     db1.on('error', (err) => {
    //         console.log(err)
    //     })
        
    //     db1.once('open', () => {
    //         console.log("Database Connection Established!")
    //     })


    //ScaleGrid MongoDB Connection

    // try{
    //     mongoose.connect(sgMongo_url, {useUnifiedTopology: true},
    //         () => console.log("SG Mongoose connected"),
    //         );
    //     } catch (e) {
    //         console.log("SG Mongoose not connected!");
    //     }
    //     const db2 = mongoose.connection
        
    //     db2.on('error', (err) => {
    //         console.log(err)
    //     })
        
    //     db2.once('open', () => {
    //         console.log("ScaleGrid MongoDB Connection Established!")
    //     })

    
     //AWS DynamoDB Connection

        let awsConfig = {
            "region": "us-east-1",
            "endpoint": "dynamodb.us-east-1.amazonaws.com",
            "accessKeyId": "AKIAWUWSR5DTWG2MK5BH", 
            "secretAccessKey": "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"
        };
        AWS.config.update(awsConfig);
        
        let docClient = new AWS.DynamoDB.DocumentClient();
    

    //Sensor Data

    const sensordata = {
        id: Math.random(),
        name: "temperaturesensor",
        address: "221 Burwood Hwy, Burwood VIC 3125",
        time1: Date.now(),
        time: Date.now(),
        temperature: 20
        }
    
        const low = 10;
        const high = 40;
        reading = Math.floor(Math.random() * (high - low) + low);
        sensordata.temperature = reading;
    
    const jsonString = JSON.stringify(sensordata);
    console.log(jsonString);
    
    const newSensor = new Sensor({
        id: sensordata.id,
        name: sensordata.name,
        address: sensordata.address,
        time: sensordata.time,
        time1: sensordata.time1,
        temperature: sensordata.temperature
        });

        newSensor.save().then(doc => {
            // for (i=0; i<=10; i++)
            // {
            // time1 = sensordata.time1;
            // endtime = Date.now();
            // elapsed = ((endtime-time1)/1000);
            // console.log(doc);
            // console.log("Start-time: ", time1);
            // console.log("Time elapsed: ", elapsed, "sec");
            // }

        //     time = sensordata.time;
        //     endtime = Date.now();
        //     elapsed = ((endtime-time)/1000);
        //     console.log(doc);
            time = sensordata.time;
            time1 = sensordata.time1;
            console.log("Start-time: ", time);
            console.log("Time elapsed: ", elapsed, "sec");

       //AWS Data

       let save = function () {
        
        var input = {
            "ID": sensordata.id, "Name": sensordata.name, "Address": sensordata.address,
            "DT": sensordata.time, "Temperature": sensordata.temperature
        };
        var params = {
            TableName: "IoT_Data",
            Item:  input
        };
        docClient.put(params, function (err, data) {
    
            if (err) {
                console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
            } else {
                console.log("users::save::success" );                      
            }
        });
    }
    
    save();



       //Data Push to Plotly-MongoDb

        // data.x.push((new Date()).toISOString());
        // data.y.push(time1);
        // var graphOptions = {filename: "iot-performance-SG-mongodb", fileopt:
        // "overwrite"};
        // plotly.plot(data, graphOptions, function (err, msg) {
        // if (err) return console.log(err);
        // console.log(msg);
        // });


        // data_sg.x.push((new Date()).toISOString());
        // data_sg.y.push(time);
        // var graphOptions = {filename: "iot-performance-mongodb&sg", fileopt:
        // "overwrite"};
        // plotly.plot(data_sg, graphOptions, function (err, msg) {
        //   if (err) return console.log(err);
        //   console.log(msg);
        //   });
            
        //Data Push to Plotly- SG MongoDB
        
        // data.x.push((new Date()).toISOString());
        // data.y.push(time);
        // var graphOptions = {filename: "iot-performance-sg-mongodb", fileopt:
        // "overwrite"};
        // plotly.plot(data, graphOptions, function (err, msg) {
        // if (err) return console.log(err);
        // console.log(msg);
        // });

        }).then(() => {
        //mongoose.connection.close();
        console.log("SG MongoDB still open");
        });

 }

// setInterval(sensortest2, 10000);

// function sensortest2(){

//     //MongoDB Connection

//     // try{
//     //     mongoose.connect(url, {useUnifiedTopology: true},
//     //         () => console.log("Mongoose connected"),
//     //         );
//     //     } catch (e) {
//     //         console.log("Mongoose not connected!");
//     //     }
//     //     const db1 = mongoose.connection
        
//     //     db1.on('error', (err) => {
//     //         console.log(err)
//     //     })
        
//     //     db1.once('open', () => {
//     //         console.log("Database Connection Established!")
//     //     })


//     //ScaleGrid MongoDB Connection

//     try{
//         mongoose.connect(sgMongo_url, {useUnifiedTopology: true},
//             () => console.log("SG Mongoose connected"),
//             );
//         } catch (e) {
//             console.log("SG Mongoose not connected!");
//         }
//         const db2 = mongoose.connection
        
//         db2.on('error', (err) => {
//             console.log(err)
//         })
        
//         db2.once('open', () => {
//             console.log("ScaleGrid MongoDB Connection Established!")
//         })



//     //Sensor Data

//     const sensordata1 = {
//         id: 0,
//         name: "temperaturesensor",
//         address: "221 Burwood Hwy, Burwood VIC 3125",
//         time: Date.now(),
//         temperature: 20
//         }
    
//         const low = 10;
//         const high = 40;
//         reading = Math.floor(Math.random() * (high - low) + low);
//         sensordata1.temperature = reading;
    
//     const jsonString = JSON.stringify(sensordata1);
//     console.log(jsonString);
    
//     const newSensor1 = new Sensor({
//         id: sensordata1.id,
//         name: sensordata1.name,
//         address: sensordata1.address,
//         time: sensordata1.time,
//         temperature: sensordata1.temperature
//         });

//         newSensor1.save().then(doc => {
//             // for (i=0; i<=10; i++)
//             // {
//             // time = sensordata.time;
//             // endtime = Date.now();
//             // elapsed = ((endtime-time)/1000);
//             // console.log(doc);
//             // console.log("Start-time: ", time);
//             // console.log("Time elapsed: ", elapsed, "sec");
//             // }

//             //time = sensordata.time;
//             //endtime = Date.now();
//             //elapsed = ((endtime-time)/1000);
//             console.log(doc);
//             time = sensordata1.time;
//            // console.log("Start-time: ", time);
//            // console.log("Time elapsed: ", elapsed, "sec");



//        //Data Push to Plotly-MongoDb

//         // data.x.push((new Date()).toISOString());
//         // data.y.push(time);
//         // var graphOptions = {filename: "iot-performance-mongodb", fileopt:
//         // "overwrite"};
//         // plotly.plot(data, graphOptions, function (err, msg) {
//         // if (err) return console.log(err);
//         // console.log(msg);
//         // });


//         data_sg.x.push((new Date()).toISOString());
//         data_sg.y.push(time);
//         var graphOptions = {filename: "iot-performance-mongodb&sg", fileopt:
//         "overwrite"};
//         plotly.plot(data_sg, graphOptions, function (err, msg) {
//           if (err) return console.log(err);
//           console.log(msg);
//           });
            
//         //Data Push to Plotly- SG MongoDB
        
//         // data.x.push((new Date()).toISOString());
//         // data.y.push(time);
//         // var graphOptions = {filename: "iot-performance-sg-mongodb", fileopt:
//         // "overwrite"};
//         // plotly.plot(data, graphOptions, function (err, msg) {
//         // if (err) return console.log(err);
//         // console.log(msg);
//         // });

//         }).then(() => {
//         //mongoose.connection.close();
//         console.log("SG MongoDB still open");
//         });

// }

// const sensordata = {
//     id: 0,
//     name: "temperaturesensor",
//     address: "221 Burwood Hwy, Burwood VIC 3125",
//     time: Date.now(),
//     temperature: 20
//     }

//     const low = 10;
//     const high = 40;
//     reading = Math.floor(Math.random() * (high - low) + low);
//     sensordata.temperature = reading;

// const jsonString = JSON.stringify(sensordata);
// console.log(jsonString);

// const newSensor = new Sensor({
//     id: sensordata.id,
//     name: sensordata.name,
//     address: sensordata.address,
//     time: sensordata.time,
//     temperature: sensordata.temperature
//     });
//     newSensor.save().then(doc => {
//         for (i=0; i<=10; i++)
//         {
//         time = sensordata.time;
//         endtime = Date.now();
//         elapsed = ((endtime-time)/1000);
//         console.log(doc);
//         console.log("Start-time: ", time);
//         console.log("Time elapsed: ", elapsed, "sec");
//         }
        
//     }).then(() => {
//     mongoose.connection.close();
//     });

