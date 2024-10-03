function AboutDoCard({ card }) {
  console.log(card);

  return (
    <>
      <div className="col-sm-12 col-lg-6">
        <div className="item-inner d-flex">
          <div className="inner-img me-3">
            <img src={card.img} alt="" />
          </div>
          <div className="inner-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutDoCard;
