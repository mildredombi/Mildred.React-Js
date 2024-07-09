import "./Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container5">

            <div id="contact-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Contact
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">

            <section id="contact">
              <div classname="container">
                <h5>Phone Number</h5>
                <p>09052414264</p>
                <br>
                </br>
                <h5>Email</h5>
                <p>mildredcalili17@gmail.com</p>
                
              </div>

              <hr/>

            </section>
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href=""> Jeelo Hernandez</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
