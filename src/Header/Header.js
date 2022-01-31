import { Context } from '../AppProvider';
import { useContext } from 'react';
import { HeaderContainer, BtnsContainer, DayMode, NightMode, ToggleContainer, SearchIconContainer, SearchIcon, AddIcon } from './HeaderStyles';

const Header = () => {

    const ctx = useContext(Context);

    const handleShowTextarea = () => {
        ctx.setShowTextarea((prev) => !prev);
    }

    const handleShowSearch = () => ctx.setShowSearch(!ctx.showSearch);

    const handleToggleDarkMode = () => ctx.setDarkMode((prev) => !prev);

    return (
        <HeaderContainer darkMode={ctx.darkMode}>
            <h1>Notatki</h1>
            <BtnsContainer>
                <ToggleContainer
                    onClick={handleToggleDarkMode}
                >
                    {ctx.darkMode ? (
                        <DayMode />
                    ) : (
                        <NightMode />
                    )}
                </ToggleContainer>
                <SearchIconContainer onClick={handleShowSearch}>
                    <SearchIcon darkMode={ctx.darkMode} />
                </SearchIconContainer>
                <AddIcon onClick={handleShowTextarea} darkMode={ctx.darkMode} />
            </BtnsContainer>
        </HeaderContainer>
    );
};

export default Header;
