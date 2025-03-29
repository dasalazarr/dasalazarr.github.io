import React from "react";
import myImage from "../img/myImage.png";
import $ from 'jquery';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skillsAnimated: false,
      skills: [
        { id: "DataAnalysis_skill", 
          content: "Data Analytics y Business Intelligence", 
          porcentage: "95%", 
          value: "95" },
        { id: "DigitalTransformation_skill", 
          content: "Transformación Digital e Innovación", 
          porcentage: "95%", 
          value: "95" },
        {
          id: "AgileProjectMgmt_skill",
          content: "Gestión de Proyectos Agile",
          porcentage: "90%",
          value: "90"
        },
        { id: "LeanSixSigma_skill", 
          content: "Lean & Six Sigma (Optimización de procesos)", 
          porcentage: "85%", 
          value: "85" },
        {
          id: "FinancialMgmt_skill",
          content: "Gestión Financiera y Análisis de P&L",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "ProductMgmt_skill",
          content: "Product Management",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "ProcessAutomation_skill",
          content: "Automatización de Procesos (Power Automate & Power Apps)",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "RiskMgmt_skill",
          content: "Evaluación y Gestión de Riesgos",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "ProblemSolving_skill",
          content: "Resolución de Problemas Complejos",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "AppliedAI_skill",
          content: "Inteligencia Artificial Aplicada (RAG)",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "AIEthicsPrivacy_skill",
          content: "AI Ethics & Data Privacy",
          porcentage: "40%",
          value: "40"
        }
      ],
      about_me: []
    };
  }

  componentDidMount() {
    // Agregar evento de scroll para animar las barras de progreso
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Remover evento al desmontar el componente
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!this.state.skillsAnimated) {
      const skillsSection = document.querySelector('.skill-mf');
      if (skillsSection) {
        const sectionPosition = skillsSection.getBoundingClientRect();
        const screenPosition = window.innerHeight;
        
        if (sectionPosition.top < screenPosition) {
          this.setState({ skillsAnimated: true });
          this.animateSkills();
        }
      }
    }
  }

  animateSkills = () => {
    $('.progress-bar').each(function() {
      const width = $(this).attr('aria-valuenow') + '%';
      $(this).css('width', '0%');
      $(this).animate({ width: width }, 1000);
    });
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="about-me">
                      <div className="title-box-2">
                        <h5 className="title-left">Habilidades</h5>
                      </div>
                      <div className="skill-mf">
                        {this.state.skills.map(skill => {
                          return (
                            <div className="skill-item" key={skill.id}>
                              <div className="skill-name">
                                <span>{skill.content}</span>
                              </div>
                              <div className="progress-container">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: this.state.skillsAnimated ? skill.porcentage : '0%' }}
                                    aria-valuenow={skill.value}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="skill-value">
                                <span>{skill.porcentage}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
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
