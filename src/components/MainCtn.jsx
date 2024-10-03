import { Children } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MainCtn = ({ children }) => {
  return (
    <>
      <div className="col-xl-9 col-lg-12">
        <div className="box-outer">
          <div className="navbar">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {Children.map(children, (child) => (
            <div className="Row">{child}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainCtn;
