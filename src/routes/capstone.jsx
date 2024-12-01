import React, { Component } from 'react'
// import '../assests/output.js'
export default class CapstoneProject extends Component {
  render() {
    return (
      <div>
			<section className="colorlib-work" data-section="projects">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Projects</span>
							<h2 className="colorlib-heading animate-box">3D modeling</h2>
						</div>
					</div>
					<div className="row">
						<div className="blog-entry">
							<div className="desc">
								<div id="mcontainer"></div><div id="controls"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box">
							<p><a href="https://tan4575.github.io/joinme.github.io/#" className="btn btn-primary btn-lg btn-load-more">Back to Top <i className="icon-reload" /></a></p>
						</div>
					</div>
				</div>
			</section>
      </div>
    )
  }
}
