import {useState, useEffect} from "react";


function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const storageValue = typeof window !== "undefined" && window.localStorage.getItem(key);

        if(storageValue) {
            return JSON.parse(storageValue);
        } else {
            return initialState
        }
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;
