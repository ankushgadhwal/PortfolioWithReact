import AboutDoCard from "../components/about/AboutDoCard";
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AboutTestimonialCard from "../components/about/AboutTestimonialCard";
import aboutData from "../../aboutSchema.json";
import ClientCard from "../components/about/ClientCard";

function About() {
  const testimonialOption = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      className: "owl-dots",
    },
    modules: [Pagination],
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    className: "mySwiper",
  };

  const clientOption = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      className: "owl-dots",
    },
    modules: [Pagination],
    className: "mySwiper",
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };

  return (
    <>
      <div className="page-heading">
        <h1 className="title">About Me</h1>
        {aboutData?.aboutMe.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="about-content">
        <h2>What I&apos;m Doing</h2>
        <div className="about-item row">
          {aboutData?.whatImDoing.map((card, idx) => (
            <AboutDoCard card={card} key={idx} />
          ))}
        </div>
      </div>
      <div className="about-testimonial">
        <h3 className="heading">Testimonials</h3>
        <div className="testimonial-item">
          <div className="owl-carousel owl-theme testimonial-carousel">
            <Swiper {...testimonialOption}>
              {aboutData?.testimonials.map((testimonial, idx) => (
                <SwiperSlide key={idx}>
                  <AboutTestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="client">
        <h3 className="heading">Client</h3>
        <div className="client-item">
          <div className="owl-carousel owl-theme client-carousel">
            <Swiper {...clientOption}>
              {aboutData.clients.map((client, idx) => (
                <SwiperSlide key={idx}>
                  <ClientCard client={client} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
