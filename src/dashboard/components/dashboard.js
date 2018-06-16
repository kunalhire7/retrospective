import React from 'react';
import { Card, Col, Row } from 'antd';

export default class Dashboard extends React.Component {
    render() {
        return <Row gutter={16}>
            <Col span={8}>
                <Card title="What went well??" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
                <Card title="What can be improved??" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
                <Card title="Action items" bordered={false}>Card content</Card>
            </Col>
        </Row>
    }
}