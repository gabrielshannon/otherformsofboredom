import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";
import footerLogo from "../../image/green-logo-footer.gif";

function Footer() {
  return (
    <section className="footer-wrapper">
      <ul class="link-list">
        <div className="link-contacts">
          <div className="link-column">
            <div className="link-item" href="tel:07772943009">
              tel: 07-772-943-009
            </div>
          </div>

          <div className="link-column">
            <div className="link-item" href="mailto:gabrielshannon96@gmail.com">
              info@otherformsofboredom.com
            </div>
          </div>
        </div>
        <div className="social-icons-container">
          <div className="social-container">
            {" "}
            <div className="page-link">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <span>
                  <img className="OFOB-logo" src={footerLogo}></img>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </section>
  );
}

export default Footer;
