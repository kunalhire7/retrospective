/* @flow */
import React from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import { media } from '../../styles/styledComponents';

const ModalStyled = styled(Modal)`
    text-align: justify;
    .ant-modal-footer{
        border: 0;
        text-align: center;
        padding: 40px 0;
    }
    .ant-modal-body{
      padding: 20px;
    }
`;

export default ({ visible, isLoading, onCancel, title, children }) => (
    <ModalStyled
        visible={visible}
        onCancel={onCancel}
        title={title}
        destroyOnClose={true}
        footer={null}
        width={700}>
        {children}
    </ModalStyled>
);

