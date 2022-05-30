import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, removeTodo } from '../store/todos/todos-actions';
import { selectVisibleTodos } from '../store/todos/todos-selectors';
import { selectActiveFilter } from '../store/filters/filters-selectors';

const TodoList = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter);
    const todos = useSelector((state) =>
        selectVisibleTodos(state, activeFilter)
    );

    return (
        <ul className='todo__list'>
            {todos.map((todo) => {
                return (
                    <li className='todo__item' key={todo.id}>
                        <label>
                            <input
                                className='filled-in'
                                type='checkbox'
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo.id))}
                            />
                            <span
                                style={
                                    todo.completed
                                        ? { textDecoration: 'line-through' }
                                        : null
                                }>
                                {todo.title}
                            </span>
                        </label>
                        <i
                            className='material-icons secondary-content'
                            onClick={() => dispatch(removeTodo(todo.id))}>
                            delete
                        </i>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;
