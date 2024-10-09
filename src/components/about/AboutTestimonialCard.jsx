/* eslint-disable react/prop-types */
function AboutTestimonialCard({ testimonial }) {
  console.log(testimonial);

  return (
    <div className="item">
      <div className="item-inner">
        <div className="inner-details me-3">
          <div className="inner-img">
            <img src={`/src/assets/${testimonial.img}.png`} alt="" />
          </div>
          <h3>{testimonial.title}</h3>
        </div>
        <div className="inner-content">
          <p>{testimonial.description}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutTestimonialCard;
