import React from 'react';
import { shallow } from 'enzyme';
import withNavigationLayout from '../withNavigationLayout';

describe("With Navigation Layout", () => {
    let wrapper;

    beforeEach(() => {
        const MyComponent = props => <div id="myComponent">Hi!!</div>;
        const WithNavigationComponent = withNavigationLayout(MyComponent);
        wrapper = shallow(
            <WithNavigationComponent />
          );
    });

    it("should call the HOC with wrapped component", () => {

        expect(wrapper.find("MyComponent")).toBeDefined();
    });
});