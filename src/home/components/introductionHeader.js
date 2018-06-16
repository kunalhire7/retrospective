import React from 'react';
import styled from "styled-components";

const Heading = styled.h2`
    font-size: 32px;
    font-family: ${props => props.theme.headingFont};
    color: ${props => props.theme.warmGrey};
    margin: 0px;
    padding-bottom: 20px;
    letter-spacing:-1px;
`;

const Description = styled.p`
    color: ${props => props.theme.warmGrey};
    padding: 0px;
    margin: 0px;
    font-family: ${props => props.theme.headingFont};

`;

export default props => (
    <div>
        <Description>{props.description}</Description>
        <Heading>{props.title}</Heading>
    </div>
)
