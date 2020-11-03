import { useRef, useEffect } from 'react';

export default (value: any) => {
  const ref = useRef<any>();
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
