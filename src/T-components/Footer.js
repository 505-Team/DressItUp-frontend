import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

// import Navbar from 'react-bootstrap/Navbar';



class Footer extends React.Component {
  render() {
    return (
      // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //   <Navbar.Brand>&copy; World of Art</Navbar.Brand>
      // </Navbar>
      <>
        {/* // < !--Footer -- > */}
        <footer className="footerstyle" >
          {/* <!-- Section: Social media --> */}
          <section
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
          >
            {/* <!-- Left --> */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>

              <a href="https://www.facebook.com/">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  width="40" height="40" alt="Qries" />
              </a>
              <i className="fab fa-facebook-f"></i>

              <a href="https://www.twitter.com/">
                <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                  width="40" height="40" alt="Qries" />
                <i className="fab fa-twitter"></i>
              </a>

              <a href="https://www.instagram.com/">
                <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                  width="40" height="40" alt="Qries" />
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png"
                  width="40" height="40" alt="Qries" />
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.github.com/">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png"
                  width="40" height="40" alt="Qries" />
                <i className="fab fa-github"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>World of Art
                  </h6>
                  <p>
                    We are committed to deliever the excellence of paintings and Art wroks.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    Paintings
                  </p>
                  
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="/" className="text-reset">Back to Home</a>
                  </p>
                  <p>
                    <a href="/Aboutus" className="text-reset">About Us</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                  </h6>
                  <p><i className="fas fa-home me-3"></i> Amman, Jordan</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@worldofArt.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2021 Copyright: World of Art.
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!--Footer --> */}
      </>
    );
  }
}

export default Footer;
