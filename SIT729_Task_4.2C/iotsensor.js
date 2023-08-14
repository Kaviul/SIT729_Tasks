const express = require('express');
const app = express();
const Sensor = require('./Model/sensor');
const mongoose = require('mongoose')
const url ="mongodb+srv://kaviuln1335:kaviuln@cluster0.hcagxgu.mongodb.net/?retryWrites=true&w=majority"
var plotly = require('plotly')("kaviuln", "0BfILaNw8CW0AKHmq3CT")

var data =
{
x: [],
y: [],
type: "scatter"
};

setInterval(sensortest, 10000);

function sensortest(){

    try{
        mongoose.connect(url, {useUnifiedTopology: true},
            () => console.log("Mongoose connected"),
            );
        } catch (e) {
            console.log("Mongoose not connected!");
        }
        const db = mongoose.connection
        
        db.on('error', (err) => {
            console.log(err)
        })
        
        db.once('open', () => {
            console.log("Database Connection Established!")
        })


    const sensordata = {
        id: 0,
        name: "temperaturesensor",
        address: "221 Burwood Hwy, Burwood VIC 3125",
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
        temperature: sensordata.temperature
        });

        


        newSensor.save().then(doc => {
            // for (i=0; i<=10; i++)
            // {
            // time = sensordata.time;
            // endtime = Date.now();
            // elapsed = ((endtime-time)/1000);
            // console.log(doc);
            // console.log("Start-time: ", time);
            // console.log("Time elapsed or needed to save data in db: ", elapsed, "sec");
            // }

        //     time = sensordata.time;
        //     endtime = Date.now();
        //     elapsed = ((endtime-time)/1000);
        //     console.log(doc);
        //     time = sensordata.time;
        //    console.log("Start-time: ", time);
        //    console.log("Time elapsed: ", elapsed, "sec");

        data.x.push((new Date()).toISOString());
        data.y.push(time);
        var graphOptions = {filename: "iot-performance", fileopt:
        "overwrite"};
        plotly.plot(data, graphOptions, function (err, msg) {
        if (err) return console.log(err);
        console.log(msg);
        });
            
        }).then(() => {
        //mongoose.connection.close();
        console.log("Mongodb still open");
        });

}


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

