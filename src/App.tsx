import React from 'react';
//styling
import {GlobalStyle, Wrapper} from './App.styles'

const App: React.FC =() => {
  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
      <h1>Quiz</h1>
      <p>testing</p>
      </Wrapper>
    </div>
  );
}

export default App;
