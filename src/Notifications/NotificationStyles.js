import styled from 'styled-components';
import { ErrorCircle } from '@styled-icons/boxicons-regular/ErrorCircle';
import { Close } from '@styled-icons/evaicons-solid/Close';

export const Container = styled.div`
display: flex;
align-items: center;
width:250px;
background-color: ${({ color }) => color};
gap:1rem;
padding: 0.4rem;
border-radius: 8px;
position:absolute;
right:0;
top: 10%;

    animation: ${({ addError, addNotification }) => addError || addNotification ? "showNotification 600ms, hide 600ms" : null};
    animation-fill-mode: forwards;
    animation-delay: 0s, 4s;
    top:10px;

    &:hover{
        animation-play-state: paused;
    }
    @keyframes showNotification{
                    0%{
            top:15px;
            opacity: 0;
        }
        100%{
            top:40px;
            opacity:1;
        }
    }
    @keyframes hide{
        0%{
            top:40px;
            opacity:1;
        }
        100%{
            top:15px;
            opacity:0;
        }
    }

    p{
        font-size: 1rem;
        color:white;
    }
`
export const ErrorIcon = styled(ErrorCircle)`
    width:2rem;
    color:white;
`
export const CloseIcon = styled(Close)`
    width:2rem;
    color:white;
    align-self: flex-start;
    cursor: pointer;
`