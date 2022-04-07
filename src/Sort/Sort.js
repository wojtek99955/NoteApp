import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../AppProvider";
import {
  Container,
  Box,
  BtnsContainer,
  DownIcon,
  AllIcon,
  DoneIcon,
  ExIcon,
} from "./SortStyles";

function Sort() {
  const boxRef = useRef(null);

  const ctx = useContext(Context);

  const handleShowDone = () => {
    const filtered = ctx.notes.filter((note) => note.done === true);
    ctx.setFiltered(filtered);
  };

  const showAll = () => {
    ctx.setFiltered(ctx.notes);
  };

  const handleNotDone = () => {
    const filtered = ctx.notes.filter((note) => note.done === false);
    ctx.setFiltered(filtered);
  };

  const [showButtons, setShowButtons] = useState(false);
  const handleShowButtons = (e) => {
    setShowButtons((prev) => !prev);
    e.stopPropagation();
  };

  const handleClickOutside = (e) => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {
      setShowButtons(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showButtons]);

  return (
    <Container>
      <DownIcon onClick={handleShowButtons} dark={ctx.darkMode} />
      {showButtons ? (
        <Box ref={boxRef} showButtons={showButtons}>
          <BtnsContainer>
            <button onClick={showAll}>
              <AllIcon /> Wszystkie
            </button>
            <button onClick={handleShowDone}>
              <DoneIcon />
              Zrobione
            </button>
            <button onClick={handleNotDone}>
              <ExIcon /> Do zrobienia
            </button>
          </BtnsContainer>
        </Box>
      ) : null}
    </Container>
  );
}

export default Sort;
