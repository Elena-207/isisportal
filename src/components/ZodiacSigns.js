import React from "react";

const ZodiacSigns = ({ onZodiacSelect }) => {
  const zodiacSigns = [
    {
      name: "Aries",
      date: "March 21 - April 19",
      info: "Aries is the first astrological sign in the zodiac, represented by the Ram. Aries individuals are courageous, energetic, and leaders. They can be impulsive and competitive, valuing their independence. Aries' boldness and enthusiasm make them great initiators, but they may need to be mindful of their tendency to be impatient and short-tempered. They are natural trailblazers and excel in active pursuits.",
    },
    {
      name: "Taurus",
      date: "April 20 - May 20",
      info: "Taurus is the second astrological sign, represented by the Bull. Taurus individuals are known for their determination, reliability, and practicality. They appreciate stability and comfort.Taureans are deeply connected to nature and the material world, and they find pleasure in the simple joys of life. Their loyalty and patience make them reliable friends and partners.",
    },
    {
      name: "Gemini",
      date: "May 21 - June 20",
      info: "Gemini is the third astrological sign, represented by the Twins. Gemini individuals are curious, adaptable, and excellent communicators. They have a dual nature and love intellectual pursuits.	Geminis' duality often gives them a chameleon-like ability to adapt to different situations and social circles. They possess a quick wit and enjoy engaging in stimulating conversations and debates.",
    },
    {
      name: "Cancer",
      date: "June 21 - July 22",
      info: "Cancer is the fourth astrological sign, represented by the Crab. Cancer individuals are nurturing, empathetic, and highly intuitive. They value their home and family life.	Cancerians' strong emotional intelligence makes them deeply compassionate and empathetic friends and partners. Their protective nature and love for their home create a secure and cozy environment.",
    },
    {
      name: "Leo",
      date: "July 23 - Aug 22",
      info: "Leo is the fifth astrological sign, represented by the Lion. Leo individuals are confident, charismatic, and natural leaders. They enjoy being in the spotlight and are generous and warm-hearted.	Leos' magnetic personality and creative flair draw others to them. Their passion for self-expression and desire for recognition can sometimes lead them to seek validation, but they are generous and loyal.",
    },
    {
      name: "Virgo",
      date: "Aug 23 - Sept 22",
      info: "Virgo is the sixth astrological sign, represented by the Virgin. Virgo individuals are detail-oriented, practical, and analytical. They strive for perfection and are helpful and reliable.	Virgos' attention to detail and strong work ethic make them excellent organizers and problem solvers. However, their quest for perfection may cause them to be overly critical of themselves and others.",
    },
    {
      name: "Libra",
      date: "Sept 23 - Oct 22",
      info: "Libra is the seventh astrological sign, represented by the Scales. Libra individuals are social, charming, and diplomatic. They value harmony and fairness and often seek balanced relationships.	Librans' love for peace and justice drives them to seek harmony in their relationships and surroundings. Their diplomatic nature helps them navigate conflicts, but their indecisiveness can be a challenge at times.",
    },
    {
      name: "Scorpio",
      date: "Oct 23 - Nov 21",
      info: "Scorpio is the eighth astrological sign, represented by the Scorpion. Scorpio individuals are passionate, resourceful, and determined. They have strong intuition and may appear mysterious.	Scorpios' intense emotions and strong willpower make them formidable and determined individuals. Their ability to see through deception and their desire for authenticity can lead to profound and loyal connections.",
    },
    {
      name: "Sagittarius",
      date: "Nov 22 - Dec 21",
      info: "Sagittarius is the ninth astrological sign, represented by the Archer. Sagittarius individuals are adventurous, optimistic, and love freedom. They have a love for travel and philosophical pursuits.	Sagittarians' optimistic and adventurous spirit leads them to explore new horizons both physically and intellectually. Their love for freedom can sometimes lead to a fear of commitment and a desire for independence.",
    },
    {
      name: "Capricorn",
      date: "Dec 22 - Jan 19",
      info: "Capricorn is the tenth astrological sign, represented by the Goat. Capricorn individuals are ambitious, disciplined, and responsible. They value tradition and work hard to achieve their goals.	Capricorns' patient and methodical approach to life allows them to climb the ladder of success steadily. Their determination and self-discipline are balanced with a strong sense of responsibility and respect for tradition.",
    },
    {
      name: "Aquarius",
      date: "Jan 20 - Feb 18",
      info: "Aquarius is the eleventh astrological sign, represented by the Water Bearer. Aquarius individuals are innovative, open-minded, and humanitarian. They value friendship and intellectual stimulation.	Aquarians' progressive thinking and humanitarian ideals make them advocates for social change and equality. Their eccentricity and individuality sometimes set them apart from the crowd, but they cherish their friendships deeply.",
    },
    {
      name: "Pisces",
      date: "Feb 19 - March 20",
      info: "Pisces is the twelfth astrological sign, represented by the Fish. Pisces individuals are compassionate, artistic, and intuitive. They can be dreamy and imaginative, valuing emotional connections.	Pisceans' strong intuition and creativity make them natural artists and empathetic listeners. Their emotional sensitivity can sometimes lead them to feel overwhelmed, but their caring nature brings comfort to those around them.",
    },
  ];


   // Function to find the zodiac sign based on the provided birthdate
   const findZodiacSignByDate = (date) => {
    const [month, day] = date.split("-").map(Number);

    for (const sign of zodiacSigns) {
      const [startMonth, startDay] = sign.date.split(" - ")[0].split(" ");
      const [endMonth, endDay] = sign.date.split(" - ")[1].split(" ");

      if (
        (month === getMonthNumber(startMonth) && day >= parseInt(startDay)) ||
        (month === getMonthNumber(endMonth) && day <= parseInt(endDay))
      ) {
        return sign;
      }
    }

    // If no sign is found, return null or handle the case as needed
    return null;
  };

  const getMonthNumber = (monthName) => {
    const months = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };

    return months[monthName];
  };

  const handleZodiacSelect = (sign) => {
    onZodiacSelect(sign);
  };

  return (
    <div className="zodiac-signs">
      <h2>Zodiac Signs</h2>
      <div className="zodiac-buttons">
        {zodiacSigns.map((sign, index) => (
          <button className="btn-sign" key={index} onClick={() => handleZodiacSelect(sign)}>
          ּּ {sign.name}  ּ
          </button>
        ))}
      </div>
    </div>
  );
};

export default ZodiacSigns;