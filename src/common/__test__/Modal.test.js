import React from 'react';
import { shallow } from 'enzyme';
import CustomModal from '../Modal/Modal';

describe('Modal test', () => {

    it('should mount modal', function () {
        const wrapper = shallow(<CustomModal visible={true}>content</CustomModal>);
        expect(wrapper).toHaveLength(1);
    });
});
