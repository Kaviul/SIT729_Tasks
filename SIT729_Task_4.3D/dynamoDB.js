var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIA5YFH3PY2PC264FFV", 
    "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        "ID": 2, "Name": "heat_sensor", "Address": "120 Elgar Road",
        "T": Date.now(), "Temperature": "32C"
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