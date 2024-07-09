import "./Home.css";

import meld from "../img/meld.png";
import ibisImage from "../img/ibis-paint-x.png";
import vscodeImage from "../img/vc-code.png";
import gcbImage from "../img/gcb.png";
import web1 from "../img/web1.jpg";
import web2 from "../img/web2.png";
import va from "../img/va.jpg";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold">Hello, I'm</h1>
                      <h1 className="text display-4">
                        Mildred C. Ombi-on
                      </h1>
                      <br />
                      <p className="self text-light">
                        I'm a Web Developer & Web Designer
                      </p>
                      <a href="" className="btn btn-brand shadow">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={meld}
                        alt="Profile Picture of Jeelo Hernandez"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={ibisImage} alt="" />
                <h4 className="text-center">IbisPaintX</h4>
                <p>
                  IbisPaint X is a popular digital art app designed for creating
                  illustrations and manga on mobile devices. You can also share
                  your creations with others and get feedback from a community
                  of artists within the app. IbisPaint X provides a convenient
                  way to unleash your creativity.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={vscodeImage} alt="" />
                <h4 className="text-center">Visual Studio Code</h4>
                <p>
                  Visual Studio Code (VS Code) is a free source-code editor
                  developed by Microsoft for Windows, macOS, and Linux. It has
                  quickly become one of the most popular code editors in the
                  developer community due to its versatility, extensive
                  features, and customizable nature.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={gcbImage} alt="" />
                <h4 className="text-center">Gaming Center Base</h4>
                <p>
                  Gaming center base is a venue where gamers gather to play
                  video games together on high-end computers and consoles. It
                  offers a social and competitive environment with comfortable
                  amenities like chairs and snacks, making it a popular spot for
                  gaming enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="game">
  <div className="container">
  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      My Web Developer
                    </h1>
                  </div>
                  <br></br>
                  <br></br>
    <div className="row">
      <div className="col-lg-4 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={va} className="card-img-top mt-3" alt="" />
        </div>
      </div>

      <div className="col-lg-4 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={web2} className="card-img-top mt-3" alt="" />
        </div>
      </div>

      <div className="col-lg-4 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={web1} className="card-img-top mt-3" alt="" />
        </div>
      </div>
      
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
