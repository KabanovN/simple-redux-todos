import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from './actions';
import { useRef } from 'react';

function App() {
    const todos = useSelector((state) => state);
    const dispatch = useDispatch();
    const ref = useRef(null);
    console.log(todos);
    return (
        <div className='container'>
            <h1 className='todo__title'>ToDo List:</h1>
            <ul className='todo__list'>
                {todos.map((todo) => {
                    return (
                        <li className='todo__item' key={todo.id}>
                            <span
                                style={
                                    todo.completed
                                        ? { textDecoration: 'line-through' }
                                        : null
                                }
                                onClick={() => dispatch(toggleTodo(todo.id))}>
                                {todo.title}
                            </span>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}>
                                x
                            </button>
                        </li>
                    );
                })}
            </ul>
            <form
                action='submit'
                onSubmit={(evt) => {
                    evt.preventDefault();
                    dispatch(addTodo(ref.current.value));
                    ref.current.value = '';
                }}>
                <input ref={ref} type='text' placeholder='new ToDo' />
                <button>Add ToDo</button>
            </form>
        </div>
    );
}

export default App;
