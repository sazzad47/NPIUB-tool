import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { Context } from "../context/Index";
import { Card, Grid, Typography } from "@material-ui/core";
import Academics from "./Academics";
import ExtraCurriculars from "./ExtraCurriculars";
import Achievements from "./Achievements";
import Score from "./Score";
import UnderSSC from "../programs/UnderSSC";
import SSCPrograms from "../programs/SSCPrograms";
import HSCPrograms from "../programs/HSCPrograms";
import DiplomaPrograms from "../programs/DiplomaPrograms";
import BachelorsPrograms from "../programs/BachelorsPrograms";
import valid from "../utils/valid";

function Evaluate() {
  const [ state ] = useContext(Context);

  const initState = {
    study_level: "",
    ssc_result: "",
    ssc_group: "",
    ssc_roll: "",
    ssc_reg: "",
    ssc_board: "",
    ssc_pyear: "",
    hsc_result: "",
    hsc_group: "",
    hsc_roll: "",
    hsc_reg: "",
    hsc_board: "",
    hsc_pyear: "",
    bachelors_result: "",
    bachelors_faculty: "",
    bachelors_dept: "",
    bachelors_institute: "",
    bachelors_pyear: "",
    faculty_name: "",
    diploma_result: "",
    diploma_dept: "",
    diploma_institute: "",
    diploma_pyear: "",
  };

  const [userData, setUserData] = useState(initState);
  const [toggleState, setToggleState] = useState();

  const ssc_result = parseFloat(state?.ssc_result);
  const hsc_result = parseFloat(state?.hsc_result);
  const diploma_result = parseFloat(state?.diploma_result);
  const bachelors_result = parseFloat(state?.bachelors_result);
  const ECactivities = parseFloat(state?.ECactivities);
  const volunteerActivities = parseFloat(state?.volunteerActivities);
  const achievements = parseFloat(state?.achievements);
  const volunteerAchievements = parseFloat(state?.volunteerAchievements);

  const only_ssc_result = ssc_result * 16;
  const converted_ssc_result = ssc_result * 7;
  const converted_hsc_result = hsc_result * 9;
  const converted_diploma_result = diploma_result * 12;
  const converted_diploma_ssc = ssc_result * 6 + 2;
  const converted_bachelors_result = bachelors_result * 9 - 1;
  const converted_bachelors_ssc = ssc_result * 4;
  const converted_bachelors_hsc = hsc_result * 5;

  const non_academic_result =
    ECactivities + volunteerActivities + achievements + volunteerAchievements;

  const sscScore = only_ssc_result + non_academic_result;
  const hscScore =
    converted_ssc_result + converted_hsc_result + non_academic_result;
  const diplomaScore =
    converted_diploma_ssc + converted_diploma_result + non_academic_result;
  const bachelorsScore =
    converted_bachelors_ssc +
    converted_bachelors_hsc +
    converted_bachelors_result +
    non_academic_result;

  const study_level = state?.study_level;

  const getScore = (study_level) => {
    switch (study_level) {
      case "Under SSC":
        return non_academic_result;
      case "SSC":
        return sscScore;
      case "HSC":
        return hscScore;
      case "Diploma":
        return diplomaScore;
      case "Bachelors":
        return bachelorsScore;
      default:
        return "";
    }
  };

  const score = getScore(study_level);

  function getStatus(score) {
    switch (true) {
      case 0 <= score && score < 50:
        return "none";
      case 50 <= score && score < 55:
        return "very bad";

      case 55 <= score && score < 60:
        return "bad";
      case 60 <= score && score <= 65:
        return "good";
      case 65 <= score && score <= 70:
        return "very good";
      case 70 <= score && score <= 75:
        return "best";
      case 75 <= score && score <= 80:
        return "excellent";
      case 80 <= score && score <= 85:
        return "star";
      case 85 <= score && score <= 90:
        return "super";
      case 90 <= score && score <= 95:
        return "brilliant";
      case 95 <= score && score <= 100:
        return "perfect";
    }
  }

  const scoreStatus = getStatus(score);

  function getPrograms(study_level) {
    switch (study_level) {
      case "Under SSC":
        return (
          <>
            <div className="programsContainer">
              <UnderSSC
                setToggleState={setToggleState}
                scoreStatus={scoreStatus}
              />
            </div>
          </>
        );
      case "SSC":
        return (
          <>
            <div className="programsContainer">
              <SSCPrograms sscScore={sscScore} scoreStatus={scoreStatus} />
            </div>
          </>
        );
      case "HSC":
        return (
          <>
            <div className="programsContainer">
              <HSCPrograms hscScore={hscScore} scoreStatus={scoreStatus} />
            </div>
          </>
        );
      case "Diploma":
        return (
          <>
            <div className="programsContainer">
              <DiplomaPrograms
                diplomaScore={diplomaScore}
                scoreStatus={scoreStatus}
              />
            </div>
          </>
        );
      case "Bachelors":
        return (
          <>
            <BachelorsPrograms
              bachelorsScore={bachelorsScore}
              scoreStatus={scoreStatus}
            />
          </>
        );
      default:
        return "";
    }
  }

  const programs = getPrograms(study_level);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("tab")) {
        setToggleState(JSON.parse(sessionStorage.getItem("tab")));
      } else {
        setToggleState(1);
      }
    } catch (error) {
      console.log(error);
    }
  }, ["tab"]);

  useEffect(() => {
    sessionStorage.setItem("tab", JSON.stringify(toggleState));
  }, [toggleState]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div>
        <Card
          elevation={6}
          style={{ padding: "0.5rem", background: "#052252" }}
        >
          <Grid
            style={{ marginTop: "10px", marginBottom: "10px" }}
            container
            spacing={2}
            alignItems="center"
          >
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
            >
              <div
                className={
                  toggleState === 1 ? "activeAcademicTab" : "normalAcademicTab"
                }
                onClick={() => toggleTab(1)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "#08c7ba",
                  }}
                >
                  {" "}
                  Academics
                </Typography>
              </div>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
            >
              <div
                className={
                  toggleState === 2 ? "activeExtraTab" : "normalExtraTab"
                }
                onClick={() => toggleTab(2)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "#08c7ba",
                  }}
                >
                  {" "}
                  ExtraCurriculars
                </Typography>
              </div>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
            >
              <div
                className={
                  toggleState === 3
                    ? "activeAchievementTab"
                    : "normalAchievementTab"
                }
                onClick={() => toggleTab(3)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "#08c7ba",
                  }}
                >
                  Achievements
                </Typography>
              </div>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
            >
              <div
                className={
                  toggleState === 4 ? "activeScoreTab" : "normalScoreTab"
                }
                onClick={() => {
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
                  toggleTab(4);
                }}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "#08c7ba",
                  }}
                >
                  Score
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>

      <Card
        elevation={6}
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          background: "#052252",
        }}
      >
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Academics
              setToggleState={setToggleState}
              userData={userData}
              setUserData={setUserData}
            />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <ExtraCurriculars
              setToggleState={setToggleState}
              userData={userData}
              setUserData={setUserData}
            />
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Achievements
              setToggleState={setToggleState}
              userData={userData}
              setUserData={setUserData}
              score={score}
              scoreStatus={scoreStatus}
            />
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <Score
              setToggleState={setToggleState}
              userData={userData}
              setUserData={setUserData}
              score={score}
              programs={programs}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Evaluate;
