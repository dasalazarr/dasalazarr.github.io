import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="title-box-2 mb-4">
                        <h5 className="title-left">Contacto</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="more-info mb-4">
                        <p className="lead">
                          Si quieres ponerte en contacto, hablar sobre una posible colaboración 
                          o simplemente saludar, me encantaría saber de ti.
                        </p>
                        <ul className="list-ico mt-4">
                          <li><span className="ion-email"></span> diego_salazar@outlook.com</li>
                          <li><span className="ion-social-linkedin"></span> linkedin.com/in/dasalazarr</li>
                        </ul>
                      </div>
                      <div className="socials text-center mt-4">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/dasalazarr"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://linkedin.com/in/dasalazarr"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <form
                          action="https://formspree.io/xdoeonlo"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            ¡Tu mensaje ha sido enviado. Gracias!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Tu Nombre"
                                  data-rule="minlen:4"
                                  data-msg="Por favor ingresa al menos 4 caracteres"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Tu Email"
                                  data-rule="email"
                                  data-msg="Por favor ingresa un email válido"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>

                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Por favor escribe algo para nosotros"
                                  placeholder="Mensaje"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 text-center">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Enviar Mensaje
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  <p className="copyright">&copy; Copyright <strong>Diego Andrés Salazar</strong>. Todos los derechos reservados</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
