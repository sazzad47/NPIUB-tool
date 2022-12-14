import { Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import CourseTitleCSE from "../dashboardComponents/CourseTitleCSE";

const Courses = () => {
  return (
    <div className="csePage">
      <Typography
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          padding: "5rem 0.5rem",
        }}
        align="center"
      >
        Computer Science and Engineering
      </Typography>
      <CourseTitleCSE />
      <Link href="/">
        <button
          className="upbtn"
          style={{ margin: "3rem auto", marginBottom: "3rem" }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Courses;
