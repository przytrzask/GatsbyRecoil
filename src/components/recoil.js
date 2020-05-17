import React from 'react';
import { atom, useRecoilState, useRecoilValue, selector } from 'recoil';

const numState = atom({
  key: 'numState',
  default: 0,
});

const squareState = selector({
  key: 'square',
  get: ({ get }) => get(numState) ** 2,
});

export default () => {
  const [number, setNumber] = useRecoilState(numState);

  return (
    <React.Fragment>
      <h1>Recoil </h1>
      <button type="button" onClick={() => setNumber(number + 1)}>
        {number}
      </button>
      <Display />
    </React.Fragment>
  );
};

function Display() {
  const number = useRecoilValue(squareState);

  console.log(number);
  return <div>{number}</div>;
}
