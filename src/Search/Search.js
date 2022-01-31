import React, { useRef, useEffect, useContext } from 'react';
import { SearchContainer, SearchIcon } from './SearchStyles';
import { Context } from '../AppProvider';



const Search = () => {

    const ctx = useContext(Context);
    const inputRef = useRef();

    console.log("search" + ctx.showSearch)

    useEffect(() => {
        if (ctx.showSearch) {
            inputRef.current.focus();
        }
    }, [ctx.showSearch])
    return (
        <SearchContainer>
            <SearchIcon />
            <input
                ref={inputRef}
                onChange={(event) => ctx.setSearchText(event.target.value)}
                type="text"
                placeholder='wyszukaj notatkę...' />
        </SearchContainer>
    )
}

export default Search