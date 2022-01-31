import styled from 'styled-components';
import { MdDeleteForever } from "react-icons/md";


export const DeleteIcon = styled(MdDeleteForever)`
    cursor: pointer;
    opacity: 0;
    transition: opacity 300ms ease;
`

export const NoteContainer = styled.div`
    background-color: ${({ color }) => color};
    border-radius: 10px;
    padding: 1rem;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: pre-wrap;

  &:hover ${DeleteIcon}{
    opacity:1;
  }
  p{
      font-size: 1rem;
      align-self: flex-start;
      word-break: break-all;
  }
`

export const NoteFooter = styled.div`
      display: flex;
  align-items: center;
  justify-content: space-between;

    small{
        font-size:0.8rem;
    }
`
