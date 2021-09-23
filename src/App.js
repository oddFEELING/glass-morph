import React from 'react';
import * as S from './AppStyle.js';
import cardContent from './Data/Data';

function App() {
  return (
    <S.Container>
      {cardContent.map((data) => {
        return (
          <S.Card>
            <h1>{data.key}</h1>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <a href={data.link}>{data.link}</a>
          </S.Card>
        );
      })}
    </S.Container>
  );
}

export default App;
