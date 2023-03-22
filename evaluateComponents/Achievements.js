import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { Grid, Typography } from "@material-ui/core";
import { Context } from "../context/Index";
import valid from "../utils/valid";

const Achievements = ({ setToggleState, userData, setUserData }) => {
  const [state, setState] = useContext(Context);
  const { ssc_result, hsc_result, diploma_result, bachelors_result } = userData;
  const { achievements, volunteerAchievements } = userData;
  const [achievementsTypes, setAchievementsTypes] = useState("");
  const [volunteerAchievementsTypes, setVolunteerAchievementsTypes] = useState(
    []
  );

  const getAchievementsTypes = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAchievementsTypes([...achievementsTypes, value]);
    } else {
      setAchievementsTypes(achievementsTypes.filter((e) => e !== value));
    }
  };
  const getVolunteerAchievements = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setVolunteerAchievementsTypes([...volunteerAchievementsTypes, value]);
    } else {
      setVolunteerAchievementsTypes(
        volunteerAchievementsTypes.filter((e) => e !== value)
      );
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleNext = () => {
    setState(userData);
    const errMsg = valid(
      ssc_result,
      hsc_result,
      diploma_result,
      bachelors_result
    );
    if (errMsg)
      return toast.error(errMsg, {
        autoClose: 2000,
      });
    setToggleState((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setToggleState((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div style={{ background: "#052252" }}>
      <Typography
        style={{ padding: "20px 10px", color: "#08c7ba", fontWeight: "bold" }}
        variant="h6"
        align="center"
      >
        Achievements
      </Typography>

      <div className="custom-form mt-4 mr-3 ml-1">
        <h6 className="ms-2"> Do you have any academic achievements? *</h6>
        <div className="select-wrapper">
          <Grid container>
            <select
              style={{
                background: "none",
                outline: "none",
                border: "1px solid #0b306b",
                color: "#08c7ba",
              }}
              required
              className="formSelect"
              id="achievements"
              name="achievements"
              value={achievements}
              onChange={handleInput}
            >
              <option>Please choose...</option>
              <option value="5">Yes</option>
              <option value="1">No</option>
            </select>
          </Grid>
        </div>
      </div>
      {achievements === "5" && (
        <div className="custom-form mt-4 mr-3 ml-1">
          <h6 className="ms-2">
            {" "}
            Whay type of academic achievements do you have?*
          </h6>
          <div className="">
            <div className="checkboxContainer">
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Scholarship"
                onChange={(e) => getAchievementsTypes(e)}
              />
              Scholarship
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Award"
                onChange={(e) => getAchievementsTypes(e)}
              />
              Award
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Project"
                onChange={(e) => getAchievementsTypes(e)}
              />
              Project
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Publication"
                onChange={(e) => getAchievementsTypes(e)}
              />
              Publication
            </div>
          </div>
        </div>
      )}
      <div className="custom-form mt-4 mr-3 ml-1">
        <h6 className="ms-2"> Do you have any volunteer achievements? *</h6>
        <div className="select-wrapper">
          <Grid container>
            <select
              style={{
                background: "none",
                outline: "none",
                border: "1px solid #0b306b",
                color: "#08c7ba",
              }}
              required
              className="formSelect"
              id="volunteerAchievements"
              name="volunteerAchievements"
              value={volunteerAchievements}
              onChange={handleInput}
            >
              <option>Please choose...</option>
              <option value="5">Yes</option>
              <option value="1">No</option>
            </select>
          </Grid>
        </div>
      </div>
      {volunteerAchievements === "5" && (
        <div className="custom-form mt-4 mr-3 ml-1">
          <h6 className="ms-2">
            {" "}
            What type of volunteer achievements do you have? *
          </h6>
          <div className="">
            <div className="checkboxContainer">
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Award"
                onChange={(e) => getVolunteerAchievements(e)}
              />
              Award
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Won competitions"
                onChange={(e) => getVolunteerAchievements(e)}
              />
              Won competitions
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Participated competitions"
                onChange={(e) => getVolunteerAchievements(e)}
              />
              Participated competitions
            </div>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-between  mx-3 my-5">
        <button className="upbtn" onClick={handleBack}>
          Back
        </button>
        <button className="upbtn" onClick={handleNext}>
          View Score
        </button>
      </div>
    </div>
  );
};

export default Achievements;
