import styled from 'styled-components';
import { media } from '../../styles/styledComponents';
/**
    @Deprecated
    We should no have components just to hold styles, will be removed in next version
    do not use this
 */
export const FromWrapper = styled.div`
    width: 100%;
    margin: auto;
    ${media.medium`
        max-width: 900px;
    `};
`;
export const FormContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    ${media.medium`
        display: flex;
        justify-content: space-between;
    `};
  
`;
export const Devider = styled.div`
    visibility: hidden;

    ${media.medium`
        visibility: visible;

        border-left: 1px solid ${props => props.theme.lightGrey};
        position: relative;
        width: 100px;
        margin-left: 5%;
        margin-bottom: 3%;
        &&:before{
            content: 'OR';
            background: #F0F2F5;
            position: absolute;
            left: -18px;
            padding: 20px 10px;
            top: 42%;
            color: ${props => props.theme.lightGrey};
        }
    `};
`;

export const DownLoadLink = styled.div`
    text-align: right;
    font-size: ${props => props.theme.baseFontSize};
    i{
        font-size: ${props => props.theme.baseFontHeadline};
        color: ${props => props.theme.brandBlue};
        margin-right: 5px;
        vertical-align: middle;
    }
    &:hover{
        text-decoration: underline;
    }
`;


export const UploadedUserList = styled.div`
    margin-top: 50px;
`;


// TODO remove it and change for IconLink
export const ManageLink = styled.div`
    margin: 20px 0px 30px 0px;
    font-size: ${props => props.theme.baseFontSize};
    font-family: ${props => props.theme.baseFont};

    display: block;
    text-align: right;
        span{
            display: inline-block;
            padding: 0px;
        }
    ${media.medium`
        margin: 20px 110px 30px 110px;
    `};
`;
