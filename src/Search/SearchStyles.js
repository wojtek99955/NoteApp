import styled from 'styled-components';
import { MdSearch } from 'react-icons/md'

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: rgb(233, 233, 233);
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;

  input{
    border: none;
    background-color: rgb(233, 233, 233);
    width:100%;

    &:focus{
        outline: none;
    }
  }

`
export const SearchIcon = styled(MdSearch)`
    font-size:1.5rem;
    margin-right: 0.5rem;
`