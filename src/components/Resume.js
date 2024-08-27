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
                              <h3>Chief Information Officer</h3>
                              <span>Arishti Info Labs</span>
                            </div>
                            <div className="right">
                              <span>2023 - Persent</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              As Chief Information Officer (CIO), my responsibilities included overseeing
                              office and cloud infrastructure management, which encompassed leading
                              departments such as DevOps and Network Administration. Additionally, I
                              supervised Operations and Customer Success Management departments.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Sr. Software Developer</h3>
                              <span>Arishti Info Labs</span>
                            </div>
                            <div className="right">
                              <span>2021 - 2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              I commenced my career as a Senior Software Developer specializing in the
                              research and development of next-generation cybersecurity products
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Jr. Software Developer</h3>
                              <span>TechAvidus</span>
                            </div>
                            <div className="right">
                              <span>2021 - 2021</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              In my capacity as a Junior Software Developer, my primary responsibilities
                              included contributing to the development of Node.js and Angular projects as
                              assigned, while also providing guidance and assistance to new interns in
                              accomplishing their tasks.
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
                              <span>2019 - 2021</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              As a Frontend Developer, my role encompassed successfully executing tasks
                              across projects involving Node.js, Angular, and React technologies.
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
                              <span>2019 - 2018</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              As a Frontend Developer, my role encompassed successfully executing tasks
                              across projects involving Node.js, Angular, and React technologies
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
