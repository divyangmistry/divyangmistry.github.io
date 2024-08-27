import { useEffect, useRef, useState } from "react";
import { aTagClick, dataImage } from "../utilits";
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


  // useEffect(() => {
  //   window.addEventListener("scroll", activeSkillProgress);
  // });
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
                <span>My Skills</span>
                <h3>
                  You Can Imagine
                  <br /> I Can Do
                </h3>
                <p>
                  I am working on a professional, visually sophisticated and
                  technologically proficient, responsive and multi-functional
                  creative personal resume portfolio template Aali
                </p>
              </div>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              {/* <div className="portfolio_list">
                <ul className="gallery_zoom">
                  <li className="filter-item detail">
                    <div className="list_inner">
                      <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/4.jpg" />
                  </div>
                      <div className="overlay" />
                      text
                      <div className="details">
                        <span>Detail</span>
                        <h3>Hippie Sabotage</h3>
                      </div>
                      <a
                        className="aali_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => setModal(1)}
                      />
                      <div className={modal === 1 ? "" : "hidden_content"}>
                        <ModalBox close={setModal}>
                          <div className="popup_details">
                            <div className="top_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                data-img-url="img/portfolio/4.jpg"
                              ></div>
                            </div>
                            <div className="portfolio_main_title">
                              <span>Detail</span>
                              <h3>Hippie Sabotage</h3>
                              <div></div>
                            </div>
                            <div className="main_details">
                              <div className="textbox">
                                <p>
                                  We live in a world where we need to move quickly
                                  and iterate on our ideas as flexibly as possible.
                                  Building mockups strikes the ideal balance ease of
                                  modification.
                                </p>
                                <p>
                                  Mockups are useful both for the creative phase of
                                  the project - for instance when {`you're`} trying
                                  to figure out your user flows or the proper visual
                                  hierarchy - and the production phase when they
                                  will represent the target product.
                                </p>
                              </div>
                              <div className="detailbox">
                                <ul>
                                  <li>
                                    <span className="first">Client</span>
                                    <span>Alvaro Morata</span>
                                  </li>
                                  <li>
                                    <span className="first">Category</span>
                                    <span>
                                      <a href="#">Detail</a>
                                    </span>
                                  </li>
                                  <li>
                                    <span className="first">Date</span>
                                    <span>March 07, 2021</span>
                                  </li>
                                  <li>
                                <span className="first">Share</span>
                                <ul className="share">
                                  <li>
                                    <a href="#">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="#">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="#">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                                </ul>
                              </div>
                            </div>
                            <div className="additional_images">
                              <ul>
                                <li>
                                  <div className="list_inner">
                                    <div className="my_image">
                                      <img
                                        src="img/thumbs/4-2.jpg"
                                        alt="aali image"
                                      />
                                      <div
                                        className="main"
                                        data-img-url="img/portfolio/1.jpg"
                                      />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="list_inner">
                                    <div className="my_image">
                                      <img
                                        src="img/thumbs/4-2.jpg"
                                        alt="aali image"
                                      />
                                      <div
                                        className="main"
                                        data-img-url="img/portfolio/2.jpg"
                                      />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="list_inner">
                                    <div className="my_image">
                                      <img
                                        src="img/thumbs/4-2.jpg"
                                        alt="aali image"
                                      />
                                      <div
                                        className="main"
                                        data-img-url="img/portfolio/3.jpg"
                                      />
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </ModalBox>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
              <p>Development Framework</p>
              <div className="dodo_progress">
                <div className="progress_inner skillsInner___" data-value={86}>
                  <span>
                    <span className="label">React</span>
                    <span className="number">86%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={90}>
                  <span>
                    <span className="label">Angular</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={66}>
                  <span>
                    <span className="label">NodeJs</span>
                    <span className="number">66%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={66}>
                  <span>
                    <span className="label">.NET Core</span>
                    <span className="number">45%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={66}>
                  <span>
                    <span className="label">Ionic</span>
                    <span className="number">66%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={66}>
                  <span>
                    <span className="label">Flutter</span>
                    <span className="number">56%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
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
