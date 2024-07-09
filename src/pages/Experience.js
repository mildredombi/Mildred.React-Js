import "./Experience.css";
import Navbar from "./Navbar";
import ojt1 from "../img/ojt1.jpg";
import ojt2 from "../img/ojt2.jpg";
import ojt3 from "../img/ojt3.jpg";
import ojt4 from "../img/ojt4.jpg";
const Experience = () => {
  return (
    <>
      <Navbar />

     
          <section id="experience">
      <div class="text-center">
        <br></br><br></br>
         <h2 class="display-2 text-white"><strong>Experiences</strong></h2></div>
         <div class="text-center">
         <h5 class="text-white">During my on-the- job training, at HRMO</h5></div>
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={ojt1} alt="" />
                <h4 className="text-center text-dark"></h4>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={ojt2} alt="" />
                <h4 className="text-center text-dark"></h4>
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={ojt3} alt="" />
                <h4 className="text-center text-dark"></h4>

              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={ojt4} alt="" />
                <h4 className="text-center text-dark"></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </>
  );
};

export default Experience;
