import "./Header.css";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import face from "../../image/green-logo.gif";

function Header() {
  return (
    <BrowserRouter>
      <div className="container-header">
        <div className="container-link-1">
          <div className="page-link">
            <div
              style={{ display: "flex", alignItems: "center", color: "black" }}
            >
              <span>
                <img className="OFOB-logo" src={face}></img>
              </span>
            </div>
          </div>
        </div>
        <div className="container-link-2">
          <Link className="nav-link" to="#section-projects" smooth>
            Projects
          </Link>

          <Link className="nav-link" to="#section-tech" smooth>
            Technologies
          </Link>

          <Link className="nav-link" to="#section-about" smooth>
            Info
          </Link>
        </div>
        <div className="container-link-3">
          <a href="mailto:info@otherformsofboredom.com">
            <div className="social-icons">
              <a href="mailto:info@otherformsofboredom.com">
                <MdOutlineAlternateEmail size="2rem" />
              </a>
            </div>
          </a>
          <a href="https://github.com/gabrielshannon">
            <div className="social-icons">
              <AiFillGithub size="2rem" />
            </div>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
