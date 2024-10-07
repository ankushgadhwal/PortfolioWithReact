import "./Portfolio.css";
import fullstackImg from "../assets/wonderlust.jpg";
import javascriptImg from "../assets/javascript.jpg";
import seoImg from "../assets/seo.png";
import pofoImg from "../assets/poco-responsive.png";
import canvasImg from "../assets/canvas.jpg";
import portfolioImg from "../assets/portfolio-project.jpg";
import portfolioImg2 from "../assets/portfolio.jpg";
import sandboxImg from "../assets/sandbox-css3.jpg";
import titanaImg from "../assets/sass- project.png";


function Portfolio() {
  
  return (
    <>
      <div className="page-heading">
        <h3 className="title">Portfolio</h3>
      </div>

      <div className="portfolio-content">
        <select
          id="allproject"
          className="form-select"
          aria-label="Default select example"
        >
          <option selected>Select Category</option>

          <option value="sass">SASS</option>
          <option value="css">CSS/CSS3</option>
          <option value="bootstrap">BOOTSTRAP</option>
          <option value="media">Media Query</option>
        </select>

        <input type="radio" name="photos" id="check1" />
        <input type="radio" name="photos" id="check2" />
        <input type="radio" name="photos" id="check3" />
        <input type="radio" name="photos" id="check4" />
        <input type="radio" name="photos" id="check5" />
        <input type="radio" name="photos" id="check6" />
        <input type="radio" name="photos" id="check7" />

        <div className="categories">
          <label htmlFor="check1" className="yellowtext">
            All
          </label>
          <label htmlFor="check6">Fullstack</label>
          <label htmlFor="check7">Javascript</label>
          <label htmlFor="check2">SASS</label>
          <label htmlFor="check3">CSS/CSS3</label>
          <label htmlFor="check4">BOOTSTRAP</label>
          <label htmlFor="check5">Media Query</label>
        </div>

        <div className="photo-gallery">
          <div className="pic fullstack">
            <a href="https://wanderlust-1j0e.onrender.com/listings">
              <img src={fullstackImg} alt="wonderLust" />
            </a>
            <div className="img-caption">
              <h3>Wonderlust</h3>
              <p>Web Design</p>
            </div>
          </div>
          <div className="pic javascript">
            <a href="https://forkify-ankush.netlify.app/">
              <img src={javascriptImg} alt="javascript" />
            </a>
            <div className="img-caption">
              <h3>Forkify</h3>
              <p>Web Design</p>
            </div>
          </div>
          <div className="pic sass">
            <a href="https://titana.pages.dev/">
              <img src={titanaImg} alt="Titana" />
            </a>
            <div className="img-caption">
              <h3>Titana</h3>
              <p>Web Design</p>
            </div>
          </div>
          <div className="pic bootstrap">
            <a href="https://seobyankush.netlify.app/">
              <img src={seoImg} alt="seo" />
            </a>
            <div className="img-caption">
              <h3>SEO / Digital Marketing</h3>
              <p>Web Design</p>
            </div>
          </div>
          <div className="pic pofo">
            <a href="https://pofo-by-ankush.000webhostapp.com/">
              <img
                src={pofoImg}
                alt="pofo"
                style={{ objectPosition: "top" }}
              />
            </a>
            <div className="img-caption">
              <h3>POFO</h3>
              <p>Web Design</p>
            </div>
          </div>
          <div className="pic sandbox">
            <a href="https://sandbox-by-ankush.pages.dev/">
              <img
                src={sandboxImg}
                alt="sandbox"
                style={{ objectPosition: "top" }}
              />
            </a>
            <div className="img-caption">
              <h3>Sandbox</h3>
              <p>Web Design</p>
            </div>
          </div>
          <div className="pic canvas">
            <a href="https://canvas-car.netlify.app/">
              <img src={canvasImg} alt="" />
            </a>
            <div className="img-caption">
              <h3>Canvas</h3>
              <p>Web Design</p>
            </div>
          </div>
          <div className="pic portfolio">
            <a href="index.html">
              <img
                src={portfolioImg}
                alt="html"
                style={{ objectPosition: "right" }}
              />
            </a>
            <div className="img-caption">
              <h3>Portfolio</h3>
              <p>Web Design</p>
            </div>
          </div>
          <div className="pic portfolio">
            <a href="index.html">
              <img
                src={portfolioImg2}
                alt="react"
                style={{ objectPosition: "right" }}
              />
            </a>
            <div className="img-caption">
              <h3>Portfolio</h3>
              <p>Web Design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
