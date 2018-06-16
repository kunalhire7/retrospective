import React from "react";
import styled from "styled-components";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { paths } from "../../../common/constants";

const NavWrapper = styled.div`
    height: 100vh;

    .ant-menu {
        .ant-menu-item {
            margin: 0px;
            text-align: center;
            padding: 25px 0;
            border-bottom: 1px solid ${props => props.theme.lightBlue};
            height: 110px;
            padding-left: 0px !important;

            &:hover {
                IconStyled {
                    color: white;
                }
            }
        }
    }
    a {
        color: ${props => props.theme.lightBlue};
        &:hover {
            color: white;
        }
    }
`;

const IconStyled = styled.i`
    font-size: ${props => props.theme.navIconSize};
    display: block;
`;

const Text = styled.span`
    font-size: ${props => props.theme.baseFontSize};
    font-family: ${props => props.theme.baseFont};
`;
const MenuItem = styled.div`
    height: 130px;
`;
const Logo = styled.div`
    height: 50px;
    background: #1949a0;
    font-family: ${props => props.theme.baseFontBold};
    font-size: 21px;
    color: white;
    text-align: center;
    line-height: 50px;
`;

export default () => (
    <NavWrapper>
        <Logo>Retrospective</Logo>
        <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
                <Link to={paths.DASHBOARD}>
                    <IconStyled className="fa fa-industry" />
                    <Text>Dashboard</Text>
                </Link>
            </Menu.Item>
        </Menu>
    </NavWrapper>
);
