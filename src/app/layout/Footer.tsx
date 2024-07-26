import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div>
      <div className="footer-links mt-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <h3 className="mt-4">How about a quick chat?</h3>
            <h5 className="text-center mt-5">
              Interested in connecting? You can reach out by emailing <br />
              <a href="mailto:charcaedonaire@outlook.com" target="_blank">charcaedonaire@outlook.com</a> or simply click the button below. I'm <br />
              looking forward to our interaction!
            </h5>
            <NavLink className='btn btn-primary btn-lg mb-5 mt-4' to={`/contact`}>
              Contact me
            </NavLink >
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <div>© 2023 CharcaeDesign. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
