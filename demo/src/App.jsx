import "./App.css";
import PersonalInfo from "./Info";

function App() {
  const name = "Shahid";
  const cnic = "38302-8345-5";
  return (
    <>
      <h2> This is Main App</h2>
      <PersonalInfo name={name} cnic={cnic} />
    </>
  );
}

export default App;
