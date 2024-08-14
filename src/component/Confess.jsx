import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MdSwipeLeft } from "react-icons/md";

function Confess() {
  return (
    <Splide
      className="confess"
      options={{
        drag: "free",
        pagination: false,
        arrows: false,
      }}
    >
      <SplideSlide>
        <div className="gif-container">
          <img src="/assets/img/sample_gif6_crop.gif" />
          <p className="swipe">
            Swipe
            <MdSwipeLeft />
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <p>Kaaa sayaangkuuu....</p>
      </SplideSlide>
      <SplideSlide>
        <p>Kamu tau ga sayang?</p>
      </SplideSlide>
      <SplideSlide>
        <p>
          Aku selalu menganggap bahwa pertemuan dengan kamu adalah salah satu
          kado terindah yang aku dapatkan di tahun 2024 ini ✨
        </p>
      </SplideSlide>
      <SplideSlide>
        <p>Aku merasa sangat beruntung dicintai oleh kamu sayaang 🥺</p>
      </SplideSlide>
      <SplideSlide>
        <p>Maafin aku ya sayang ☹️....</p>
      </SplideSlide>
      <SplideSlide>
        <p>terkadang aku masih membuat kamu merasa sedih 🥺</p>
      </SplideSlide>
      <SplideSlide>
        <p>Merasa kesal🥺...</p>
      </SplideSlide>
      <SplideSlide>
        <p>marah🥺...</p>
      </SplideSlide>
      <SplideSlide>
        <p>kecewa🥺... </p>
      </SplideSlide>
      <SplideSlide>
        <p>dan bahkan menangis🥺... </p>
      </SplideSlide>
      <SplideSlide>
        <p>
          Aku selalu berusaha untuk selalu membuat kamu bahagia dalam menjalani
          hubungan ini sayaang 🥺{" "}
        </p>
      </SplideSlide>
      <SplideSlide>
        <p>dan aku yakin kamu juga merasakan hal ituu... </p>
      </SplideSlide>
      <SplideSlide>
        <p>Karena aku... </p>
      </SplideSlide>
      <SplideSlide>
        <p>aku jatuh cinta sejatuh-jatuhnya sama kamu sayaang 💖💖 </p>
      </SplideSlide>
      <SplideSlide>
        <p>
          Kamu adalah wanita terbaik dan terindah yang pernah hadir di dalam
          hidup aku 💖💖{" "}
        </p>
      </SplideSlide>
      <SplideSlide>
        <p>I promise you... </p>
      </SplideSlide>
      <SplideSlide>
        <p>I will love you and support you in every possible way i could 🥰 </p>
      </SplideSlide>
      <SplideSlide>
        <p>Because.... </p>
      </SplideSlide>
      <SplideSlide>
        <p>You are my dearest friend 🥰 </p>
      </SplideSlide>
      <SplideSlide>
        <p>My deepest love 💖 </p>
      </SplideSlide>
      <SplideSlide>
        <p>and the best part of me ✨🌕💫 </p>
      </SplideSlide>
      <SplideSlide>
        <p>I love you in every universe sayaang 💐✨💖🌕🌸🪐✨❤️‍🔥💖🖤🌗🌸 </p>
      </SplideSlide>
      <SplideSlide>
        <div className="gif-carousel">
          <img src="/assets/img/test_gif2.gif" />
          <p className="caption">Hadiah buat kamu</p>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Confess;
