import AboutDoCard from "../components/AboutDoCard";
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import logo_1 from "../assets/logo-1-color.png";
import logo_2 from "../assets/logo-2-color.png";
import logo_3 from "../assets/logo-3-color.png";
import logo_4 from "../assets/logo-4-color.png";
import logo_5 from "../assets/logo-5-color.png";
import logo_6 from "../assets/logo-6-color.png";
import avatar_1 from "../assets/avatar-1.png";
import avatar_2 from "../assets/avatar-2.png";
import avatar_3 from "../assets/avatar-3.png";
import avatar_4 from "../assets/avatar-4.png";
import web_design from "../assets/web-design.svg";
import web_development from "../assets/web-dev.svg";
import mobile_app from "../assets/mobile-app.svg";
import full_stack from "../assets/photo.svg";

let myarr = [
  {
    img: web_design,
    title: "Web Design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    img: web_development,
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    img: mobile_app,
    title: "MERN Stack",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    img: full_stack,
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
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
                className: "owl-dots",
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="item">
                  <div className="item-inner">
                    <div className="inner-details me-3">
                      <div className="inner-img">
                        <img src={avatar_1} alt="" />
                      </div>
                      <h3>Daniel Lewis</h3>
                    </div>
                    <div className="inner-content">
                      <p>
                        Ricardo was hired to create a corporate identity. We
                        were very pleased with the work done...
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="item-inner">
                    <div className="inner-details me-3">
                      <div className="inner-img">
                        <img src={avatar_2} alt="" />
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="item-inner">
                    <div className="inner-details me-3">
                      <div className="inner-img">
                        <img src={avatar_3} alt="" />
                      </div>
                      <h3>Emily Evans</h3>
                    </div>
                    <div className="inner-content">
                      <p>
                        Ricardo did a miracle with my website. It looks exactly
                        as I imagined it. Now I have a profession...
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="item-inner">
                    <div className="inner-details me-3">
                      <div className="inner-img">
                        <img src={avatar_4} alt="" />
                      </div>
                      <h3>Henry William</h3>
                    </div>
                    <div className="inner-content">
                      <p>
                        Thank you very much for your work on our project. It was
                        a big help for us. Thanks to the...
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="item-inner">
                    <div className="inner-details me-3">
                      <div className="inner-img">
                        <img src={avatar_2} alt="" />
                      </div>
                      <h3>Henry William</h3>
                    </div>
                    <div className="inner-content">
                      <p>
                        Thank you very much for your work on our project. It was
                        a big help for us. Thanks to the...
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="client">
        <h3 className="heading">Client</h3>
        <div className="client-item">
          <div className="owl-carousel owl-theme client-carousel">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
                className: "owl-dots",
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="item">
                  <a href="#">
                    <img src={logo_1} alt="" width="100%" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <a href="#">
                    <img src={logo_2} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <a href="#">
                    <img src={logo_3} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <a href="#">
                    <img src={logo_4} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <a href="#">
                    <img src={logo_5} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <a href="#">
                    <img src={logo_6} alt="" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
