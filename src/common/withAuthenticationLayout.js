import React from "react";
import styled from "styled-components";
import {Col, Row} from "antd";

import {media} from "../styles/styledComponents";
import IconImage from "../assets/background.png";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    text-align: center;
    font-family: ${props => props.theme.baseFont};
    ${media.medium`
    padding: 50px;
`};
    ${media.large`
   padding: 100px;
`};
`;

const FormWrapper = styled.div`
    max-width: 100%;
    width: 100%;
    .ant-input {
        font-family: ${props => props.theme.baseFont};
        color: ${props => props.theme.placeHolderColor};
        border: 1px solid ${props => props.theme.warmGrey};
        font-size: ${props => props.theme.baseFontSize};
        &:not(:first-child) {
            padding-left: 60px;
        }
    }
    .ant-input-prefix {
        height: 48px;
        width: 35px;
        padding-right: 10px;
        border-right: 1px solid ${props => props.theme.warmGrey};
        .anticon {
            margin-top: 15px;
            &.anticon-lock {
                font-size: 20px;
                width: 15px;
                color: ${props => props.theme.placeHolderColor};
            }
            &.anticon-mail {
                font-size: 18px;
                width: 15px;
                color: ${props => props.theme.placeHolderColor};
            }
        }
    }

    ${media.medium`
    max-width:350px;
`};
    ${media.xlarge`
margin-left: 50px;
margin-top: 50px;

`};
    button {
        width: 100%;
        height: 50px;
        font-family: ${props => props.theme.headingFont};
    }
    .ant-form-explain {
        margin-top: 5px;
        text-align: left;
        color: ${props => props.theme.warningRed};
    }
`;

const ImageWrapper = styled.div`
    display: none;
    ${media.medium`
    display: block;
    width: 100%;
    max-width: 350px;
`};
    ${media.large` 
    max-width: 400px;
`};
    ${media.xlarge` 
    max-width: 600px;
`};
`;
const ChatIcon = styled.img.attrs({
    src: IconImage,
    alt: "MyStaffAdmin"
})`
    max-width: 100%;
`;


const withAuthenticationLayout = WrappedComponent => {
    return class extends React.Component {
        render() {
            return (
                <Wrapper>
                    <FormWrapper>
                        <Row>
                            <Col>
                                <WrappedComponent {...this.props} />
                            </Col>
                        </Row>
                    </FormWrapper>
                    <ImageWrapper>
                        <ChatIcon/>
                    </ImageWrapper>
                </Wrapper>
            );
        }
    };
};

export default withAuthenticationLayout;
