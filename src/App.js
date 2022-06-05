import "./App.css";
import "./components/GlobalStyles/GlobalStyles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero.js";
import Background from "./components/Background/Background";
// import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import About from "./components/About/About";

import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <div className="container-main">
        <Header></Header>
        <div className="section-main">
          <Hero></Hero>
          <Background></Background>
        </div>
        <Projects></Projects>
        <Technologies></Technologies>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
