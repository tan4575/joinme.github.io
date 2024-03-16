import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/me.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Tan Wei Siang</a></h1>
              <span className="email"><i className="icon-mail"></i> tan4575@hotmail.com/ws-tan@wiu.edu</span>
              <span className="phone"><i className="icon-phone"></i> +6597826269 </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/tan4575" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/weitannn/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/wei-siang-tan/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/tan4575" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
              <p><small>
                Image Credit & Copyright: <a href="https://public.nrao.edu/" target="_blank" rel="noopener noreferrer">NRAO</a>, <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA</a>, <a href="https://www.esa.int/" target="_blank" rel="noopener noreferrer">ESA</a>, <a href="https://science.nasa.gov/mission/hubble/" target="_blank" rel="noopener noreferrer">Hubble</a>, <a href="https://stevecullenmedia.com/about/" target="_blank" rel="noopener noreferrer"> Steve Cullen </a>, <a href="https://www.instagram.com/angrytheinch/" target="_blank" rel="noopener noreferrer"> Mia Stålnacke </a>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
