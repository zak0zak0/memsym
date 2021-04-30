import React, { useState } from 'react';
import { MemContext } from '../memory-context';

export const MemProvider = ({memory, children }) => {
  const [state, setState] = useState(memory);
  const callback = () => {
    setState(x => x.copy())
  }
  state.onUpdate(callback);

  return <MemContext.Provider value={state}>
    {children}
  </MemContext.Provider>
}