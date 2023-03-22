import React, { useState } from "react";
import { toast } from "react-toastify";
import { Grid, Typography } from "@material-ui/core";

const ExtraCurriculars = ({ setToggleState, userData, setUserData }) => {
  const { ECactivities, volunteerActivities } = userData;
  const [ECtypes, setECtypes] = useState([]);

  const [volunteerRoles, setVolunteerRoles] = useState([]);
  const getEC_types = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setECtypes([...ECtypes, value]);
    } else {
      setECtypes(ECtypes.filter((e) => e !== value));
    }
  };
  const getVolunteerRoles = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setVolunteerRoles([...volunteerRoles, value]);
    } else {
      setVolunteerRoles(volunteerRoles.filter((e) => e !== value));
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleNext = () => {
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
        Extra-curriculars Activities
      </Typography>

      <div className="custom-form mt-4 mr-3 ml-1">
        <h6 className="ms-2">
          {" "}
          Have you been involved in extra-curricular activities? *
        </h6>
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
              id="ECactivities"
              name="ECactivities"
              value={ECactivities}
              onChange={handleInput}
            >
              <option>Please choose...</option>
              <option value="5">Yes</option>
              <option value="1">No</option>
            </select>
          </Grid>
        </div>
      </div>
      {ECactivities === "5" && (
        <div className="custom-form mt-4 mr-3 ml-1">
          <h6 className="ms-2">
            {" "}
            What type of activities have you involved in? *
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
                value="Sports"
                onChange={(e) => getEC_types(e)}
              />
              Sports
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Community Service"
                onChange={(e) => getEC_types(e)}
              />
              Community Service
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Employment"
                onChange={(e) => getEC_types(e)}
              />
              Employment
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Student Government"
                onChange={(e) => getEC_types(e)}
              />
              Student Government
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Academic Clubs"
                onChange={(e) => getEC_types(e)}
              />
              Academic Clubs
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="Arts"
                onChange={(e) => getEC_types(e)}
              />
              Arts
            </div>
          </div>
        </div>
      )}
      <div className="custom-form mt-4 mr-3 ml-1">
        <h6 className="ms-2">
          {" "}
          Have you volunteered/ been a part a student-run organization? *
        </h6>
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
              id="volunteerActivities"
              name="volunteerActivities"
              value={volunteerActivities}
              onChange={handleInput}
            >
              <option>Please choose...</option>
              <option value="5">Yes</option>
              <option value="1">No</option>
            </select>
          </Grid>
        </div>
      </div>
      {volunteerActivities === "5" && (
        <div className="custom-form mt-4 mr-3 ml-1">
          <h6 className="ms-2"> What was your role? *</h6>
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
                value="I led an event"
                onChange={(e) => getVolunteerRoles(e)}
              />
              I led an event
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="I created an event"
                onChange={(e) => getVolunteerRoles(e)}
              />
              I created an event
              <input
                style={{
                  background: "none",
                  outline: "none",
                  border: "1px solid #0b306b",
                  color: "#08c7ba",
                }}
                className="ecCheckbox"
                type="checkbox"
                value="I was a member of a team"
                onChange={(e) => getVolunteerRoles(e)}
              />
              I was a member of a team
            </div>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-between  mx-3 my-5">
        <button className="upbtn" onClick={handleBack}>
          Back
        </button>
        <button className="upbtn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ExtraCurriculars;
