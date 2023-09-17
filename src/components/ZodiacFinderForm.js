import React, { useState } from "react";
import "./ZodiacFinderForm.css"

const ZodiacFinderForm = ({ zodiacSigns, onFindZodiacSign }) => {
  const [birthdate, setBirthdate] = useState("");

  const handleInputChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = formatDate(birthdate); // Convert the date format
    const zodiacSign = findZodiacSignByDate(formattedDate);
    if (zodiacSign) {
      onFindZodiacSign(zodiacSign);
    } else {
      // Handle case when no zodiac sign is found for the provided date
      alert("Zodiac sign not found for the provided date.");
    }
  };
  const formatDate = (date) => {
    const [month, day] = date.split("-");
    return `${month}/${day}`;
  };
  

  const findZodiacSignByDate = (date) => {
    const inputDate = new Date(date);
  
    for (const sign of zodiacSigns) {
      const [startMonth, startDay] = sign.date.split(" - ")[0].split(" ");
      const [endMonth, endDay] = sign.date.split(" - ")[1].split(" ");
  
      const startDate = new Date(`${startMonth} ${startDay}, ${inputDate.getFullYear()}`);
      const endDate = new Date(`${endMonth} ${endDay}, ${inputDate.getFullYear()}`);
  
      console.log(`Checking sign: ${sign.name} ${startMonth} ${startDay} ${endMonth} ${endDay}`);
  
      if (inputDate >= startDate && inputDate <= endDate) {
        return sign;
      }
    }
  
    return null;
  };


  return (
    <div className="zodiac-form">
      <form onSubmit={handleSubmit}>
        <label  htmlFor="birthdate">Date of Birth:</label>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={handleInputChange}
        />
        <button className="btn-submit" type="submit">Show my sign</button>
      </form>
    </div>
  );
};

export default ZodiacFinderForm;
