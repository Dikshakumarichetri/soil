const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const app = express();
const port = 3000;

app.use(bodyParser.json());  // Parse JSON request bodies

// AWS S3 Configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Replace with your AWS Access Key ID
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,// Replace with your AWS Secret Access Key
    region: 'ap-southeast-2' // Replace with your S3 bucket region
});

const bucketName = 'soil-bucket-aws-iot';  // Replace with your S3 bucket name
const FILE_KEY = 's3://soil-bucket-aws-iot//';  // Define the S3 key (file path)

// Variable to store the latest sensor data
let latestSensorData = {};

// POST API to receive data from Arduino and store it in S3
app.post('/api/receive-data', (req, res) => {
    const sensorValue = req.body.sensor_value;
    latestSensorData = req.body;

    console.log(`Received sensor data: ${sensorValue}`);

    // Create an S3 object key (file name)
    const timestamp = new Date().toISOString();
    const s3Key = `sensor_data_${timestamp}.json`;

    // Upload data to S3
    const params = {
        Bucket: bucketName,
        Key: FILE_KEY,  // File name
        Body: JSON.stringify(latestSensorData),  // Data to store in S3
        ContentType: 'application/json'
    };

    s3.upload(params, function(err, data) {
        if (err) {
            console.log("Error uploading data to S3", err);
            res.status(500).send("Error uploading data to S3");
        } else {
            console.log(`Successfully uploaded data to S3: ${data.Location}`);
            res.status(200).send("Data received and uploaded to S3 successfully");
        }
    });
});

// GET API to fetch the latest data from memory (for React frontend)
app.get('/api/get-latest-data', (req, res) => {
    res.json(latestSensorData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
