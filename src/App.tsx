import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  return (
    <Container >
      <Header />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Crimson Text", serif;
`
