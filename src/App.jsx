import { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
// import "./App.css";
import "./index.css";
import Carousel from "./component/carousel";
import { FaHeart, FaPause, FaPlay } from "react-icons/fa";
import Confess from "./component/Confess";
import Preload from "./component/preload";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = document.querySelector("#myMusic");
  const btnAudio = document.querySelector(".btn-audio");
  const body = document.querySelector("body");

  const onClickPreload = () => {
    if (audio !== null) {
      body.classList.add("disappear");
      audio.play();
    }
    // console.log(audio);
    setIsPlaying(true);
  };

  const onClickMusicBtn = () => {
    setIsPlaying((prevState) => !prevState);

    return audio.paused ? audio.play() : audio.pause();
  };

  useEffect(() => {
    window.addEventListener("load", onClickPreload);
    return () => document.removeEventListener("load", onClickPreload);
  }, []);

  return (
    <>
      <Preload onClick={onClickPreload} />
      <header>
        <h1 className="title">Special for You</h1>
        <h2>Hai Kamu!</h2>
        <h2>
          Scroll kesamping yaa
          <FaHeart />
        </h2>
      </header>

      <main>
        <Confess />
        <Carousel />
      </main>
      <div className="btn-container">
        <button className="btn-audio" onClick={onClickMusicBtn}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <footer>
        Created w/
        <FaHeart /> <span> for my Kaaa 🥰</span>
      </footer>
      <audio id="myMusic">
        <source src="/assets/audio/thousand_years.mp3" type="audio/mpeg" />
        <source src="/assets/audio/thousand_years.ogg" type="audio/ogg" />
      </audio>
    </>
  );
}

export default App;
