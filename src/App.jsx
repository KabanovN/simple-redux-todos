import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from './actions';
import { useRef } from 'react';

function App() {
    const todos = useSelector((state) => state);
    const dispatch = useDispatch();
    const ref = useRef(null);
    console.log(todos);
    return (
        <div className='container orange lighten-5 z-depth-3'>
            <h1 className='todo__title'>Список дел</h1>
            <form
                action='submit'
                onSubmit={(evt) => {
                    evt.preventDefault();
                    dispatch(addTodo(ref.current.value));
                    ref.current.value = '';
                }}>
                <input
                    id='input_text'
                    ref={ref}
                    type='text'
                    placeholder='Например, новая задача'
                />
                <button className='btn waves-light'>Добавить</button>
            </form>
            <ul className='todo__list'>
                {todos.map((todo) => {
                    return (
                        <li className='todo__item' key={todo.id} value={1}>
                            <label>
                                <input
                                    className='filled-in'
                                    type='checkbox'
                                    onClick={() =>
                                        dispatch(toggleTodo(todo.id))
                                    }
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
                                class='material-icons secondary-content'
                                onClick={() => dispatch(removeTodo(todo.id))}>
                                delete
                            </i>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
