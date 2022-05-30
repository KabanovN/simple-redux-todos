import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/filters/filters-actions';
import { selectActiveFilter } from '../store/filters/filters-selectors';

const Filter = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter);

    return (
        <div className='todo__filter'>
            <button
                className='btn btn-small btn-flat'
                onClick={() => dispatch(setFilter('all'))}
                style={{
                    backgroundColor:
                        activeFilter === 'all' ? '#26a69a' : 'inherit',
                }}>
                Все
            </button>
            <button
                className='btn btn-small btn-flat'
                onClick={() => dispatch(setFilter('active'))}
                style={{
                    backgroundColor:
                        activeFilter === 'active' ? '#26a69a' : 'inherit',
                }}>
                Активные
            </button>
            <button
                className='btn btn-small btn-flat'
                onClick={() => dispatch(setFilter('completed'))}
                style={{
                    backgroundColor:
                        activeFilter === 'completed' ? '#26a69a' : 'inherit',
                }}>
                Завершённые
            </button>
        </div>
    );
};

export default Filter;
