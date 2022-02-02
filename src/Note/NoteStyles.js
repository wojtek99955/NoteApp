import styled from 'styled-components';
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineDoneOutline } from 'react-icons/md';


export const DeleteIcon = styled(MdDeleteForever)`
    cursor: pointer;
    opacity: 0;
    transition: opacity 300ms ease;
    margin-left:auto;
    margin-right:1rem;
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

export const DoneIcon = styled(MdOutlineDoneOutline)`
  font-size: 1rem;
  color: ${({ $done }) => $done ? "green" : "grey"};
  cursor: pointer;
  animation: ${({ $done }) => $done ? "600ms ease-in 0s 1 normal both running pulse" : null};

  @keyframes pulse{
    0%{
      transform: scale(1);
      opacity:0;
    }
    50%{
      transform: scale(1.3);
      opacity:1;
    }
    100%{
      transform: scale(1);
    }
  }
`
