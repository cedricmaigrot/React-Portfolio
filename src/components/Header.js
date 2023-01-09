import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">A propos</a></li>
              <li><a className="smoothscroll" href="#resume">CV</a></li>
              {/* <li><a className="smoothscroll" href="#portfolio">Travaux</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Je suis {resumeData.name}.</h1>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
                Actuellement Data Scientist chez <a href="https://www.ose-engineering.fr/" target="_blank">OSE Engineering</a>.
                Après la réalisation d'une thèse en informatique à l'
                <a href="https://www.irisa.fr/" target="_blank">IRISA</a>,
                j'ai souhaité quitter le monde académique pour mettre en application
                mes connaissances pour des données et sujets réels.
              </h3>
              <hr />
              <ul className="social">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank"><i className={item.className}></i></a>
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}