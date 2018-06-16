import React from 'react';
import styled from "styled-components";
import { media } from '../styles/styledComponents';

export const FormStyle = styled.div`
    max-width: 100%;
    width: 100%;
    .ant-input,  .ant-select {
        font-family: ${props => props.theme.baseFont};
        color: ${props => props.theme.placeHolderColor};
        font-size: ${props => props.theme.baseFontSize};
        &:not(:first-child) {
            padding-left: 60px;
        }
       
    }
   
  
    .anticon {
        font-size: 20px;
        width: 30px;
        color: ${props => props.theme.placeHolderColor};
        &.anticon-cloud-upload{
            font-size: 70px;
            transform: rotateY(180deg);
            width: 70px;
            color: ${props => props.theme.lightGrey};
        }
    }
    .ant-upload-drag-container{
        color: ${props => props.theme.lightGrey};
            h2{
                color: ${props => props.theme.lightGrey};
                font-family: ${props => props.theme.baseFontBold};
                margin: 0px;
                padding: 0px;
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
                width: 28px;
                color: ${props => props.theme.placeHolderColor};
            }
        }
    }
    button {
        width: 100%;
        height: 50px;
        font-family: ${props => props.theme.headingFont};
        margin-top: 30px;
    }
    .ant-form-explain {
        margin-top: 5px;
        text-align: left;
        color: ${props => props.theme.warningRed};
    }

    .ant-select-dropdown-menu-item{
        padding: 20px;
        border-bottom: 1px solid ${props => props.theme.warmGrey};
        &:last-child{
            border-bottom: none;
        }
    }
`;
