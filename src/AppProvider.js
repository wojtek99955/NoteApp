import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext({})

function AppProvider({ children }) {

    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const [searchText, setSearchText] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showTextarea, setShowTextarea] = useState(false);

    return <Context.Provider
        value={{
            notes,
            setNotes,
            searchText,
            setSearchText,
            showSearch,
            setShowSearch,
            showTextarea,
            setShowTextarea,
            darkMode,
            setDarkMode
        }}>
        {children}
    </Context.Provider>;
}

export default AppProvider;
