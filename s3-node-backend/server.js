const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());  // To parse incoming JSON data

// API endpoint to receive data
app.post('/api/receive-data', (req, res) => {
    const sensorValue = req.body.sensor_value;

    console.log(`Received sensor data: ${sensorValue}`);

    // You can process the data (e.g., store it in a database)

    res.status(200).send("Data received successfully");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
