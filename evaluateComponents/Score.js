import React, { useContext } from "react";
import { Context } from "../context/Index";
import { Typography } from "@material-ui/core";

const Score = ({ score, programs }) => {
  const [state] = useContext(Context);
  const study_level = state?.study_level;
  const ECactivities = state?.ECactivities;
  const volunteerActivities = state?.volunteerActivities;
  const achievements = state?.achievements;
  const volunteerAchievements = state?.volunteerAchievements;

  return (
    <div style={{ background: "#052252" }}>
      {!study_level ||
      !ECactivities ||
      !volunteerActivities ||
      !achievements ||
      !volunteerAchievements ? (
        <Typography
          style={{ padding: "20px 10px", color: "#08c7ba", fontWeight: "bold" }}
          variant="h6"
          align="center"
        >
          Please complete all the steps to generate your score.
        </Typography>
      ) : (
        <>
          <Typography
            style={{
              padding: "20px 10px",
              color: "#08c7ba",
              fontWeight: "bold",
            }}
            variant="h6"
            align="center"
          >
            Congratulations!{" "}
          </Typography>
          <div className="scoreContainer">
            <span className="score">Your Score is {score}</span>
          </div>
          <span style={{ color: "#08c7ba" }}> {programs}</span>
        </>
      )}
    </div>
  );
};

export default Score;
