import { createContext, useContext } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const state = {
        name: 'Larry',
        isLoggedIn: false
    }

    return (
        <AppContext.Provider value={ state }>
            { children }
        </AppContext.Provider>
    );
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { useAppContext, AppContextProvider };