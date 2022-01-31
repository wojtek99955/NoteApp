import styled from 'styled-components';

export const AppWrapper = styled.div`
  background-color: ${({ darkMode }) => darkMode ? "#111827" : "white"};
`

export const Container = styled.main`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`
