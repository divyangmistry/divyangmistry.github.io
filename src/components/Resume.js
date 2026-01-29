import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = () => {
  useEffect(() => {
    jarallaxContent();
  }, []);
  return (
    <div className="aali_tm_section" id="resume">
      <div className="aali_tm_resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="dark"
              >
                {/* <span>Know More</span> */}
                <h3>My Resume</h3>
                <p>
                  I enjoy every step of the product creation process, from discussion and
                  collaboration to concept and execution
                </p>
              </div>
              <div className="content_inner">
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Education</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>BE Information Technology</h3>
                              <span>Saffrony Institute of Technology</span>
                            </div>
                            <div className="right">
                              <span>2014 - 2018</span>
                            </div>
                          </div>
                          <div className="text">
                            {/* <p>
                              Aali is a leading web design agency with an
                              award-winning design
                            </p> */}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Higher Secondary School</h3>
                              <span>Hiramani Higher Secondary School</span>
                            </div>
                            <div className="right">
                              <span>2012 - 2013</span>
                            </div>
                          </div>
                          <div className="text">
                            {/* <p>
                              Aali is a leading web design agency with an
                              award-winning design
                            </p> */}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Experience</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Lead Product Engineer (Acting TPM) & DevOps Architect</h3>
                              <span>Arishti Info Labs</span>
                            </div>
                            <div className="right">
                              <span>June 2023 - Present</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              <strong>Product Strategy & Execution:</strong> Direct end-to-end product strategy for cybersecurity
                              portfolio including "Advance Cyber Kiosk" and "Dorje" OT SIEM, ensuring alignment with market demands.
                            </p>
                            <p>
                              <strong>DevOps Architecture:</strong> Design and implement enterprise DevOps infrastructure using
                              Proxmox virtualization, QEMU/KVM, and automated CI/CD pipelines with Jenkins and Docker orchestration.
                            </p>
                            <p>
                              <strong>Infrastructure & Security:</strong> Configure enterprise-grade routers, firewalls, and OpenSource
                              VPN solutions; implement Snort-based intrusion detection and system hardening protocols.
                            </p>
                            <p>
                              <strong>Cross-Functional Leadership:</strong> Lead DevOps, Network Administration, Operations, and
                              Customer Success teams; conduct Angular and .NET code reviews.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Senior Software Engineer & Product Lead</h3>
                              <span>Arishti Info Labs</span>
                            </div>
                            <div className="right">
                              <span>June 2021 - June 2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              <strong>R&D & Custom Linux:</strong> Spearheaded R&D of security products; developed custom Linux
                              distributions using Yocto for embedded cybersecurity appliances.
                            </p>
                            <p>
                              <strong>Product Delivery:</strong> Managed full lifecycle of hardware-integrated forensic kiosk
                              (Advance Cyber Kiosk) and OT traffic monitoring tool (Dorje SIEM) with frontend UX and backend logic.
                            </p>
                            <p>
                              <strong>CI/CD Implementation:</strong> Planned and created CI/CD pipelines for automated testing,
                              building, and deployment of security applications.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Software Developer</h3>
                              <span>TechAvidus</span>
                            </div>
                            <div className="right">
                              <span>Feb 2020 - June 2021</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Collaborated on scalable Node.js and Angular applications for enterprise clients
                              with focus on performance optimization. Provided technical mentorship to junior
                              developers, improving team velocity and establishing code quality standards.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Frontend Developer</h3>
                              <span>Nimblechapps</span>
                            </div>
                            <div className="right">
                              <span>Oct 2019 - Feb 2020</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Executed frontend development for diverse client projects using React and Node.js
                              with modern tooling and best practices.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Frontend Developer</h3>
                              <span>Webelight Solutions</span>
                            </div>
                            <div className="right">
                              <span>July 2018 - Oct 2019</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Developed responsive web interfaces and optimized application performance using
                              Angular frameworks for various client projects.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="media" data-background-style="video">
          <div
            className="video jarallax"
            data-speed={0}
            data-jarallax-video="https://vimeo.com/337293658"
          />
          <div
            className="image jarallax"
            data-speed={0}
            data-img-url="img/about/2.jpg"
          />
          <span
            className="square moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Resume;
