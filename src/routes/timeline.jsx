import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lead Optical Transceiver Firmware Engineer at Jabil Singapore  <span>Aug 2025 - Present</span></h2>
                        <p> Design and develop high-speed optical transceivers, including 100G, 200G, 400G, 800G, and 1.8T products. Responsible for developing software to support firmware regression testing and implementing firmware interfaces between digital signal processors (DSP) and power management ICs (PMIC) to optimize system performance and reliability.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Research Software Engineer at Dyson Singapore  <span>Oct 2023 - Aug 2025</span></h2>
                        <p> I mainly working on the research projects as part of a team whilst mentoring graduates and new team members Reviewing relevant articles, papers and patents and meeting with suppliers to meet product requirements. Integrated embedded Linux software for demonstration rigs to prove feasibility of new technologies and products. Implemented machine learning algorithms utilizing the SoC's NPU API to significantly enhance CPU efficiency. Mastered microcontroller Software Development Kits (SDKs) and embedded toolchains, with a deep focus on optimizing low-level hardware integration and high-performance application-level code. Led the transformation of legacy Make build systems to modern, robust CMake setups, driving significant improvements in build efficiency, scalability, and cross-platform portability.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Firmware Engineer at Scooterson <span>June 2023 - Oct 2023</span></h2>
                        <p> I help to develop IOT firmware for the Electrical vehicles using C++. I have experience using Google test framework for unit testing and functional testing. Build and deploy backend core services for consumers application and Factory application using NodeJs and postgress. Implemented push notification services using FCM firebase APIs. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Firmware Engineer II - Senior Firmware Engineer at Thermofisher <span>Nov 2020 - June 2023</span></h2>
                        <p>I designed and implemented embedded firmware using C, C++ and Python for the life science instruments. Perform design and code review to meet firmware quality. Development of thermal control system to meet instrument system thermal performance specification. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Firmware Engineer I at Toshiba TEC <span>Apr 2019 - Nov 2020</span></h2>
                        <p> I have invloved in design, development, testing and support of Printers Firmware. Program Design, coding and debugging of a product Making a software test plan and specification of a product. Assigned to design and develop programmable content in electronic hardware devices which provides instructions to device on how to operate. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Exclusive Master  <span>May 2018 - April 2019</span></h2>
                        <p>Design and develop automation software using PLC and C#. Developed the programming for a pick-and-place machinery's motor controller, with expertise in position teaching and motor control.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
