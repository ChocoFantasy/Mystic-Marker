
// import "../css/style.css";
import "./style.scss";
import Navbar from "./component/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Story from "./pages/Storys";
import Map from "./pages/Map";
import Contact from "./pages/Contact";
import Forum from "./pages/Forum";
import GlowingText from "./component/GlowingText";
import Intro2Component from "./component/Intro2Component";
import Carousel from "./component/Carousel";
import ForumImg from "./component/ForumImg";
import Fog from "./component/Fog";
import SectionTitle from "./component/SectionTitle";
import Cursor from "./component/Cursor";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const slideTopRefs = useRef([]);
  const slideRightRefs = useRef([]);
  const slideLeftRefs = useRef([]);

  // 淡入動畫
  useEffect(() => {
    // 往上淡入
    slideTopRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });

    // 往右淡入
    slideRightRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });

    // 往左淡入
    slideLeftRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 200 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Cursor />
      <Routes>
        <Route
          path="/"
          element={
            <main className="home">
              <section className="banner">
                <Navbar />
            
                    <div className="fog-area-p">
                      <Fog className="purpleFog"/>
                    </div>
          
                <div id="fog-masked-g">
                  <div id="fog-rotate-g">
                    <div className="fog-area-g">
                      <Fog className="greenFog"/>
                    </div>
                  </div>
                </div>

                <div
                  ref={(el) => slideTopRefs.current.push(el)}
                  className="logoXL"
                >
                  <Link to="/">
                    <img id="mark" src="/images/LOGO.svg" alt="神秘座標" />
                    <img id="logoB" src="/images/logo_XL.svg" alt="神秘座標" />
                    <div className="p">
                      <GlowingText text="MYSTIC MARKERS" />
                    </div>
                  </Link>
                </div>
              </section>
              <section className="intro">
                <div id="intro1">
                  <div className="door">
                    <figure>
                      {" "}
                      <img
                        src="/images/door.png"
                        ref={(el) => slideRightRefs.current.push(el)}
                        alt="未知之門"
                      />
                    </figure>
                    <div
                      id="intro_Q"
                      ref={(el) => slideLeftRefs.current.push(el)}
                    >
                      <img
                        src="/images/intro_Q.svg"
                        alt="準備好要探索未知了嗎?"
                      />
                      <p>
                        這裡是通往神秘世界的入口，
                        <br />
                        你即將探索不為人知的領域。
                        <br />
                        深入幽暗的角落揭開真相。
                        <br />
                        這裡的每一個角落都充滿驚喜，
                        <br />
                        準備好面對未知的恐懼吧！
                        <br />
                      </p>
                    </div>
                  </div>
                 <img className="intro1fog-G" src="/images/intro1_greenfog.jpg" alt=""/>
                </div>
                <div id="intro2">
                  <div
                    className="title"
                    ref={(el) => slideTopRefs.current.push(el)}
                  >
                    <SectionTitle originalText="怪奇博物館" className="title" />
                    <h3>
                      精選靈異故事、都市傳說，帶你進入未知世界，享受身歷其境的驚悚與神秘氛圍。
                    </h3>
                  </div>
                  <Intro2Component />
                  <div ref={(el) => slideTopRefs.current.push(el)}>
                    <Carousel />
                  </div>
                </div>
                <div id="intro3">
                  <div
                    className="title"
                    ref={(el) => slideTopRefs.current.push(el)}
                  >
                    <SectionTitle originalText="靈異導航" className="title" />

                    <h3>
                      探索靈異地點，標記、收藏有趣的景點，並留下你的經歷與評論，發掘身邊未知的神秘之地。
                    </h3>
                  </div>

                  <div className="map-area">
                    <img
                      src="/images/map_intro.jpg"
                      ref={(el) => slideRightRefs.current.push(el)}
                      alt="Map Intro"
                    />
                    <div className="map-intro">
                      <div ref={(el) => slideLeftRefs.current.push(el)}>
                        <h4>1.</h4>
                        <p>按鈕切換地圖 鬧鬼地點/收驚廟宇</p>
                      </div>
                      <div ref={(el) => slideLeftRefs.current.push(el)}>
                        <h4>2.</h4>
                        <p>可搜尋地點&座標</p>
                      </div>
                      <div ref={(el) => slideLeftRefs.current.push(el)}>
                        <h4>3.</h4>
                        <p>可收藏地點(需登入帳號)</p>
                      </div>
                      <div ref={(el) => slideLeftRefs.current.push(el)}>
                        <h4>4.</h4>
                        <p>可直接在地圖上標註地點</p>
                      </div>
                      <div ref={(el) => slideLeftRefs.current.push(el)}>
                        <h4>5.</h4>
                        <p>瀏覽地點與相關評論</p>
                      </div>
                    </div>
                  </div>

                  <div id="intro4">
                    <div
                      className="title"
                      ref={(el) => slideTopRefs.current.push(el)}
                    >
                      <SectionTitle originalText="鬼影探索" className="title" />
                      <h3>
                        靈異愛好者的專屬交流空間，分享靈異故事、實地探險經驗，
                        <br />
                        並討論各類神秘現象，找到志同道合的朋友。
                      </h3>
                    </div>
                    <div ref={(el) => slideTopRefs.current.push(el)}>
                      <ForumImg />
                    </div>
                  </div>
                </div>
              </section>
              <footer>
                <div className="content">
                  <div className="left">
                    <ul className="link">
                      <li>
                        <Link to="/Story">怪奇博物館</Link>
                      </li>
                      <li>
                        <Link to="/Map">靈異導航</Link>
                      </li>
                      <li>
                        <Link to="/Forum">鬼影探索</Link>
                      </li>
                      <li>
                        <Link to="/Contact">聯絡我們</Link>
                      </li>
                    </ul>
                    <small>
                      &copy; 2024 Mystic Markers. All Rights Reserved.
                    </small>
                  </div>
                  <img src="/images/LOGO_footer.svg" alt="神秘座標" />
                </div>
              </footer>
            </main>
          }
        />

        <Route path="/Story" element={<Story />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
