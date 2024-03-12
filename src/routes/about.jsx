import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p> I am a former physics student from Western Illinois University (WIU). I have completed my Master of Science in physics from WIU in 2017. In order to equip myself with frontier technology I took an initiative and enrolled in a part-time Master of Science program (Industry 4.0) offered by National University of Singapore (NUS). Currently, I am working as a Senior Software Developer in a Dyson that desgin and develop household appliances. My current job scope is to develop software for the new design rig. The blend of the knowledge from various fields have well prepared me for a software and system level architecture design. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Experiences</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3> Firmware Engineer </h3>
                    <p>I have worked as an embedded software developer for Toshiba TEC Singapore and Thermofisher Scientific. I have been involved in multiple projects, including motion controller, thermal PID controller, lead and participate in electrical and system integration design. Meanwhile, I have participated in designing the software architecture for embedded systems and devices, including defining the hardware interfaces, selecting appropriate microcontrollers, and designing data structures and algorithms</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Research work</h3>
                    <p>While conducting my studies at WIU I have been involved in astrophysics research. Although I have graduated from WIU in 2017, because of my passion toward the research in the area of astrophysics, I continue to work closely with my advisor in WIU, currently I have 3 papers published in the astronomical journal. On the other hand, I have prepared myself with good fundamental knowledge in deep learning and machine learning techniques when pursuing my master program in NUS. Web platform programming languages such as Nodejs, Javascript and SQL are mostly self-taught. I make use of these skill sets to develop a web-based smart home feature for the capstone project. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3> Publication </h3>
                    <p> Conducted research projects about stellar astrophysics extend beyond graduation, under supervision of professor Esteban D. Araya and received several grants and scholarships. Collaborated with students and professors in published manuscript using LaTeX. Performed data analysis and data reduction of observed data by leveraging the use of IDL. Created models of multiple molecular transition spectral lines using RADEX code and Python scripts to study and understand physical conditions of distant objects. </p>
                </div>
                </div>
            </div>
            {}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
