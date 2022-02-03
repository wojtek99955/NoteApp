import styled from 'styled-components';
import { GridAlt } from '@styled-icons/boxicons-solid/GridAlt';
import { TableRows } from '@styled-icons/material-sharp/TableRows';

export const Wrapper = styled.div`

`

export const ViewWrapper = styled.div`
text-align: end;
`

export const NoteListWrapper = styled.div`

  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 5rem;
  display: ${({ view }) => view ? "flex" : "grid"};
  flex-direction: ${({ view }) => view ? "column" : null};
  max-height: 500px;
  overflow-y: scroll;
  position:relative;
  z-index:1;
`

export const StyledGridIcon = styled(GridAlt)`
    width:2rem;
    color: ${({ darkMode }) => darkMode ? "white" : "black"};
    cursor: pointer;
`

export const StyledRowsIcon = styled(TableRows)`
    width:2rem;
    color: ${({ darkMode }) => darkMode ? "white" : "black"};
    cursor: pointer;
`

export const SortContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`