import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>
                        <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                      </p>
                      <p>
                        <i className={item.AchievementsIcon}></i> {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>
                        <em className="date">{item.MonthOfStarting} {item.YearOfStarting}</em>
                        <span> - </span>
                        <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                      </p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="bars">

              <div className="skills">
                <div className='badge react'>
                  <img alt="react" src="/images/logo/react.png" />
                  <span>React</span>
                </div>

                <div className='badge python'>
                  <img alt="python" src="/images/logo/python.png" />
                  <span>Python</span>
                </div>

                <div className='badge html5'>
                  <img alt="html5" src="/images/logo/html5.png" />
                  <span>HTML5</span>
                </div>

                <div className='badge css3'>
                  <img alt="css3" src="/images/logo/css3.png" />
                  <span>CSS3</span>
                </div>

                <div className='badge java'>
                  <img alt="java" src="/images/logo/java.png" />
                  <span>JAVA</span>
                </div>

                <div className='badge php'>
                  <img alt="php" src="/images/logo/php.png" />
                  <span>PHP</span>
                </div>

                <div className='badge shell'>
                  <img alt="shell" src="/images/logo/shell.png" />
                  <span>Shell</span>
                </div>

                <div className='badge mysql'>
                  <img alt="mysql" src="/images/logo/mysql.png" />
                  <span>mySQL</span>
                </div>

                <div className='badge mongodb'>
                  <img alt="mongodb" src="/images/logo/mongodb.png" />
                  <span>mongoDB</span>
                </div>

                <div className='badge git'>
                  <img alt="git" src="/images/logo/git.png" />
                  <span>Git</span>
                </div>

                <div className='badge tableau'>
                  <img alt="tableau" src="/images/logo/tableau.png" />
                  <span>Tableau</span>
                </div>

              </div>

              <div className="skills">

                <div className='badge'>
                  <img alt="ia" src="/images/logo/ia.png" />
                  <span>Apprentissage automatique</span>
                </div>

                <div className='badge'>
                  <img alt="ia" src="/images/logo/data.png" />
                  <span>Analyse des données</span>
                </div>

                <div className='badge'>
                  <img alt="ia" src="/images/logo/taln.png" />
                  <span>Traitement Automatique des Langues</span>
                </div>

                <div className='badge'>
                  <img alt="ia" src="/images/logo/image.png" />
                  <span>Vision par ordinateur</span>
                </div>

                <div className='badge'>
                  <img alt="ia" src="/images/logo/project.png" />
                  <span>Gestion de projet</span>
                </div>

                <div className='badge'>
                  <img alt="ia" src="/images/logo/agile.png" />
                  <span>Méthodes agiles</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </section>
    );
  }
}