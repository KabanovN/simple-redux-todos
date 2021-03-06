import { SET_FILTER } from './filters-const';

const filterReducer = (state = 'all', action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default filterReducer;
