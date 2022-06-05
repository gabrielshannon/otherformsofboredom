import "./Technologies.css";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  SiAdobephotoshop,
  SiCinema4D,
  SiAdobeaftereffects,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

function Technologies() {
  return (
    <div id="section-tech">
      <div className="section-divider-technologies"></div>
      <div className="section-title-technologies">Technologies</div>
      <div className="section-technologies-text">
        <div className="list-item">
          <DiReact size="40px" />

          <div className="list-container">
            <div className="list-title">Front-End</div>
            <div className="list-paragraph">
              JavaScript, React.js <br />& Node
            </div>
          </div>
        </div>

        <div className="list-item">
          <CgFigma size="40px" />

          <div className="list-container">
            <div className="list-title">UI/UX</div>
            <div className="list-paragraph">
              Concept driven
              <br />
              user epxerience
            </div>
          </div>
        </div>
        <div className="list-item">
          <div className="extra-padding">
            <SiAdobephotoshop size="30px" />
          </div>

          <div className="list-container">
            <div className="list-title">Web Design</div>
            <div className="list-paragraph">
              HTML, CSS, Photoshop <br />& InDesign
            </div>
          </div>
        </div>
        <div className="list-item">
          <div className="extra-padding">
            <SiAdobeaftereffects size="30px" />
          </div>
          <div className="list-container">
            <div className="list-title">Motion Graphics</div>
            <div className="list-paragraph">
              After Effects <br />& Premier Pro
            </div>
          </div>
        </div>
        <div className="list-item">
          <div className="extra-padding">
            <SiCinema4D size="30px" />
          </div>
          <div className="list-container">
            <div className="list-title">3D / VFX </div>
            <div className="list-paragraph">
              ZBrush <br />
              Blender & Cinema4D
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider-technologies"></div>
    </div>
  );
}

export default Technologies;
