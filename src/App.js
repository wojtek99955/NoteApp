import React, { useContext } from "react";
import GlobalStyles from './GlobalStyles';
import NoteList from "./NoteList/NoteList";
import Search from "./Search/Search";
import Header from "./Header/Header";
import AddNote from "./AddNote/AddNote";
import { AppWrapper, Container } from './AppStyles';
import { Context } from "./AppProvider";

export default function App() {

  const ctx = useContext(Context);

  return (
    <>
      <GlobalStyles darkMode={ctx.darkMode} />
      <AppWrapper darkMode={ctx.darkMode}>
        <Container>
          <Header />
          {ctx.showSearch ?
            <Search /> : null
          }
          {ctx.showTextarea ?
            <AddNote /> : null
          }
          <NoteList />
        </Container>
      </AppWrapper>
    </>
  );
}
