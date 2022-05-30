import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import { rootReducer } from './root-reducer';
import { readState, writeState } from './local-storage';

export const configureStore = () => {
    const persistedStore = readState();

    const store = createStore(rootReducer, persistedStore);

    store.subscribe(
        //оптимизация загрузки с помощью lodash/throttle
        throttle(() => {
            writeState({
                todosReducer: store.getState().todosReducer,
            });
        }, 1000)
    );

    return store;
};
