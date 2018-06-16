import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button/Button';

const Wrapper = styled.div`
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Text = styled.p`
  color: ${props => props.theme.darkGrey};
  font-size: ${props => props.theme.darkGrey};;
  margin: auto;
  font-family: ${props => props.theme.baseFont};
  padding-top: 30px;
`;

const Icon = styled.i`
  color: ${props => props.theme.warningRed};
  font-size: 100px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width:60%;
    margin: 40px auto 0 auto;
    button{
        margin-right: 30px;
        &:last-child{
            margin-right: 0px;
        }
    }
`;
const notificationModal = 'notificationModal';
const Notification = (props) => (
    <Wrapper>
        <Icon className="fa fa-warning"/>
        <Text className="notification-text">{props.children}</Text>
        <ButtonWrapper>
            <Button
                id="primaryButton"
                styles="primary"
                onClick={() => props.primaryAction()}
            >
                {props.primaryActionName}
            </Button>
            <Button
                id="secondaryButton"
                styles="secondary"
                onClick={() => props.secondaryAction()}
            >
                {props.secondaryActionName}
            </Button>
        </ButtonWrapper>
    </Wrapper>
);

export default Notification;
