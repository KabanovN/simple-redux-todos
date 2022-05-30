import Filter from './components/Filter';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className='container orange lighten-5 z-depth-3'>
            <h1 className='todo__title'>Список дел</h1>
            <NewTodo />
            <Filter />
            <TodoList />
        </div>
    );
}

export default App;
