import React from 'react';
import styled from 'styled-components';
import Icons from '../Icons';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  font-family: ${props => props.theme.baseFontBold};
  line-height: ${props => props.theme.baseFontHeadline};
  cursor: pointer;
  text-align: center;
  text-decoration: none;

color: ${props =>
    (props.styles === 'primary' && props.theme.white) ||
    (props.styles === 'warning' && props.theme.white) ||
    (props.styles === 'secondary' && props.theme.darkGrey) ||
    (props.styles === 'inactive' && props.theme.white)};
  background-color: ${props =>
    (props.styles === 'primary' && props.theme.brandBlue) ||
    (props.styles === 'warning' && props.theme.warningRed) ||
    (props.styles === 'secondary' && props.theme.white) ||
    (props.styles === 'inactive' && props.theme.lightGrey)};
  &:hover {
    color: ${props =>
    (props.styles === 'primary' && props.theme.white) ||
    (props.styles === 'secondary' && props.theme.darkGrey) ||
    (props.styles === 'inactive' && props.theme.white)};
    background-color: ${props =>
    (props.styles === 'primary' && props.theme.brandLightBlue) ||
    (props.styles === 'warning' && props.theme.warningRedHover) ||
    (props.styles === 'secondary' && props.theme.warmGrey) ||
    (props.styles === 'inactive' && props.theme.warmGrey)};
  }
  i {
    padding: 5px 2px;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const ButtonLG = Button.extend`
  text-transform: capitalize;
  padding: 9px;
  font-size: ${props => props.theme.baseFontHeadline};
  margin: 0;
  height: 50px;
  width: 100%;
  border-radius: 10px;
`;

const ButtonSM = Button.extend`
  border-radius: 6px;
  font-size: ${props => props.theme.baseFontSize};;
`;

export default ({ styles = 'primary', buttonType, size = 'lg', children, onClick, icon, iconSize = 12 } = {}) => {
    const ButtonStyled = {
        lg: ButtonLG,
        sm: ButtonSM
    }[ size ];

    if (!ButtonStyled) {
        return null;
    }

    return (
        <ButtonStyled
            onClick={onClick}
            styles={styles}
            type={buttonType}
        >
            {
                !!icon && <Icons name={icon} size={iconSize}/>
            }
            {children}
        </ButtonStyled>
    );
};

