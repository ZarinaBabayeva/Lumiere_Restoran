import "../styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_text jsb_flex raleway">
          <div className="f_card">
            <p className="head">address</p>
            <p className="text_area">
              22 Rue de la République, 75001 Paris, France
            </p>
          </div>
          <div className="f_card">
            <p className="head">Opening Hours</p>
            <div className="text_area">
              <ul className="opening_hours">
                <li> Mon - Fri: 11am - 10pm</li>
                <li>Sat - Sun: 11am - 12am</li>
              </ul>
            </div>
          </div>
          <div className="f_card">
            <p className="head">Contact Us</p>
            <div className="text_area">
              <ul className="contact_us">
                <li>limuere@gmail.com</li>
                <li>+33 6 12 34 56 78</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright_media raleway jsb_flex">
          <div className="copyright">
            <span>c</span>
            <strong>Lumiere</strong>
          </div>
          <ul className="media jsb_flex">
            <li>
              <Link to="https://www.instagram.com/">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="https://x.com/">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="https://web.whatsapp.com/">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
