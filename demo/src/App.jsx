import "./App.css";
import Education from "./Education";
import PersonalInfo from "./Info";

function App() {
  const name = "Shahid";
  const cnic = "38302-8345-5";
  const cls = "16th Years";
  const roll = "E-1256";
  return (
    <>
      <h2> This is Main App</h2>
      <PersonalInfo name={name} cnic={cnic} city=" Rwp" />
      <h2> Education Component</h2>
      <Education userClass={cls} userRollNo={roll} />
    </>
  );
}

export default App;
