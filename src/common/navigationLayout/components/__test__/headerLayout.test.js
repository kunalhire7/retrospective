import React from 'react';
import { shallow } from 'enzyme';
import HeaderLayout from '../headerLayout';

describe("Header Layout", () => {
    let headerLayoutWrapper;
    const adminUser = {
        id: 1234,
        firstName: "John",
        lastName: "Smith"
    };

    beforeEach(() => {
        headerLayoutWrapper = shallow(<HeaderLayout />)
    });

    it("should render the name of the logged in user", () => {
        const userInfo = headerLayoutWrapper.find('#userInfo');
        expect(userInfo.render().text()).toEqual("Welcome!");
    }); 
});