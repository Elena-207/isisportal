import React, { useState } from "react";
import videoFile from "../video-bg/video-2.mp4";
import "./TarotReading.css";
import { tarotCardMeanings } from "./TarotCardsMeanings";
import choice from "../logo/choice.png";
import love from "../logo/love.png";
import money from "../logo/money.png";
import career from "../logo/career.png";
import choose from "../logo/choose.png";
import another from "../logo/another.png";

export default function TarotReading(hasMadeChoice) {
  return (
    <div className="container">
      <VideoBack />
      
      <HomeTitleButton hasMadeChoice={hasMadeChoice}/>
    </div>
  );
}

function VideoBack() {
  return (
    <div className="video-container">
      <video className="video-bg" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  );
}

//Home Title Button
function HomeTitleButton() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [hasMadeChoice, setHasMadeChoice] = useState(false);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setShowCard(false);
    setHasMadeChoice(true);

    const cardsWithProperty = tarotCardMeanings.filter(
      (card) => card[option.toLowerCase()]
    );
    const randomCardIndex = Math.floor(
      Math.random() * cardsWithProperty.length
    );
    const randomCard = cardsWithProperty[randomCardIndex];

    setSelectedCard(randomCard);
  }

  function handleChooseCard() {

    setShowCard(true);
    const selectedCard = tarotCardMeanings.find(
      (card) => card.name === selectedOption
    );
    if (selectedCard) {
      const cardKeys = Object.keys(selectedCard).filter(
        (key) => key !== "name" && key !== "img"
      );
      const randomCardKey =
        cardKeys[Math.floor(Math.random() * cardKeys.length)];
      setSelectedCard(selectedCard[randomCardKey]);
    }
  }

  function handleGoBack() {
    setSelectedOption("");
    setSelectedCard("");
    setShowOptions(false);
    setHasMadeChoice(false);
  }

  return (
    <div className="home-title">
 {!hasMadeChoice && !showOptions && (
        <h1 className="title">Welcome to your Tarot Reading</h1>
      )}

      {!showOptions &&(
        <button className="choice-button" onClick={() => setShowOptions(true)}>
          <img src={choice} alt="Make Your Choice Button" />
        </button>
      )}
      {showOptions && !selectedOption && (
        <OptionsButton handleOptionClick={handleOptionClick} />
      )}
      {selectedOption && !showCard && (
        <ChooseYourCard handleChooseCard={handleChooseCard} />
      )}
      {showCard && selectedCard && (
        <CardMeaning
          selectedOption={selectedOption}
          selectedCard={selectedCard}
          handleGoBack={handleGoBack}
        />
      )}
    </div>
  );
}

function OptionsButton({ handleOptionClick }) {
  return (
    <div className="options">
      <button
        className="option-button"
        onClick={(e) => handleOptionClick("Love", e)}
      >
        <img src={love} alt="Love Button" />
      </button>
      <button
        className="option-button"
        onClick={(e) => handleOptionClick("Money", e)}
      >
        <img src={money} alt="Money Button" />
      </button>
      <button
        className="option-button"
        onClick={(e) => handleOptionClick("Career", e)}
      >
        <img src={career} alt="Career Button" />
      </button>
    </div>
  );
}

function ChooseYourCard({ handleChooseCard }) {
  return (
    <button className="choose-card-button" onClick={handleChooseCard}>
      <img src={choose} alt="Choose Card Button" />
    </button>
  );
}

function CardMeaning({ selectedCard, selectedOption, handleGoBack }) {
  return (
    <div className="card-meaning">
      <img className="tarot-card" src={selectedCard.img} alt="..." />
      <p className="meaning">{selectedCard[selectedOption.toLowerCase()]}</p>
      <button className="go-back-button" onClick={handleGoBack}>
        <img src={another} alt="Choose Another Card" />
      </button>
    </div>
  );
}
