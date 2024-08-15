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
        <p>Kaaa sayang...</p>
      </SplideSlide>
      <SplideSlide>
        <p>Kamu tau ga?</p>
      </SplideSlide>
      <SplideSlide>
        <p>
          Aku selalu percaya bahwa pertemuan dengan kamu adalah salah satu
          kado terindah yang aku dapatkan di tahun 2024 ini ✨
        </p>
      </SplideSlide>
      <SplideSlide>
        <p>Aku merasa sangat sangat beruntung dicintai oleh kamu </p>
      </SplideSlide>
      <SplideSlide>
        <p>dan aku ga pernah mau kehilangan kamu sayang 🥺</p>
      </SplideSlide>
      <SplideSlide>
        <p>Jadi, Maafin aku yaa....</p>
      </SplideSlide>
      <SplideSlide>
        <p>Kalau terkadang aku masih membuat kamu merasa sedih 🥺</p>
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
          hubungan ini 🥺{" "}
        </p>
      </SplideSlide>
      <SplideSlide>
        <p>dan aku yakin kamu juga tau bahwa aku begitu </p>
      </SplideSlide>
      <SplideSlide>
        <p>Karena aku... </p>
      </SplideSlide>
      <SplideSlide>
        <p>Aku telah jatuh cinta sejatuh-jatuhnya sama kamu 💖💖 </p>
      </SplideSlide>
      <SplideSlide>
        <p>
          Kamu adalah wanita terbaik dan terindah yang pernah hadir di dalam
          hidup aku 💖💖{" "}
        </p>
      </SplideSlide>
      <SplideSlide>
        <p>Because of you... </p>
      </SplideSlide>
      <SplideSlide>
        <p>everything is the best and beautiful✨🌻 </p>
      </SplideSlide>
      <SplideSlide>
        <p>It's an honor to have you in my life 🌹 </p>
      </SplideSlide>
      <SplideSlide>
        <p>I promise to always adore you 🌕 </p>
      </SplideSlide>
      <SplideSlide>
        <p>Respect you 😇 </p>
      </SplideSlide>
      <SplideSlide>
        <p>Love you and support you in every possible way i could 🥰 </p>
      </SplideSlide>
      <SplideSlide>
        <p>Since you've already become... </p>
      </SplideSlide>
      <SplideSlide>
        <p>my dearest friend 🥰 </p>
      </SplideSlide>
      <SplideSlide>
        <p>My deepest love 💖 </p>
      </SplideSlide>
      <SplideSlide>
        <p>and the best part of me ✨🌕💫 </p>
      </SplideSlide>
      <SplideSlide>
        <p>I love you sayaang 💖 </p>
      </SplideSlide>
      <SplideSlide>
        <p>
          I love you in every universe
          💐✨💖🌕🌸🪐✨❤️‍🔥💖🖤🌗🌸
        </p>
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
