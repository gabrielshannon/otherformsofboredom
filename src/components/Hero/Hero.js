import "./HeroStyles.css";

function Hero() {
  return (
    <div className="section-hero">
      <div className="left-section">
        <div className="other">
          <mark>
            <em>
              Other Forms of <br></br>Boredom
            </em>
          </mark>
        </div>
        <div className="left-subsection">
          <div className="hero-text">
            <mark>
              Front End <br></br>
              UX / UI <br></br>
              Web Design <br></br>
              Motion / Graphic Design <br></br>
              3D & VFX
            </mark>
          </div>
          <span className="button-span">
            <a href="mailto:info@otherformsofboredom.com">
              <button className="contact-button">Contact</button>
            </a>
          </span>
        </div>
      </div>

      <div className="right-section">
        <div className="hero-text-right">
          <mark>
            tel: <br></br>07-772-943-009
          </mark>
        </div>
        <div className="hero-text-right">
          <mark>
            email:<br></br> info@otherformsofboredom.com
          </mark>
        </div>
      </div>
    </div>
  );
}

// function Hero() {
//   return (
//     <div className="section-hero">
//       <div className="hero-text-box">
//         <div className="hero-text-title">
//           <mark>
//             <em>
//               Other Forms of <br></br> Boredom
//             </em>
//           </mark>
//         </div>

//         <div className="hero-text">
//           <div className="hero-text-services">
//             <mark>
//               Front End Development <br></br>UX / UI<br></br> Web Design Motion
//               / Graphic<br></br>
//               Design 3D / VFX
//             </mark>
//           </div>

//           <div className="hero-text-right">
//             <div className="hero-text-contact">
//               <mark>
//                 email:<br></br> info@otherformsofboredom.com{" "}
//               </mark>
//             </div>

//             <div className="hero-text-contact">
//               <mark>
//                 tel: <br></br>07-772-943-009
//               </mark>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="background-image-div">
//         <video className="background-image" autoPlay loop muted>
//           <source src={BackgroundImage} type="video/mp4" />
//         </video>
//       </div>
//     </div>
//   );
// }

export default Hero;

{
  /* <div className="background-image-div">
<video className="background-image" autoPlay loop muted>
  <source src={BackgroundImage} type="video/mp4" />
</video>
</div> */
}

// function Hero() {
//   return (
//     <div className="section-hero">
//       <div className="left-section">
//         <div className="other">
//           <mark>
//             <em>
//               Other Forms of <br></br>Boredom
//             </em>
//           </mark>
//         </div>
//         <div className="left-subsection">
//           <div className="hero-text">
//             <mark>
//               Front End <br></br>
//               UX / UI <br></br>
//               Web Development <br></br>
//               Motion / Graphic Design <br></br>
//               3D & VFX
//             </mark>
//           </div>
//           <a href="mailto:info@otherformsofboredom.com">
//             <button className="contact-button">Contact</button>
//           </a>
//         </div>
//       </div>

//       <div className="right-section">
//         <div className="hero-text-right">
//           <mark>
//             tel: <br></br>07-772-943-009
//           </mark>
//         </div>
//         <div className="hero-text-right">
//           <mark>
//             email:<br></br> info@otherformsofboredom.com
//           </mark>
//         </div>
//       </div>
//     </div>
//   );
// }
