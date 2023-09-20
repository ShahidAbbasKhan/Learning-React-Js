import "./App.css";
import PersonalInfo from "./Info";

function App() {
  const name = "Shahid";
  return (
    <>
      <h2> This is Main App</h2>
      <PersonalInfo name={name} />
    </>
  );
}

export default App;
