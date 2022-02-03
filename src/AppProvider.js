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
    const [color, setColor] = useState("#E9E9E9");
    const [darkMode, setDarkMode] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showTextarea, setShowTextarea] = useState(false);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        setFiltered([...notes])
    }, [notes]);

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
            color,
            setColor,
            darkMode,
            setDarkMode,
            filtered,
            setFiltered,
        }}>
        {children}
    </Context.Provider>;
}

export default AppProvider;
