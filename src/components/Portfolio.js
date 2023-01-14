import React, { Component } from 'react';


export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    {/* <img src="images/portfolio/coffee.jpg" className="item-img" /> */}
                    <div className="portfolio-item-meta">
                      <h5>Prévention des risques de suicide chez les adolescents cyberharcelés</h5>
                    </div>
                  </a>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    {/* <img src="images/portfolio/coffee.jpg" className="item-img" /> */}
                    <div className="portfolio-item-meta">
                      <h5>Détection de fausses informations sur les réseaux sociaux</h5>
                    </div>
                  </a>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    {/* <img src="images/portfolio/coffee.jpg" className="item-img" /> */}
                    <div className="portfolio-item-meta">
                      <h5>Moteur de recherche pour enfants</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}