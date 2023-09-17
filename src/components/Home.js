import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoFile from "../video-bg/home(1080p).mp4";
import zodiac from "../logo/zodiac.png";
import enter from "../logo/enter.png";
import tarot from "../logo/tarot.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <VideoBackground />
      <HomeTitleAndButtons />
    </div>
  );
}

function VideoBackground() {
  return (
    <div className="video-container">
      <video className="video-bg" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  );
}

function HomeTitleAndButtons() {
  const [showButton, setShowButton] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  function handleLogoClick() {
    setShowButton(true);
    setShowTitle(false);
  }

  function LogoButton() {
    return (
      <button className="enter-button" onClick={handleLogoClick}>
        <img src={enter} alt="Logo" />
      </button>
    );
  }
  return (
    <div className="home-title">
      {showTitle && <h1>Isis Mystic Portal</h1>}
      {showButton ? <PageButtons /> : <LogoButton />}
      {showTitle && <h3>Everything Happens for a Reason</h3>}
    </div>
  );
}

function PageButtons() {
  return (
    <div className="page-buttons">
      <Link to="/tarot" className="button">
        <img src={tarot} alt="Tarot" />
      </Link>
      <Link to="/zodiac" className="button">
        <img src={zodiac} alt="Zodiac" />
      </Link>
    </div>
  );
}
