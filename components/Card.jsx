const Card = ({ src, title }) => {
  return (
    <section>
      <img src={src} alt="" />
      <h2>{title}</h2>
    </section>
  );
};

export default Card;
