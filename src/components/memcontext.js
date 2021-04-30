import React, { useState } from 'react';

export const MemContext = React.createContext();

export function MemProvider({ memsym, children }) {
    const [, setX] = useState(0);

    const onUpdate = () => {
        setX(x => x > 0 ? 0 : 1);
    }

    return (
        <MemContext.Provider value={{memsym, onUpdate}}>
            {children}
        </MemContext.Provider>
    );
}