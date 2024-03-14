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
                    <p> I am a former physics student from Western Illinois University (WIU). I have completed my Master of Science in physics from WIU in 2017. In order to equip myself with frontier technology I took an initiative and enrolled in a part-time Master of Science program specialized in Deep Learning for Industry (Industry 4.0) offered by National University of Singapore (NUS). Currently, I am working as a Senior Software Developer in Dyson that design and develop household appliances. My current job scope is to develop software for the new design rigs. The blend of the knowledge from various fields have well prepared me for a software and system level architecture design. </p>
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
                    <p>I have worked as an embedded software developer for Toshiba TEC Singapore, Thermofisher Scientific, Scooterson and Dyson. I have been involved in multiple projects, including motion controller, thermal PID controller, lead and participate in electrical and system integration design. Meanwhile, I have participated in designing the software architecture for embedded systems and devices, including defining the hardware interfaces, selecting appropriate microcontrollers, and designing data structures and algorithms. With my deep understanding of embedded Linux, bash/shell scripting and proficiency in developing foundational code, I am well-equipped to spearhead the creation of robust and tailored solutions that will elevate our team's projects to new heights. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-star-outline" />
                </span>
                <div className="desc">
                    <h3>Research work</h3>
                    <p> In the past, I have been involved in stellar astrophysics research under supervision of professor Esteban D. Araya and received several grants and scholarships. Although I have graduated from WIU in 2017, because of my passion toward the research in the area of astrophysics, I continue to work closely with my advisor in WIU, currently I am Western Illinous University (WIU) affliation and have 3 papers published in the astronomical journal. I have collaborated with students and professors in published manuscript using LaTeX. I have performed data analysis and data reduction of observed data by leveraging the use of IDL. I created models of multiple molecular transition spectral lines using RADEX code and Python scripts to study and understand physical conditions of distant objects. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3> Skills and Knowledge </h3>
                    <p> On the other hand, I have prepared myself with good fundamental knowledge in deep learning and machine learning techniques when pursuing my master program in NUS. Web platform programming languages such as Nodejs, Javascript and SQL are mostly self-taught. I make use of these skill sets to develop a web-based smart home feature for the capstone project. I have completed additonal courses such as Introduction to Machine Learning, Deep Learning, SQL, Foundations: Data, Data, Everywhere, Python for Data Science, AI & Development, Data Visualization with Python, Machine Learning with Python, Mathematics for Machine Learning: Linear Algebra, and Using Python to Access Web Data. These certifications were obtained from reputable institutions such as Udacity and Coursera, between 2021 and 2022. </p>
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
