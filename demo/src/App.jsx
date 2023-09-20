import "./App.css";
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

  return (
    <>
      <h2> This is Main App Component</h2>
      <PersonalInfo name={name} cnic={cnic} city=" Rwp" />
      <h2> Education Component</h2>
      <Education userClass={cls} userRollNo={roll} />
      <h2> Cards:</h2>
      {dataList.map((card) => {
        return (
          <Card key={card.techCode} tech={card.tech} techCode={card.techCode} />
        );
      })}
    </>
  );
}

export default App;
