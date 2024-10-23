import { Children } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MainCtn.css";

// eslint-disable-next-line react/prop-types
const MainCtn = ({ children }) => {
  let { pathname } = useLocation();
  const pageLinks = [
    { name: "About", link: "/" },
    { name: "Resume", link: "/resume" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="col-xl-9 col-lg-12">
        <div className="box-outer">
          <div className="navbar">
            <ul className="nav">
              {pageLinks.map((page, idx) => (
                <li
                  className={`nav-item${
                    pathname === page.link ? " active" : ""
                  }`}
                  key={idx}
                >
                  <Link to={page.link} className="nav-link">
                    {page.name}
                  </Link>
                </li>
              ))}
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
