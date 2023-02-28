import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../components/Buttons/Button";
import Buttons from "../components/Buttons/Buttons";
import { HomeAwaySwitch } from "../components/Form";
import Scoreboard from "../components/Scoreboard";

export default function Display({ buttons, periods, timePerPeriod }) {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeAway, setHomeAway] = useState("away");
  const [currentPeriod, setCurrentPeriod] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(
    // Seconds to minutes
    timePerPeriod * 60
  );

  return (
    <>
      <HomeAwaySwitch
        handleToggle={() => {
          setHomeAway((prev) => (prev === "home" ? "away" : "home"));
        }}
      />
      <Buttons
        buttons={buttons}
        handleClick={(e) => {
          if (homeAway === "home") {
            setHomeScore((prev) => prev + Number(e.target.dataset.count));
          } else {
            setAwayScore((prev) => prev + Number(e.target.dataset.count));
          }
        }}
      />
      <Scoreboard
        homeScore={homeScore}
        awayScore={awayScore}
        timeRemaining={timeRemaining}
        currentPeriod={currentPeriod}
        timePerPeriod={timePerPeriod}
        periods={periods}
      />
      <div className="flex gap-x-8">
        <Button
          colorClass="bg-green-500"
          text="Start"
          handleClick={() => {
            console.log("Start");
          }}
        />
        <Button
          colorClass="bg-orange-500"
          text="Stop"
          handleClick={() => {
            console.log("Stop");
          }}
        />
        <Button
          colorClass="bg-yellow-500"
          text="Next Period"
          handleClick={() => {
            console.log("Next Period");
          }}
        />
        <Button
          colorClass="bg-red-500"
          text="Reset Board"
          handleClick={() => {
            console.log("Reset Board");
          }}
        />
      </div>
    </>
  );
}

Display.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.number).isRequired,
  periods: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  timePerPeriod: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};
