import React, { useContext } from "react";
import { Context } from "../context/Index";
import Link from "next/link";
import { Grid, Typography } from "@material-ui/core";

import { scienceProgramsData } from "../evaluateComponents/data2";

const SSCPrograms = ({ scoreStatus }) => {
  const [state, setState] = useContext(Context);

  

  const scholarships = scienceProgramsData
    .find((item) => item.score === scoreStatus)
    ?.scholarships.map((scholarship) => (
      <li className="pl-3" key={scholarship} value={scholarship}>
        {scholarship}
      </li>
    ));

  const programs = scienceProgramsData
    .find((data) => data.score === scoreStatus)
    ?.faculties.find((item) => item.uname === state.faculty_name)
    ?.programs.map((program) => (
      <li className="pl-3" key={program} value={program}>
        {program}
      </li>
    ));
  const programsOptions = scienceProgramsData
    .find((data) => data.score === scoreStatus)
    ?.faculties.find((item) => item.uname === state.faculty_name)
    ?.programs.map((program) => (
      <option className="pl-3" key={program} value={program}>
        {program}
      </option>
    ));

  return (
    <div>
      {state.faculty_name === "Faculty of Engineering" ? (
        <>
          {scoreStatus === "none" ? (
            <>
              <div className="offerBox mt-4 mr-3 ml-1">
                <div className="programsOffer pb-5">
                  <Typography
                    style={{
                      padding: "20px 10px",
                      color: "#08c7ba",
                      fontWeight: "bold",
                    }}
                    variant="h6"
                    align="center"
                  >
                    Sorry!
                  </Typography>

                  <Typography
                    style={{
                      padding: "20px 10px",
                      color: "#08c7ba",
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    You must score at least 50 to get a program.
                  </Typography>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="offerBox mt-4 mr-3 ml-1">
                <div className="programsOffer pb-5">
                  <Typography
                    style={{
                      padding: "20px 10px",
                      color: "#08c7ba",
                      fontWeight: "bold",
                    }}
                    variant="h6"
                    align="center"
                  >
                    Suggested Programs
                  </Typography>
                  <Typography
                    style={{
                      padding: "20px 10px",
                      color: "#08c7ba",
                      fontWeight: "bold",
                    }}
                  >
                    You are eligible to apply for the following diploma
                    programs:
                  </Typography>
                  <ul>{programs}</ul>
                </div>

                {
                  <div className="scholarshipOffer pb-5">
                    <Typography
                      style={{
                        padding: "20px 10px",
                        color: "#08c7ba",
                        fontWeight: "bold",
                      }}
                      variant="h6"
                      align="center"
                    >
                      Scholarship{" "}
                    </Typography>
                    <Typography
                      style={{
                        padding: "20px 10px",
                        color: "#08c7ba",
                        fontWeight: "bold",
                      }}
                    >
                      Your scholarship covers:
                    </Typography>
                    <ul>{scholarships}</ul>
                  </div>
                }
                <div className="scholarshipOffer pb-5">
                  <Typography
                    style={{
                      padding: "20px 10px",
                      color: "#08c7ba",
                      fontWeight: "bold",
                    }}
                    variant="h6"
                    align="center"
                  >
                    Apply Now!{" "}
                  </Typography>
                  <div className="custom-form mt-4  mx-3">
                    <h6 className="ms-2">Choose a program *</h6>
                    <div className="select-wrapper">
                      <Grid container>
                        <select
                          style={{background:'none',outline:'none', border:'1px solid #0b306b',color:'#08c7ba'}}
                          required
                          className="formSelect"
                          id="program"
                          name="program"
                          type="text"
                          onChange={(e) =>
                            setState({ ...state, program: e.target.value })
                          }
                        >
                          <option value="" selected disabled>
                            Please choose...
                          </option>
                          {programsOptions}
                        </select>
                      </Grid>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mt-5">
                    <Link href="/apply">
                      <button
                        disableRipple
                        className="upbtn"
                        type="submit"
                      >
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="programsOffer pb-5">
            <Typography
              style={{
                padding: "20px 10px",
                color: "#08c7ba",
                fontWeight: "bold",
              }}
              variant="h6"
              align="center"
            >
              Sorry!
            </Typography>

            <Typography
              style={{
                padding: "20px 10px",
                color: "#08c7ba",
                fontWeight: "bold",
              }}
            >
              No diploma programs found for you to apply. We don't have any
              diploma programs in our general faculty.
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default SSCPrograms;
