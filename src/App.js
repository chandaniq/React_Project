import React from 'react';  
import './App.css';  
import { Container, Row, Col } from 'reactstrap';
import Header from './Component/Header';
import Menus from './Component/Menus';
import Home from './Component/Home';
import AddCourse from './Component/AddCourse';
import AllCourses from './Component/AllCourses';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>  
                {/* Use JSX elements for the 'element' prop */}
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-course" element={<AllCourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
