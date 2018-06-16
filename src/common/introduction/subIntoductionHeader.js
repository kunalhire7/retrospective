import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 30px;
`;

const Heading = styled.h2`
    font-size: ${props => props.theme.baseFontHeadline};;
    font-family: ${props => props.theme.headingFont};
    color: ${props => props.theme.darkGrey};
    margin: 0px;
    letter-spacing:-1px;
    text-align: left;
    font-weight: 600;
    padding-bottom: 10px;
`;

const Description = styled.p`
    font-size: ${props => props.theme.darkGrey};
    padding: 0px;
    margin: 0px;
    font-family: ${props => props.theme.baseFont};
    text-align: left;
`;

export default props => (
    <Wrapper>
        <Heading>{props.title}</Heading>
        <Description>{props.description}</Description>
    </Wrapper>
)
