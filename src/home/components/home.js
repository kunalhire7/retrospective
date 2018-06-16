import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Button, Select } from "antd";

import IntroductionHeader from "./introductionHeader";
import withAuthenticationLayout from "../../common/withAuthenticationLayout";

import { paths } from "../../common/constants";

const FormItem = Form.Item;
const Option = Select.Option;

class Home extends Component {

    constructor(props) {
        super(props);
        this.maxSections = 5;
        this.state = {
            noOfSections: 0
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.create(values);
            }
        });
    };

    getOptions = () => Array(this.maxSections).fill().map((_, i) => <Option key={i} value={i + 1}>{i + 1}</Option>);

    handleChange = (value) => {
        this.setState({
            noOfSections: value
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form
                onSubmit={this.handleSubmit}
                className="login-form"
            >
                <IntroductionHeader
                    title="Configure the sections for your dashboard!"
                    description="Welcome to Retrosepctive"
                />
                <FormItem>
                    {getFieldDecorator("sections", {
                        rules: [
                            {
                                required: true,
                                message: "Select no of sections to proceed."
                            }
                        ]
                    })(
                        <Select
                            size="large"
                            placeholder="Select number of sections"
                            onChange={this.handleChange}
                        >
                            { this.getOptions() }
                        </Select>
                    )}

                </FormItem>
                {
                    Array(this.state.noOfSections).fill().map((_, i) => <FormItem key={i}>
                    {getFieldDecorator(`section_${i + 1}`, {
                        rules: [
                            {
                                required: true,
                                message: "Section Name is required."
                            }
                        ]
                    })(
                        <Input
                            size="large"
                            placeholder={`Section - ${i + 1}`}
                        />
                    )}
                </FormItem>)
                }
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Create
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export const CreateDashboardForm = Form.create()(Home);
export default withAuthenticationLayout(CreateDashboardForm);
