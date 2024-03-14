
"use client"

import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

export default function Page() {
	
	const initialState: CounterState = { count: 0 };
	const reducer = (state: CounterState, action: CounterAction):CounterState => {
		switch (action.type) {
			case 'increment':
				return { count: state.count + 1 };
			case 'decrement':
				return { count: state.count - 1 };
			case 'reset':
				return { count: 0 };
			default:
				throw new Error('未定義のアクション');
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
		</>
	)
}