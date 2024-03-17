import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Publications</span>
								<h2 className="colorlib-heading animate-box">Recent Publications</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/g34+0.15.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://iopscience.iop.org/article/10.3847/1538-4357/acde7b">Excited Hydroxyl Outflow in the High-mass Star-forming Region G34.26+0.15</a></h3>
											<h4>Abstract</h4>
											<span>
											G34.26 + 0.15 is a region of high-mass star formation that contains a broad range of young stellar objects in different stages of evolution, including a hot molecular core, hypercompact H ii regions, and a prototypical cometary ultracompact H ii region. Previous high-sensitivity single-dish observations by our group resulted in the detection of broad 6035 MHz OH absorption in this region; the line showed a significant blueshifted asymmetry indicative of molecular gas expansion. We present high-sensitivity Karl G. Jansky Very Large Array (VLA) observations of the 6035 MHz OH line conducted to image the absorption and investigate its origin with respect to the different star formation sites in the region. In addition, we report detection of 6030 MHz OH absorption with the VLA and further observations of 4.7 GHz and 6.0 GHz OH lines obtained with the Arecibo Telescope. The 6030 MHz OH line shows a very similar absorption profile as the 6035 MHz OH line. We found that the 6035 MHz OH line absorption region is spatially unresolved at ~2'' scales, and it is coincident with one of the bright ionized cores of the cometary HII region that shows broad radio recombination line emission. We discuss a scenario where the OH absorption is tracing the remnants of a pole-on molecular outflow that is being ionized inside-out by the ultracompact HII region.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/ngc7538.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://academic.oup.com/mnras/article/504/2/1733/6211007?login=false">Thermal formaldehyde emission in NGC 7538 IRS 1</a></h3>
											<h4>Abstract</h4>
											<span>
											Spectral lines from formaldehyde (H2CO) molecules at cm wavelengths are typically detected in absorption and trace a broad range of environments, from diffuse gas to giant molecular clouds. In contrast, thermal emission of formaldehyde lines at cm wavelengths is rare. In previous observations with the 100m Robert C. Byrd Green Bank Telescope (GBT), we detected 2cm formaldehyde emission towards NGC 7538 IRS1 - a high-mass protostellar object in a prominent star-forming region of our Galaxy. We present further GBT observations of the 2 and 1cm H2CO lines to investigate the nature of the 2cm H2CO emission. We conducted observations to constrain the angular size of the 2cm emission region based on a East-West and North-South cross-scan map. Gaussian fits of the spatial distribution in the East-West direction show a deconvolved size (at half maximum) of the 2cm emission of 50arcsec ± 8arcsec. The 1cm H2CO observations revealed emission superimposed on a weak absorption feature. A non-LTE radiative transfer analysis shows that the H2CO emission is consistent with quasi-thermal radiation from dense gas (~10^5-10^6cm-3). We also report detection of four transitions of CH3OH (12.2, 26.8, 28.3, 28.9 GHz), the (8,8) transition of NH3 (26.5GHz), and a cross-scan map of the 13GHz SO line that shows extended emission (>50arcsec).
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/Arecibo-Fa2018.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://academic.oup.com/mnras/article/497/2/1348/5863227?login=false">High-sensitivity observations of molecular lines with the Arecibo Telescope</a></h3>
											<h4>Abstract</h4>
											<span>We report on one of the highest sensitivity surveys for molecular lines in the frequency range 6.0-7.4GHz conducted to date. The observations were done with the 305-m Arecibo Telescope toward a sample of 12 intermediate-/high-mass star-forming regions. We searched for a large number of transitions of different molecules, including CH3OH and OH. The low rms noise of our data (~5mJy for most sources and transitions) allowed detection of spectral features that have not been seen in previous lower sensitivity observations of the sources, such as detection of excited OH and 6.7GHz CH3OH absorption. A review of 6.7GHz CH3OH detections indicates an association between absorption and radio continuum sources in high-mass star-forming regions, although selection biases in targeted projects and low sensitivity of blind surveys imply incompleteness. Absorption of excited OH transitions was also detected toward three sources. In particular, we confirm a broad 6.035GHz OH absorption feature in G34.26+0.15 characterized by an asymmetric blueshifted wing indicative of expansion, perhaps a large-scale outflow in this HII region.</span>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/AuroraFlag_Stalnacke_6677.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/AuroraFlag_Stalnacke_6677.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/AuroraFlag_Stalnacke_6677.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Back to Top <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
