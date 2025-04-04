import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";
import stock6 from "../img/image7.jpg"; 
import stock7 from "../img/image8.jpg"; 
import stock8 from "../img/image9.jpg"; 
import stock9 from "../img/image10.jpg"; 
import stock10 from "../img/image11.jpg"; 
import stock11 from "../img/image12.jpg"; 
import stock12 from "../img/image13.jpg"; 
import stock13 from "../img/image14.jpg"; 


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-left">Experiencia Profesional</h3>
                <p className="subtitle-a" style={{ paddingTop: '20px' }}>
                  Mi trayectoria profesional en transformación digital, gestión de productos y consultoría
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Illari Tech</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Fundador - AI Product Manager | 2024 - Actualidad
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Telefónica Hispam</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Líder en Transformación Digital e Innovación | 2022 - Actualidad
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock11} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock11} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Rotaract Quito Latitud Cero</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Presidente | 2022 - 2023
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <a
                  href={stock12}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock13}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
            </div>
            
          </div>
          <div className="row justify-content-center">
          <div className="col-md-4">
              <div className="work-box">
                <a href={stock6} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock6} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">ARS Internacional</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Consultor de Procesos y Product Owner | 2021 - 2022
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock7}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock8}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock9} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock9} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Hyundai Ecuador</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Ingeniero de Procesos | 2018 - 2020
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <a
                  href={stock10}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
