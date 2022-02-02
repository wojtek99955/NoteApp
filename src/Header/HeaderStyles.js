import styled from 'styled-components';
import { PlusCircleFill } from '@styled-icons/bootstrap/PlusCircleFill';
import { MdSearch } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";


export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h1{
        color: ${({ $dark }) => $dark ? "white" : "black"};
    }
`

export const BtnsContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const DayMode = styled(WiDaySunny)`
    font-size:1.2rem;
    color:white;
`
export const NightMode = styled(WiMoonAltWaningCrescent5)`
    font-size:1.2rem;
`

export const ToggleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const SearchIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const SearchIcon = styled(MdSearch)`
    font-size: 1.2rem;
    color: ${({ $dark }) => $dark ? "white" : "black"};
`

export const AddIcon = styled(PlusCircleFill)`
width: 2rem;
color: ${({ $dark }) => $dark ? "white" : "black"};
cursor: pointer;
`