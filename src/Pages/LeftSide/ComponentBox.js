import React from 'react';

const ComponentBox = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        width: 'calc(100% - 16px)', // Adapt the width based on the space left
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};

export default ComponentBox;