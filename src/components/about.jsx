import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "DataAnalysis_skill", content: "Análisis de Datos", porcentage: "90%", value: "90" },
        { id: "BusinessIntelligence_skill", content: "Business Intelligence", porcentage: "85%", value: "85" },
        {
          id: "ProductManagement_skill",
          content: "Gestión de Productos",
          porcentage: "90%",
          value: "90"
        },
        { id: "Strategy_skill", content: "Estrategia y Transformación", porcentage: "85%", value: "85" },
        {
          id: "ProjectManagement_skill",
          content: "Gestión de Proyectos Agile",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Leadership_skill",
          content: "Liderazgo",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "PowerBI_skill",
          content: "Power BI + SQL",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "PowerApps_skill",
          content: "Power Apps + Power Automate",
          porcentage: "75%",
          value: "75"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Líder en Transformación Digital y Análisis de Datos con más de 6 años de experiencia impulsando la eficiencia operativa y la toma de decisiones estratégicas en entornos multinacionales. Especializado en Análisis de Negocios, Analítica de Datos y Estrategia de Transformación."
        },
        {
          id: "second-p-about",
          content:
            "Amplia experiencia en gestión de incertidumbre, automatización de procesos y liderazgo interfuncional para optimizar la eficiencia empresarial. Mi enfoque se centra en utilizar datos para impulsar decisiones estratégicas y mejorar los resultados del negocio."
        },
        {
          id: "third-p-about",
          content:
            "Como fundador de Illari Tech, me especializo en soluciones basadas en IA para pequeñas y medianas empresas, ayudándolas a aumentar su productividad y reducir costos operativos mediante la transformación digital."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Habilidades</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Sobre Mí</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
