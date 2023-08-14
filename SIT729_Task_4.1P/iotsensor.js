const express = require('express');
const app = express();
const Sensor = require('./Model/sensor');
const mongoose = require('mongoose')

const url ="mongodb+srv://kaviuln1335:kaviuln@cluster0.hcagxgu.mongodb.net/?retryWrites=true&w=majority"

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
    console.log(doc);
    }).then(() => {
    mongoose.connection.close();
    });

