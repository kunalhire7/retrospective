import React from 'react';
import { connect } from 'react-redux';

import withNavigationLayout from '../../common/navigationLayout/withNavigationLayout';
import * as actions from '../dashboardActions';
import { bindActionCreators } from 'redux';
import Dashboard from '../components/dashboard';

const mapStateToProps = state => {
    return {
        stories: state.dashboard.stories
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationLayout(Dashboard));