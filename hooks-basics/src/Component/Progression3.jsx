import { useState } from 'react';

function State3(props) {
  const [data, setData] = useState({
    age: 20,
    siblings: 1,
  });

  const handleClick = (keyName) => {
    setData({ ...data, [keyName]: data[keyName] + 1 });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>My age is : {data.age} </h4>
      <h4>My siblings:{data.siblings} </h4>

      <button onClick={() => handleClick('age')}>Get age</button>

      <button onClick={() => handleClick('siblings')}>Get Siblings</button>
    </div>
  );
}
export default State3;
