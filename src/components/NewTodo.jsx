import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todos/todos-actions';
import { selectAllTodos } from '../store/todos/todos-selectors';

const NewTodo = () => {
    const dispatch = useDispatch(selectAllTodos);
    const [value, setValue] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(addTodo(evt.target.title.value));
        setValue('');
        evt.target.reset();
    };

    return (
        <form action='submit' onSubmit={handleSubmit}>
            <input
                id='input_text'
                name='title'
                type='text'
                placeholder='Например, новая задача'
                value={value}
                onChange={(evt) => setValue(evt.target.value)}
            />
            <button className='btn waves-light' disabled={!value}>
                Добавить
            </button>
        </form>
    );
};

export default NewTodo;
