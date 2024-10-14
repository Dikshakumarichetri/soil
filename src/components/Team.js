import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../App.css";

function Team() {
  const teamMembers = [
    {
      name: "Manas Rawat",
      role: "24004729",
      image: "https://via.placeholder.com/150",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Anfernee Alviar",
      role: "22886082",
      image: "https://via.placeholder.com/150",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: " Melo Xue",
      role: "23955182",
      image: "https://via.placeholder.com/150",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Wei Dai",
      role: "24076678",
      image: "https://via.placeholder.com/150",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    }
  ];

  return (
    <Container className="py-5 team-section">
      <Row className="our-team-box">
        <h2 className="text-center mb-4 color-white">Meet Our Team</h2>

        {/* Team Section */}
        <Col xs={12} md={8}>
          <Row>
            {teamMembers.map((member, index) => (
              <Col
                xs={12}
                md={6}
                key={index}
                className="mb-4"
              >
                <Card className={`h-100  p-3 text-center ${member.name === "Anfernee Alviar" || member.name === "Wei Dai" ? "move-down" : ""}`}>
                  <Card.Img variant="top" src={member.image} alt={member.name} className="team-img" />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.role}</Card.Text>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        
        {/* Description Section */}
        <Col xs={12} md={4} className="d-flex align-items-center content-right">
          <div>
            <h3>About Our Team</h3>
            <p>
              We are a passionate group of individuals dedicated to delivering high-quality products and services. 
              Each of our team members brings unique skills and experiences that help us innovate and excel in our industry. 
              Together, we aim to create lasting solutions for our customers.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
