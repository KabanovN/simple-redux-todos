export const readState = () => {
    //try-catch на случай, если у юзера отключена запись/чтение localStorage
    try {
        const loadedState = localStorage.getItem('state');

        if (loadedState === null) {
            return undefined;
        }

        return JSON.parse(loadedState);
    } catch (error) {
        return undefined;
    }
};

export const writeState = (state) => {
    try {
        const loadingState = JSON.stringify(state);

        localStorage.setItem('state', loadingState);
    } catch (error) {
        console.log(error);
    }
};
