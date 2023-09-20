const Card = (props) => {
  return (
    <>
      <div>
        <h5>{props.tech}</h5>
        <p>{props.techCode}</p>
      </div>
    </>
  );
};

export default Card;
