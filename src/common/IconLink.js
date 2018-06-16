import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Span = styled.span`
 a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
 }
`;
const IconStyled = styled.i`
    font-size: 15px;
    display: block;
    margin-right: 5px;
    margin-top: 3px;
`;

const Text = styled.span`
    font-size: ${props => props.theme.baseFontSize};
    font-family: ${props => props.theme.baseFont};
    position: relative;
    ::after {
        content: '';
        border-bottom: 1px solid ${props => props.theme.lightBlue};
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
`;

export default ({to, text, icon}) => (
    <Span>
        <Link to={to}>
            <IconStyled id='icon-link-icon' className={`fa fa-${icon}`}/>
            <Text id='icon-link-text'>{text}</Text>
        </Link>
    </Span>
)
