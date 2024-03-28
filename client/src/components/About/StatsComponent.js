import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './StatsComponent.css'; // Import custom CSS file

const statsData = [
    { icon: 'fas fa-project-diagram', value: 230, label: 'Projects Done', color: '#007bff' },
    { icon: 'fas fa-users', value: 68, label: 'Clients Worldwide', color: '#28a745' },
    { icon: 'fas fa-truck', value: 16, label: 'Owned Vehicles', color: '#ffc107' },
    { icon: 'fas fa-users', value: 46, label: 'People In Team', color: '#dc3545' }
];

const StatsComponent = () => {
    return (
        <Container fluid className="stats-container">
            <Row className="justify-content-center">
                {statsData.map((stat, index) => (
                    <Col key={index} xs={12} sm={6} lg={3}>
                        <div className="chart" style={{ backgroundColor: stat.color }}>
                            <i className={stat.icon}></i>
                            <span className="percent">{stat.value}</span>
                            <p>{stat.label}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default StatsComponent;
