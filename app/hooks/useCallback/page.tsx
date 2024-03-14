"use client"
import React, { useCallback, useState } from 'react';

// React.memo
// コンポーネント自体をメモ化する
// useCallback
// 関数をメモ化する

// eslint-disable-next-line react/display-name
const ChildComponent1 = React.memo(({ onClick }: {onClick:()=> void}) => {
  console.log('ChildComponent1が再レンダリングされました');
	return (
		<button onClick={onClick}>Click Me</button>
	)
});

// eslint-disable-next-line react/display-name
const ChildComponent2 = React.memo(({ onClick }: {onClick:()=> void}) => {
  console.log('ChildComponent2が再レンダリングされました');
	return (
		<button onClick={onClick}>Click Me</button>
	)
});


const ParentComponent = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
  const increment1 = useCallback(() => {
    setCount1(count1 + 1);
  },[count1]);
  const increment2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <>
      <div>Count1: {count1}</div>
			<ChildComponent1 onClick={increment1} />
			<div>Count2: {count2}</div>
      <ChildComponent2 onClick={increment2} />
    </>
  );
};

export default ParentComponent;