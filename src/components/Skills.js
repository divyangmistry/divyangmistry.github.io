import { useEffect, useRef, useState } from "react";
import { aTagClick, dataImage, activeSkillProgress } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";
// import Isotope from "isotope-layout";

const Skills = () => {

  // Isotope
  // const isotope = useRef();
  // const [filterKey, setFilterKey] = useState("*");
  // useEffect(() => {
  //   setTimeout(() => {
  //     isotope.current = new Isotope(".gallery_zoom", {
  //       itemSelector: ".filter-item",
  //       layoutMode: "fitRows",
  //     });
  //   }, 300);
  //   return () => isotope.current.destroy();
  // }, []);
  // useEffect(() => {
  //   dataImage();
  //   aTagClick();
  //   if (isotope.current) {
  //     filterKey === "*"
  //       ? isotope.current.arrange({ filter: `*` })
  //       : isotope.current.arrange({ filter: `.${filterKey}` });
  //   }
  // }, [filterKey]);
  // const handleFilterKeyChange = (key) => () => {
  //   setFilterKey(key);
  // };
  // popup
  // const [video, setVideo] = useState(false);
  // const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  // const showPopup = (name, src) => {
  //   setVideo(true);
  //   setVideoContent({ name, src });
  // };
  // Model Box
  const [modal, setModal] = useState(0);


  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });
  return (
    <div className="aali_tm_section" id="portfolio">
      <div className="aali_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="light"
              >
                <h3>
                  My Skills
                </h3>
                <p>
                  With a robust blend of technical expertise and project management acumen, I bring a comprehensive skill set to every project. My core competencies include:
                </p>
              </div>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="dodo_progress">
                <div onClick={() => setModal("01")} className="portfolio_popup progress_inner skillsInner___" data-value={80}>
                  <span>
                    <span className="label">Development Framework {">"} </span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div onClick={() => setModal("02")} className="portfolio_popup progress_inner skillsInner___" data-value={60}>
                  <span>
                    <span className="label">Development Languages {">"}</span>
                    <span className="number">60%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div onClick={() => setModal("03")} className="portfolio_popup progress_inner skillsInner___" data-value={80}>
                  <span>
                    <span className="label">Automation {">"}</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div onClick={() => setModal("04")} className="portfolio_popup progress_inner skillsInner___" data-value={70}>
                  <span>
                    <span className="label">Devops {">"}</span>
                    <span className="number">70%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div onClick={() => setModal("05")} className="portfolio_popup progress_inner skillsInner___" data-value={85}>
                  <span>
                    <span className="label">Networking {">"}</span>
                    <span className="number">85%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div onClick={() => setModal("06")} className="portfolio_popup progress_inner skillsInner___" data-value={68}>
                  <span>
                    <span className="label">Project Management {">"}</span>
                    <span className="number">68%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div onClick={() => setModal("07")} className="portfolio_popup progress_inner skillsInner___" data-value={90}>
                  <span>
                    <span className="label">Creative Tools {">"}</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={modal === "01" ? "" : "hidden_content"}>
                <ModalBox close={setModal}>
                  <div className="popup_details">
                    <div className="portfolio_main_title">
                      <span>Detail</span>
                      <h3>Development Framework</h3>
                      <div></div>
                    </div>
                    <div className="dodo_progress">
                      <div className="popbox_progress_inner skillsInner___" data-value={85}>
                        <span>
                          <span className="label">React</span>
                          <span className="number">85%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={80}>
                        <span>
                          <span className="label">Angular</span>
                          <span className="number">80%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={85}>
                        <span>
                          <span className="label">NodeJs</span>
                          <span className="number">85%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={65}>
                        <span>
                          <span className="label">.NET Core</span>
                          <span className="number">65%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={75}>
                        <span>
                          <span className="label">Ionic</span>
                          <span className="number">75%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={50}>
                        <span>
                          <span className="label">Flutter</span>
                          <span className="number">50%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBox>
              </div>

              <div className={modal === "02" ? "" : "hidden_content"}>
                <ModalBox close={setModal}>
                  <div className="popup_details">
                    <div className="portfolio_main_title">
                      <span>Detail</span>
                      <h3>Development Languages</h3>
                      <div></div>
                    </div>
                    <div className="dodo_progress">
                      <div className="popbox_progress_inner skillsInner___" data-value={90}>
                        <span>
                          <span className="label">JavaScript</span>
                          <span className="number">90%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={85}>
                        <span>
                          <span className="label">TypeScript</span>
                          <span className="number">85%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={75}>
                        <span>
                          <span className="label">C#</span>
                          <span className="number">75%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={80}>
                        <span>
                          <span className="label">Python</span>
                          <span className="number">80%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBox>
              </div>

              <div className={modal === "03" ? "" : "hidden_content"}>
                <ModalBox close={setModal}>
                  <div className="popup_details">
                    <div className="portfolio_main_title">
                      <span>Detail</span>
                      <h3>Automation</h3>
                      <div></div>
                    </div>
                    <div className="dodo_progress">
                      <div className="popbox_progress_inner skillsInner___" data-value={80}>
                        <span>
                          <span className="label">Bash Scripting</span>
                          <span className="number">80%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={85}>
                        <span>
                          <span className="label">Power shell scripting</span>
                          <span className="number">70%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBox>
              </div>

              <div className={modal === "04" ? "" : "hidden_content"}>
                <ModalBox close={setModal}>
                  <div className="popup_details">
                    <div className="portfolio_main_title">
                      <span>Detail</span>
                      <h3>Devops</h3>
                      <div></div>
                    </div>
                    <div className="dodo_progress">
                      <div className="popbox_progress_inner skillsInner___" data-value={90}>
                        <span>
                          <span className="label">Docker</span>
                          <span className="number">90%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={85}>
                        <span>
                          <span className="label">Jenkins</span>
                          <span className="number">85%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={70}>
                        <span>
                          <span className="label">Kubernetes</span>
                          <span className="number">70%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={60}>
                        <span>
                          <span className="label">Grafana</span>
                          <span className="number">60%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={65}>
                        <span>
                          <span className="label">Prometheus</span>
                          <span className="number">65%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBox>
              </div>

              <div className={modal === "05" ? "" : "hidden_content"}>
                <ModalBox close={setModal}>
                  <div className="popup_details">
                    <div className="portfolio_main_title">
                      <span>Detail</span>
                      <h3>Networking</h3>
                      <div></div>
                    </div>
                    <div className="dodo_progress">
                      <div className="popbox_progress_inner skillsInner___" data-value={90}>
                        <span>
                          <span className="label">Router</span>
                          <span className="number">90%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={95}>
                        <span>
                          <span className="label">Firewall</span>
                          <span className="number">95%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={85}>
                        <span>
                          <span className="label">Switch</span>
                          <span className="number">85%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={80}>
                        <span>
                          <span className="label">Windows Server</span>
                          <span className="number">80%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={90}>
                        <span>
                          <span className="label">System Operations</span>
                          <span className="number">90%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={75}>
                        <span>
                          <span className="label">NAS</span>
                          <span className="number">75%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={85}>
                        <span>
                          <span className="label">Networking Administration</span>
                          <span className="number">85%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBox>
              </div>

              <div className={modal === "06" ? "" : "hidden_content"}>
                <ModalBox close={setModal}>
                  <div className="popup_details">
                    <div className="portfolio_main_title">
                      <span>Detail</span>
                      <h3>Project Management</h3>
                      <div></div>
                    </div>
                    <div className="dodo_progress">
                      <div className="popbox_progress_inner skillsInner___" data-value={65}>
                        <span>
                          <span className="label">Jira</span>
                          <span className="number">65%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={70}>
                        <span>
                          <span className="label">Scrum</span>
                          <span className="number">70%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={85}>
                        <span>
                          <span className="label">Planning</span>
                          <span className="number">85%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={80}>
                        <span>
                          <span className="label">Structuring</span>
                          <span className="number">80%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBox>
              </div>

              <div className={modal === "07" ? "" : "hidden_content"}>
                <ModalBox close={setModal}>
                  <div className="popup_details">
                    <div className="portfolio_main_title">
                      <span>Detail</span>
                      <h3>Creative Tools</h3>
                      <div></div>
                    </div>
                    <div className="dodo_progress">
                      <div className="popbox_progress_inner skillsInner___" data-value={80}>
                        <span>
                          <span className="label">Photography / Videography</span>
                          <span className="number">80%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={90}>
                        <span>
                          <span className="label">Adobe Photoshop, Lightroom</span>
                          <span className="number">90%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={85}>
                        <span>
                          <span className="label">Adobe Premiere Pro, After Effects</span>
                          <span className="number">85%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                      <div className="popbox_progress_inner skillsInner___" data-value={80}>
                        <span>
                          <span className="label">Corel Draw</span>
                          <span className="number">80%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBox>
              </div>

            </div>
          </div>
        </div>
        <span
          className="border moving_effect"
          data-direction="x"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Skills;
