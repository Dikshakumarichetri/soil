import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Smart Soil Monitoring System</h1>
      <h5>Group 43</h5>
      <h6>Anfernee Alviar (22886082)</h6>
      <h6>Melo Xue (23955182)</h6>
      <h6>Wei Dai (24076678)</h6>
      <h6>Manas Rawat (24004729)</h6>
      <Badge pill bg="info" className="my-3">Keywords: Smart Agriculture, Soil Monitoring, ESP32, AWS IoT, MQTT, Data Visualization</Badge>
      
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Abstract</Card.Title>
          <Card.Text>
            Our society's functioning heavily relies on visual information. Simultaneously, agriculture faces immense pressure to improve production efficiency. This report introduces a Smart Soil Monitoring System designed to address these issues. The system uses a 3-in-1 sensor to measure soil temperature, humidity, and pH levels, with data processing and transmission handled by an ESP32 microcontroller and AWS cloud services. It provides real-time data and a visualization interface, helping farmers and gardening enthusiasts optimize irrigation and fertilization decisions, improve crop yields, and reduce resource waste.
          </Card.Text>
        </Card.Body>
      </Card>

      <h2>1. Introduction</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Text>
            Farmers and home gardening enthusiasts often lack real-time information about soil conditions. This leads to suboptimal crop growth and inefficient resource use. With the increasing global demand for food, there is a pressing need for innovative agricultural production methods.
          </Card.Text>
        </Card.Body>
      </Card>

      <h2>2. Design</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Text>
            The system design encompasses both hardware and software components. On the hardware side, we employ a 3-in-1 sensor for soil parameter measurement, an ESP32 microcontroller for data processing, and a TTL to RS485 converter for communication.
          </Card.Text>
        </Card.Body>
      </Card>

      <h2>3. Hardware</h2>
      <ListGroup className="mb-4">
        <ListGroup.Item>1. 3-in-1 soil sensor: Measures soil temperature, humidity, and pH levels.</ListGroup.Item>
        <ListGroup.Item>2. ESP32 microcontroller: Acts as the central processing unit, supporting Wi-Fi connectivity.</ListGroup.Item>
        <ListGroup.Item>3. TTL to RS485 converter: Enables communication between the ESP32 and the sensor.</ListGroup.Item>
        <ListGroup.Item>4. Power supply (battery/adapter).</ListGroup.Item>
        <ListGroup.Item>5. Miscellaneous components (e.g., connecting wires).</ListGroup.Item>
      </ListGroup>

      <h2>4. Software</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Text>
            Software development utilizes technologies like Arduino IDE, AWS IoT Core, Amazon S3, and web development tools (HTML, CSS, JavaScript).
          </Card.Text>
        </Card.Body>
      </Card>

      <h2>5. Evaluation</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Text>
            The system underwent calibration and testing in a controlled environment. Test results showed improved accuracy in measurements.
          </Card.Text>
        </Card.Body>
      </Card>

      <h2>6. Conclusion</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Text>
            The Smart Soil Monitoring System successfully demonstrated the feasibility of enhancing agricultural practices by providing critical soil data.
          </Card.Text>
        </Card.Body>
      </Card>

      <h2>7. Future Work</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Text>
            Key areas for future improvements include sensor integration, user interface enhancements, AI implementation, and energy efficiency improvements.
          </Card.Text>
        </Card.Body>
      </Card>

      <h2>References</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Text>
            [Include your references here]
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Blog;
