const PersonalInfo = (props) => {
  console.log({ props }); // will be shown whole obj
  return (
    <>
      <h2> Name: {props.name}</h2>
      <h2> CNIC: {props.cnic}</h2>
    </>
  );
};

export default PersonalInfo;
