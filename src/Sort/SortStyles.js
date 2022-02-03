import styled from 'styled-components';
import { TiThSmall } from 'react-icons/ti';
import { MdDoneAll } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
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
        gap:.2rem;
        white-space: nowrap;
        
        &:not(:last-of-type){
            border-bottom:1px solid rgba(0, 0, 0, 0.3);
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
    top:10px;
    background: rgba(255,255,255,0.8);


`
export const BtnsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


export const DownIcon = styled(FaSortDown)`
    font-size: 2rem;
    color:black;
    display: block;
    cursor: pointer;
    margin-bottom: .5rem;
`

export const AllIcon = styled(TiThSmall)`
    font-size: .9rem;
    color:black;
`

export const DoneIcon = styled(MdDoneAll)`
    font-size: .9rem;
    color:black;
`

export const ExIcon = styled(ImCross)`
    font-size: 0.8rem;
    color:black;
`