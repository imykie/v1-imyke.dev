import { useState, useEffect } from 'react';

export default (initialValue: any, callback: (arg: any) => void) => {
  const [state, setState] = useState<any>(initialValue ?? null);
  useEffect(() => callback(state), [state]);

  return [state, setState];
};
