import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './todos-const';

let initialId = 0;

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: ++initialId,
                    title: action.title,
                    completed: false,
                },
            ];
        case REMOVE_TODO:
            return state.filter((item) => item.id !== action.id);
        case TOGGLE_TODO:
            return state.map((item) =>
                item.id === action.id
                    ? { ...item, completed: !item.completed }
                    : item
            );
        default:
            return state;
    }
};

export default todosReducer;
