import React, { useContext, useState } from 'react';
import { AppContext } from './ContextProvider';

const Toggle = () => {
  const value = useContext(AppContext);
  console.log(value);

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => value.setterFn(!value.state)}>Toggle</button>

      <div style={value.ContextStyle}>
        <p>This is made by kalvium</p>
      </div>
    </div>
  );
  return <h4>this is toggle</h4>;
};

export default Toggle;
