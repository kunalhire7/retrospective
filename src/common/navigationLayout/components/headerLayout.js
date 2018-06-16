import React from "react";
import { Row, Col, Layout, Icon } from "antd";
import styled from "styled-components";
import { pathOr } from 'ramda';
const { Header } = Layout;

const HeaderWrapper = styled.div`
    .ant-layout-header {
        height: ${props => props.theme.headerHeight};
        line-height: ${props => props.theme.headerHeight};
        padding: 0 20px;
    }
`;
const IconStyled = styled.i`
    font-size: ${props => props.theme.navIconSize};
    line-height: ${props => props.theme.headerHeight};
    cursor: pointer;
`;

const UesrInfo = styled.div`
    border-right: 1px solid ${props => props.theme.warmGrey};
    padding-right: 20px;
    margin-right: 20px;
    text-align: right;
`;

export default props => {
    return <HeaderWrapper>
        <Header style={{ background: "#fff" }}>
            <Row>
                <Col span={14}>
                    <IconStyled className="fa fa-bars" />
                </Col>
                <Col span={10}>
                    <Row>
                        <Col span="22">
                            <UesrInfo id="userInfo">Welcome!</UesrInfo>
                        </Col>
                        <Col span="2" align="center">
                            <IconStyled className="fa fa-power-off " />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    </HeaderWrapper>
};
