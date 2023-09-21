import "./App.css";
import { useState } from "react";
import Education from "./Education";
import PersonalInfo from "./Info";
import Card from "./cards/Card";

function App() {
  const name = "Shahid";
  const cnic = "38302-8345-5";
  const cls = "16th Years";
  const roll = "E-1256";
  const dataList = [
    { tech: "Blockchain", techCode: "123" },
    { tech: "React Js", techCode: "323" },
    { tech: "Next Js", techCode: "444" },
  ];

  const [tech, setTech] = useState("");
  const [techCode, setTechCode] = useState("");
  const [cards, setCards] = useState([]);

  const handleStates = (e) => {
    e.preventDefault();
    // Create a new card object and add it to the cards state
    const newCard = { tech, techCode };
    setCards([...cards, newCard]);
    // Clear the input fields
    // setTech("");
    // setTechCode("");
  };

  return (
    <>
      <h2> This is Main App Component</h2>
      <PersonalInfo name={name} cnic={cnic} city=" Rwp" />
      <h2> Education Component</h2>
      <Education userClass={cls} userRollNo={roll} />
      <h2> Cards:</h2>
      {/* {dataList.map((card) => (
        <Card key={card.techCode} tech={card.tech} techCode={card.techCode} />
      ))} */}

      <br />
      <form onSubmit={handleStates}>
        <label>
          Tech :
          <input
            type="text"
            value={tech} // Use the state value
            onChange={(e) => setTech(e.target.value)}
          />
        </label>
        <label>
          TechCode :
          <input
            type="text"
            value={techCode} // Use the state value
            onChange={(e) => setTechCode(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* Render the newly added cards */}
      {cards.map((card, index) => (
        <Card key={index} tech={card.tech} techCode={card.techCode} />
      ))}
    </>
  );
}

export default App;
