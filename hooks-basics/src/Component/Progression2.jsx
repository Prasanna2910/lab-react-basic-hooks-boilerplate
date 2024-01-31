import { useState } from 'react';

function State2() {
  const [age, setAge] = useState(19);
  const [siblings, setSiblings] = useState(1); //2

  const handleClickAge = () => {
    setAge(age + 1);
  };
  const handleClickSibling = () => {
    setSiblings(siblings + 1);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>My age is {age}</h4>

      <h4>My siblings: {siblings}</h4>

      <button onClick={handleClickAge}>Get older</button>

      <button onClick={handleClickSibling}>Get More Sibling</button>
    </div>
  );
}
export default State1;
