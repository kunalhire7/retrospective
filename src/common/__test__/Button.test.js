import React from 'react';
import { shallow } from 'enzyme/build/index';

import Button from '../Button/Button';
import Icons from '../Icons';

describe('Buttons test', () => {

    it('should render a button with delete written on', function () {
        const wrapper = shallow(<Button>Delete</Button>).dive();
        expect(wrapper.html()).toContain('Delete');
    });

    it('should render an button with icon and text', function () {
        const wrapper = shallow(<Button icon='cog'>With Icon</Button>).dive();
        expect(wrapper.find(Icons)).toHaveLength(1);
        expect(wrapper.html()).toContain('With Icon');
    });

    it('should not render if the size is not avaliable', function () {
        const wrapper = shallow(<Button icon='cog' size='ERROR'>With Icon</Button>);
        expect(wrapper.type()).toBeNull();
    });

    it('should render a large button', function () {
        const wrapper = shallow(<Button size='lg'>Big</Button>);
        expect(wrapper.type()).toBeTruthy();
    });

    it('should render a small button', function () {
        const wrapper = shallow(<Button size='sm'>Small</Button>);
        expect(wrapper.type()).toBeTruthy();
    });
});
