import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     J'ai débuté mes études à Montpellier en réalisant un <a href="https://iutdepinfo.iutmontp.univ-montp2.fr/vitrine/" target="_blank">DUT</a>,
                     puis une <a href="https://iutdepinfo.iutmontp.univ-montp2.fr/vitrine/" target="_blank">Licence</a> et enfin
                     un <a href="https://iutdepinfo.iutmontp.univ-montp2.fr/vitrine/" target="_blank">Master</a>.
                     Ce master a été l'occasion de m'imitier à la recherche en réalisant un stage au <a href="https://www.lirmm.fr/" target="_blank">LIRMM</a>
                     (équipe <a href="https://www.lirmm.fr/equipes/ADVANSE/" target="_blank">ADVANSE</a>).
                  </p>
                  <p>
                     Suite à ce stage, j'ai préparé une thèse à l'<a href="https://iutdepinfo.iutmontp.univ-montp2.fr/vitrine/" target="_blank">INRIA Rennes-Bretagne Atlantique</a> ayant pour sujet "Détection de fausses informations sur les réseaux sociaux".
                     Cette thèse a été soutenue avec succès le 1er avril 2019.
                  </p>
                  <p>
                     Bien que l'informatique me passionne, je passe mon temps libre à réaliser d'autres activités :
                     <ul>
                        <li><i className="fa-solid fa-children fa-fw"></i> Encadrement en colonie de vacances en tant qu'animateur puis directeur</li>
                        <li><i className="fa-solid fa-person-skating fa-fw"></i> Enseignement de la pratique du roller et du skate</li>
                        <li><i className="fa-solid fa-dog fa-fw"></i> Activité de bénévole dans un refuge la SPA</li>
                     </ul>
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact</h2>
                        <p className="address">
                           <span>
                              <i class="fa-solid fa-id-card fa-fw"></i> {resumeData.name}
                           </span>
                           <br></br>
                           <span>
                              <i className="fa-solid fa-map fa-fw"></i> {resumeData.address}
                           </span>
                           <br></br>
                           <span>
                              <i class="fa-solid fa-mobile-screen fa-fw"></i> {resumeData.mobile}
                           </span>
                           <br></br>
                           <span>
                              <i class="fa-solid fa-sitemap fa-fw"></i> {resumeData.website}
                           </span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}