import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hola, soy Diego Andrés Salazar</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Product Manager",
                      "Consultor de Transformación Tecnológica",
                      "Especialista en Innovación"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  Ver Mis Proyectos
                </a>
              </p>
              <div className="intro-buttons" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <a
                  className="btn btn-outline-light px-4"
                  href="https://drive.google.com/file/d/1J_rBzGmCAW-h9EiWP3Bsn3IZHq_Sx0J_/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  style={{ borderRadius: '5px', borderColor: '#007bff', color: '#fff', backgroundColor: 'transparent', borderWidth: '2px' }}
                >
                  Descargar CV
                </a>
                <a
                  className="btn btn-outline-light js-scroll px-4"
                  href="#contact"
                  role="button"
                  style={{ borderRadius: '5px', borderColor: '#007bff', color: '#fff', backgroundColor: 'transparent', borderWidth: '2px' }}
                >
                  Contactarme
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
