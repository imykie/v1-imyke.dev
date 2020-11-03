import { useState, useEffect } from 'react';

export default (initialValue: any, callback: (arg: any) => void) => {
  const [state, setState] = useState<any>(initialValue ?? null);
  useEffect(() => callback(state), [state]);

  return [state, setState];
};

// const Parent = () => {
//   const myRef = useRef();
//   return <Child ref={myRef} />;
// }

// const Child = React.forwardRef((props, ref) => {
//   const [myState, setMyState] = useState('This is my state!');
//   useImperativeHandle(ref, () => ({getMyState: () => {return myState}}), [myState]);
// })

// // you should be able to get myState in the Parent component by calling:
// myRef.current.getMyState();
