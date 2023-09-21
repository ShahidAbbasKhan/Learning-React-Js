import React, { useState } from "react";

const ChildComponent = ({ sendDataToParent }) => {
  const [childData, setChildData] = useState("");

  const handleInputChange = (e) => {
    setChildData(e.target.value);
  };

  const sendData = () => {
    sendDataToParent(childData);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        placeholder="Enter data"
        value={childData}
        onChange={handleInputChange}
      />
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
