import { useState, useEffect, useMemo, useContext, createContext } from 'react';

//Context
export const AppContext = createContext({});

//Provider
export const AppContextProvider = ({ children }) => {
    const [variableState, setVariableState] = useState({});

    useEffect(() => {
    }, []);

    const values = useMemo(() => (
        {
            variableState,
            setVariableState,
        }),
        [variableState]);

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("Data need to be inside the context")
    }

    return context;
}

export default useAppContext;

// 