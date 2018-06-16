import { ACTIONS } from './dashboardActions';

const DEFAULT_STATE = {
    stories: []
};

const dashboardReducer = (state = DEFAULT_STATE, action) => {
    const actions = {
        [ ACTIONS.FETCH_STORIES ]: () => {
            return { ...state, stories: action.payload }
        }
    };

    if ( actions[ action.type ] ) {
        return actions[ action.type ]();
    }
    return state;
};

export default dashboardReducer;
