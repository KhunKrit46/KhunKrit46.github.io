import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const projects = [
    { title: 'UML Mentor Project', description: 'Used ReactFlow to help students generate UML diagrams.' },
    { title: 'Naive Bayesian Salary Prediction', description: 'Implemented a salary prediction model using Python\'s Variable Elimination.' },
    { title: 'BudgetGuru: AI-powered budgeting app', description: 'Built a neural network to classify expenses, with a Flask-based full-stack app.' },
    { title: 'Pokemon Battle Game', description: 'Collaborative Java app using Google Cloud APIs for text-to-speech.' }
  ];

  return (
    <div className="app">
      <motion.header className="header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <h1>👋 Hi, I'm Krit Kasikpan!</h1>
        <p>Computer Science and Applied Statistics at the University of Toronto</p>
        <p>Specializing in AI and data-driven applications</p>
      </motion.header>

      {/* About Me Section */}
      <Container className="mt-5">
        <h2 className="section-title text-center">About Me</h2>
        <p className="text-center">
          I’m a passionate software engineer with a strong foundation in web applications and machine learning models.
          My focus is on AI and financial applications, streamlining processes, and finding solutions to complex problems.
        </p>
      </Container>

      {/* Skills Section */}
      <Container className="mt-5">
        <h2 className="section-title text-center">Technical Skills 🔧</h2>
        <Row>
          <Col md={6}>
            <ul className="list-group skills-list">
              <li className="list-group-item bg-light text-dark"><strong>Languages:</strong> Python, Java, C/C++, JavaScript, PHP, R, HTML/CSS</li>
              <li className="list-group-item bg-light text-dark"><strong>Frameworks:</strong> React, Node.js, Next.js, Flask</li>
            </ul>
          </Col>
          <Col md={6}>
            <ul className="list-group skills-list">
              <li className="list-group-item bg-light text-dark"><strong>Databases:</strong> MongoDB, Oracle SQL, PostgreSQL, MySQL</li>
              <li className="list-group-item bg-light text-dark"><strong>Tools:</strong> Git, Docker, Heroku, GCP</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <Container className="mt-5">
        <h2 className="section-title text-center">Key Projects 📚</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="project-card" as={motion.div} whileHover={{ scale: 1.05 }}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Contact Section */}
      <Container className="mt-5 text-center">
        <h2 className="section-title">Connect with Me 📬</h2>
        <div className="social-links">
          <Button variant="primary" className="m-2" href="https://www.linkedin.com/in/krit-kasikpan">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Button>
          <Button variant="secondary" className="m-2" href="mailto:krit.kasikpan@mail.utoronto.ca">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </Button>
        </div>
      </Container>

      {/* Footer */}
      <motion.footer className="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <p>I'm always open to collaborations in AI and software engineering. Let’s connect! 🌍</p>
      </motion.footer>
    </div>
  );
}

export default App;
