import AboutDoCard from "../components/AboutDoCard";

let myarr = [
  {
    img: "img/web-design.svg",
    title: "Web Design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    img: "img/web-dev.svg",
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    img: "img/mobile-app.svg",
    title: "MERN Stack",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    img: "img/photo.svg",
    title: "Full Stack",
    description: "I make full stack project at a professional level.",
  },
];

function About() {
  return (
    <>
      <div className="page-heading">
        <h1 className="title">About Me</h1>
        <p>
          I am a front-end developer with 2+ years of experience. I have
          completed a web development course from &quot;Red and White Multimedia
          Education&quot;, &quot;Udemy&quot; and &quot;Apna College&quot; which
          has given me the latest skills and knowledge in the web development
          industry.
        </p>

        <p>
          My focus is on designing and developing web apps that look great and
          work well. I am skilled in a range of programming languages and
          platforms, including HTML, CSS, Bootstrap, Tailwind, Material UI,
          JavaScript, React.js, Express.js, Node.js, jQuery, Angular, MySQL,
          MongoDB, RESTful APIs and DSA (with Java). I have Worked on websites
          for different industries, such as workflow management, e-commerce and
          education.
        </p>

        <p>
          I enjoy working with other web developers and designers to make
          websites that match the client&apos;s brand and business objectives.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
      </div>

      <div className="about-content">
        <h2>What I&apos;m Doing</h2>

        <div className="about-item row">
          {myarr?.map((card, idx) => (
            <AboutDoCard card={card} key={idx} />
          ))}
        </div>
      </div>

      <div className="about-testimonial">
        <h3 className="heading">Testimonials</h3>
        <div className="testimonial-item">
          <div className="owl-carousel owl-theme testimonial-carousel">
            {/* <Carousel
              emulateTouch={true}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
            >
              <div className="item">
                <div className="item-inner">
                  <div className="inner-details me-3">
                    <div className="inner-img">
                      <img src="img/avatar-1.png" alt="" />
                    </div>
                    <h3>Daniel Lewis</h3>
                  </div>
                  <div className="inner-content">
                    <p>
                      Ricardo was hired to create a corporate identity. We were
                      very pleased with the work done...
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-inner">
                  <div className="inner-details me-3">
                    <div className="inner-img">
                      <img src="img/avatar-2.png" alt="" />
                    </div>
                    <h3>Jessica Miller</h3>
                  </div>
                  <div className="inner-content">
                    <p>
                      The most modern and high-quality design made at a
                      professional level.
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-inner">
                  <div className="inner-details me-3">
                    <div className="inner-img">
                      <img src="img/avatar-3.png" alt="" />
                    </div>
                    <h3>Emily Evans</h3>
                  </div>
                  <div className="inner-content">
                    <p>
                      Ricardo did a miracle with my website. It looks exactly as
                      I imagined it. Now I have a profession...
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-inner">
                  <div className="inner-details me-3">
                    <div className="inner-img">
                      <img src="img/avatar-4.png" alt="" />
                    </div>
                    <h3>Henry William</h3>
                  </div>
                  <div className="inner-content">
                    <p>
                      Thank you very much for your work on our project. It was a
                      big help for us. Thanks to the...
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-inner">
                  <div className="inner-details me-3">
                    <div className="inner-img">
                      <img src="img/avatar-4.png" alt="" />
                    </div>
                    <h3>Henry William</h3>
                  </div>
                  <div className="inner-content">
                    <p>
                      Thank you very much for your work on our project. It was a
                      big help for us. Thanks to the...
                    </p>
                  </div>
                </div>
              </div>
            </Carousel> */}
          </div>
        </div>
      </div>

      <div className="client">
        <h3 className="heading">Client</h3>
        <div className="client-item">
          <div className="owl-carousel owl-theme client-carousel">
            <div className="item">
              <a href="#">
                <img src="img/logo-1-color.png" alt="" width="100%" />
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img src="img/logo-2-color.png" alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img src="img/logo-3-color.png" alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img src="img/logo-4-color.png" alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img src="img/logo-5-color.png" alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img src="img/logo-6-color.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
