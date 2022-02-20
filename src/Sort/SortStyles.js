import styled from 'styled-components';
import { Notes } from '@styled-icons/material-sharp/Notes';
import { Done } from '@styled-icons/material-outlined/Done';
import { Cross } from '@styled-icons/entypo/Cross';
import { FaSortDown } from 'react-icons/fa';

export const Container = styled.div`
    position:relative;
    z-index: 2;
    button{
        display: flex;
        border: none;
        background: none;
        cursor: pointer;
        padding:0.5rem;
        width:100%;
        align-items: center;
        gap:.5rem;
        white-space: nowrap;
        
        &:not(:last-of-type){
            border-bottom:1px solid rgba(0, 0, 0, 0.3);
        }
        &:first-child{
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        &:last-child{
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        &:hover{
            background: #e8f4fc;
        }
    }
`


export const Box = styled.div`
    display: inline-block;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    position:absolute;
    animation: ${({ showButtons }) => showButtons ? "showHide 400ms" : null};
    animation-fill-mode: forwards;
    top:10px;
    background: rgba(255,255,255,0.8);

    @keyframes showHide{
        0%{
            top:15px;
            opacity: 0;
        }
        100%{
            top:40px;
            opacity:1;
        }
    }
`
export const BtnsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


export const DownIcon = styled(FaSortDown)`
    font-size: 2rem;
    color:${({ dark }) => dark ? "white" : "black"};
    display: block;
    cursor: pointer;
    margin-bottom: .5rem;
    position: relative;
    z-index:3;
`

export const AllIcon = styled(Notes)`
    width: .9rem;
    color:black;
`

export const DoneIcon = styled(Done)`
    width:1rem;
    color:black;
`

export const ExIcon = styled(Cross)`
    width: 1rem;
    color:black;
`