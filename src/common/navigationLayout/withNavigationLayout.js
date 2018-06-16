import React from 'react';
import HeaderLayout from './components/headerLayout';
import SidebarLayout from './components/sidebarLayout';
import styled from 'styled-components';
import { Layout } from 'antd';

const {Sider, Content, Footer} = Layout;

const Wrapper = styled.div`
    max-width: 100%;
    width: 100%;
    padding: 15px 0;
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
        width: 30px;
        padding-right: 10px;
        border-right: 1px solid ${props => props.theme.warmGrey};
        .anticon {
            margin-top: 17px;
        }
    }
`;

const withNavigationLayout = (WrappedComponent) => {

    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                collapsed: false,
            };
        }

        toggle = () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        };

        render() {
            return (
                <Layout className="withNavigationLayout">
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <SidebarLayout/>
                    </Sider>
                    <Layout>
                        <HeaderLayout
                            collapsed={this.state.collapsed}
                            toggleMenu={this.toggle}
                        />
                        <Content className='withNavigationLayout__content'>
                            <Wrapper>
                                <WrappedComponent {...this.props} />
                            </Wrapper>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Retrospective
                        </Footer>
                    </Layout>
                </Layout>
            );
        }
    };
};

export default withNavigationLayout;
