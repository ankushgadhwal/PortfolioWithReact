import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="page-heading">
        <h3 className="title">Contact</h3>
      </div>

      <div className="map-wrapper">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6624470279094!2d72.83610131538657!3d21.165827588459745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e3b1499746b%3A0x44913179f4c51bf6!2sGayatri%20Society!5e0!3m2!1sen!2sin!4v1670496935712!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-form mb-3">
        <h2>Contact Form</h2>
      </div>

      <form className="needs-validation" noValidate>
        <div className="d-block d-md-flex mb-4">
          <div className="w-100 me-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              required
            />
            <div className="invalid-feedback">Fill in the field</div>
          </div>
          <div className="w-100 ms-md-2">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email address"
              required
            />
            <div className="invalid-feedback">Email is incorrect</div>
          </div>
        </div>

        <div className="mb-4">
          <textarea
            className="form-control w-100"
            name="message"
            id=""
            rows="4"
            placeholder="Your message"
            required
          ></textarea>
          <div className="invalid-feedback">Fill in the field</div>
        </div>

        <div className="d-md-flex justify-content-md-end ">
          <button type="submit" className="btn btn-primary float-end">
            <i className="bi bi-send-fill"></i> Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
