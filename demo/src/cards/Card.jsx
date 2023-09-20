const Card = (props) => {
  return (
    <>
      <div>
        <h2>{props.tech}</h2>
        <p>{props.techCode}</p>
      </div>
    </>
  );
};

export default Card;
