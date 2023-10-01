// Import necessary libraries and components
// import * as Icon from "react-bootstrap-icons"
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import TwoBarCharts from "./TwoBarCharts";
import LineChartComponent from './LineChartComponent';


const AdminDashboard: React.FC = () => {
  return (
    <Container className="component-margin-top">
        <Row>
            <div className='d-flex mb-4 justify-content-between'>
                <h4>Welcome Louis!</h4>
                <div>Home<span className='text-muted'>/Admin</span></div>
            </div>
        </Row>
        <Row>
        <Col sm={6} md={3}>
            <div className="d-flex justify-content-between align-items-center px-3 py-2 content_bg">
                <ul>
                    <li className="text-start">Application Window</li>
                    <li className="text-start">Range here</li>
                </ul>
                <div>
                    <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
            </Col>
            <Col sm={6} md={3}>
            <div className="d-flex justify-content-between align-items-center px-3 py-2 content_bg">
                <ul>
                    <li className="text-start">Total Applications</li>
                    <li className="text-start"><strong>4059</strong></li>
                </ul>
                <div>
                    <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
            </Col>
            <Col sm={6} md={3}>
            <div className="d-flex justify-content-between align-items-center px-3 py-2 content_bg">
                <ul>
                    <li className="text-start">Total Valid Applications</li>
                    <li className="text-start"><strong>300</strong></li>
                </ul>
                <div>
                    <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
            </Col>
            <Col sm={6} md={3}>
            <div className="d-flex justify-content-between align-items-center px-3 py-2 content_bg">
                <ul>
                    <li className="text-start">Total Enrolled</li>
                    <li className="text-start"><strong>4059</strong></li>
                </ul>
                <div>
                    <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
            </Col>
        </Row>

        <Row className="my-5">
            <Col sm={12} md={6} className="content_bg">
            <h5 className="my-3">Gender Demographics</h5>
            <div className="chart-container">
            <TwoBarCharts />
          </div>
            </Col>
            <Col sm={12} md={6} className="content_bg">
            <h5 className="my-3">Total Enrolled by Month</h5>
            <div className="chart-container">
                <LineChartComponent/>
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default AdminDashboard;
