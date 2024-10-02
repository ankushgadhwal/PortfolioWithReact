import "./Sidebar.css";
import {
  Calendar4Range,
  ChevronDown,
  Envelope,
  GeoAlt,
  Phone,
} from "react-bootstrap-icons";
import profileImg from "../assets/avatar.png";

const Sidebar = () => {
  return (
    <div className="col-xl-3 col-lg-12">
      <aside>
        <div className="sidebar">
          <div className="sidebar-basic-info d-flex d-xl-block align-items-center">
            <div className="avatar-box">
              <img src={profileImg} alt="avatar" />
            </div>

            <div className="sidebar-basic-info-details text-xl-center">
              <h3>Ankush Gadhwal</h3>
              <div className="badge">Frontend Developer</div>
            </div>

            <button className="contact-btn">
              <span>Show Contacts</span>
              <ChevronDown color="#FFDB6E" />
            </button>
          </div>

          <div className="sidebar-details">
            <div className="divider"></div>

            <div className="sidebar-details-info">
              <ul className="d-md-flex d-xl-block">
                <li>
                  <div className="details-info-item d-flex align-items-center">
                    <span className="info-icon d-flex align-items-center justify-content-center">
                      <Envelope color="#FFDB6E" />
                    </span>
                    <div className="item-details">
                      <span>EMAIL</span>
                      <h3>ankush@gmail.com</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="details-info-item d-flex align-items-center">
                    <span className="info-icon d-flex align-items-center justify-content-center">
                      <Phone color="#FFDB6E" />
                    </span>
                    <div className="item-details">
                      <span>PHONE</span>
                      <h3>+91 98980-23029</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="details-info-item d-flex align-items-center">
                    <span className="info-icon d-flex align-items-center justify-content-center">
                      <Calendar4Range color="#FFDB6E" />
                    </span>
                    <div className="item-details">
                      <span>BIRTHDAY</span>
                      <h3>31 October 1996</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="details-info-item d-flex align-items-center">
                    <span className="info-icon d-flex align-items-center justify-content-center">
                      <GeoAlt color="#FFDB6E" />
                    </span>
                    <div className="item-details">
                      <span>LOCATION</span>
                      <h3>Surat, Gujarat</h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="divider d-xl-none"></div>

            <div className="social">
              <ul className="d-flex justify-content-xl-center justify-content-lg-start mb-0">
                <li>
                  <a href="https://www.linkedin.com/in/ankush-gadhwal-04738916a/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
