import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [parentData, setParentData] = useState("");

  const receiveDataFromChild = (data) => {
    setParentData(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Received Data from Child: {parentData}</p>
      <ChildComponent sendDataToParent={receiveDataFromChild} />
    </div>
  );
};

export default ParentComponent;
