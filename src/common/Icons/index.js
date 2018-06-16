import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  color: ${props => props.iconColor};
  font-size: ${props => props.iconSize}px;
`;

export default ({ name, size = 15, color = 'white' }) => (
    <Icon iconColor={color} iconSize={size} className={`fa fa-${name}`}/>
);
