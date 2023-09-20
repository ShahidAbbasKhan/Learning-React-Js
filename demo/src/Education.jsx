// props destructuring
const Education = ({ userClass, userRollNo }) => {
  return (
    <>
      <h2>Roll No : {userRollNo}</h2>
      <h2>Class : {userClass}</h2>
    </>
  );
};

export default Education;
