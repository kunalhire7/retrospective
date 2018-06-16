import React from 'react';

import { shallow } from 'enzyme';
import Icons from '../Icons'

describe('Icon test', () => {
    it('should render an icon', function () {
        const wrapper = shallow(<Icons name='cog'/>).dive();
        expect(wrapper.find('i').prop('className')).toContain('fa fa-cog');
    });

});
