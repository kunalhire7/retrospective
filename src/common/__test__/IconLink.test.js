import React from 'react';
import { shallow } from 'enzyme';
import IconLink from '../IconLink';
import { Link } from "react-router-dom";

describe('Icon link test', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<IconLink text='Manage News' icon='cog' to='/news'/>).dive()
    });

    it('should render an icon', function () {
        const icon = wrapper.find('#icon-link-icon');
        expect(icon.prop('className')).toEqual('fa fa-cog');
    });

    it('should render a link', function () {
        expect(wrapper.find(Link).exists()).toBe(true);
    });

    it('should render the properly path to the link', function () {
        const icon = wrapper.find(Link);
        expect(icon.prop('to')).toEqual('/news');
    });

    it('should render the link text', function () {
        expect(wrapper.find('#icon-link-text').html()).toContain('Manage News');
    });
});
