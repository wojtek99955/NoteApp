import styled from 'styled-components';

export const NewNote = styled.div`
  margin-bottom: 10px;
  background-color: ${({ color }) => color};
  padding:1rem;
  border-radius: 10px;

  textarea{
      border: none;
      resize: none;
      background-color: ${({ color }) => color};
      color: black;
      width: 100%;
      caret-color: black;
      outline: none;
      font-size: 1rem;
  }
`

export const NewNoteFooter = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;

  small{
      color: black;
  }

  button{
      background-color: #828282;
      border: none;
      border-radius: 15px;
      padding: 0.4rem 1rem;
      cursor: pointer;
      font-weight:500;
      color:white;
  }
`
export const Container = styled.div`
    position: relative;
`