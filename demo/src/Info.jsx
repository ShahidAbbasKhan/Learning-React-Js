const PersonalInfo = (props) => {
  console.log({ props }); // will be shown whole obj
  return (
    <>
      <h2> NAME: {props.name}</h2>
      <h2> CNIC: {props.cnic}</h2>
      <h2> CITY: {props.city}</h2>
    </>
  );
};

export default PersonalInfo;
