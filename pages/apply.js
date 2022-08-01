import React, { useRef, useContext, useState } from "react";
import {
 
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Context } from "../context/Index";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const Apply = () => {
  const [state, setState] = useContext(Context);
  const initialState = {
    user_name: "",
    user_email: "",
    message: "",
    mobile: "",
    address: "",
    program: state?.program,
  };
  const [userData, setUserData] = useState(initialState);
  const {
    user_name,
    user_email,
    message,
    address,
    mobile,
    program,
  } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const [progress, setProgress] = useState(false);
  const [visible, setVisible] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setProgress(true);

    emailjs
      .sendForm(
        "service_7znzq6h",
        "template_2ofpvat",
        form.current,
        "o91Jx-bDZ6JJ2B8Zs"
      )
      .then(
        (result) => {
          setUserData(initialState);
          setProgress(false);
          setVisible(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contactContainer">
      {progress ? (
        <CircularProgress />
      ) : (
        <>
          {!visible ? (
            <>
              
             
              
                    <div className='applyContainer'>
                        <form className='box' ref={form} onSubmit={sendEmail}>
                          <h3>Apply</h3>
                          <input 
                          type="text"
                          placeholder="Enter your full name"
                          fullWidth
                          required
                          id="user_name"
                          name="user_name"
                          value={user_name}
                          onChange={handleChangeInput}
                          />
                          <input 
                          className="d-none"
                          type="text"
                          id="program"
                          name="program"
                          value={program}
                          onChange={handleChangeInput} 
                          />
                          
                          <input
                          type="email"
                          placeholder="Enter your email"
                          required
                          id="user_email"
                          name="user_email"
                          value={user_email}
                          onChange={handleChangeInput}
                          />
                          <input 
                          placeholder="Enter your address"
                          type="text"
                          required
                          id="address"
                          name="address"
                          value={address}
                          onChange={handleChangeInput}
                          />
                          <input
                          type="number"
                          placeholder="Enter your mobile number"
                          required
                          id="mobile"
                          name="mobile"
                          value={mobile}
                          onChange={handleChangeInput}
                          />
                          <textarea
                          type="text"
                          placeholder="Statement of purpose."
                          required
                          id="message"
                          name="message"
                          value={message}
                          onChange={handleChangeInput}
                          />
                         
                          <button type='submit' value='send'>Submit </button>
                        </form>
                    </div>
              
              
            </>
          ) : (
            <>
              {state?.program === "Computer Science and Engineering" ? (
                <>
                  <Typography
                    style={{
                      fontSize: "25px",
                      margin: "2rem",
                      fontWeight: "bold",
                      color: "#08c7ba",
                    }}
                    align="center"
                  >
                    Thank you!
                  </Typography>
                  <Grid>
                    <Card
                      elevation={3}
                      style={{
                        maxWidth: 450,
                        padding: "20px 5px",
                        margin: "4rem auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        backgroundColor:"#052252",
                        color: '#08c7ba',
                      }}
                    >
                      <CardContent>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            
                            fontSize: "19px",
                          }}
                        >
                          We will let you know if your application is granted by
                          our admission committee.
                        </Typography>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            
                            fontSize: "19px",
                            marginTop: "4rem",
                          }}
                        >
                          You can now check our CSE courses and credits to go
                          deeper into our program's pros and cons.
                        </Typography>
                      </CardContent>
                      <div className="col d-flex align-items-center justify-content-center my-3">
                        <Link href="/courses">
                          <button className='upbtn'>Continue</button>
                        </Link>
                      </div>
                    </Card>
                  </Grid>
                </>
              ) : (
                <>
                  <Typography
                    style={{
                      fontSize: "25px",
                      margin: "2rem",
                      fontWeight: "bold",
                      color: "#08c7ba",
                    }}
                    align="center"
                  >
                    Thank you!
                  </Typography>
                  <Grid>
                    <Card
                      elevation={3}
                      style={{
                        maxWidth: 450,
                        padding: "20px 5px",
                        margin: "4rem auto",
                        backgroundColor:"#052252",
                        color:'#08c7ba',
                      }}
                    >
                      <CardContent>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            
                            fontSize: "19px",
                          }}
                        >
                          We will let you know if your application is granted by
                          our admission committee.
                        </Typography>
                      </CardContent>
                      <div className="col d-flex align-items-center justify-content-center my-3">
                        <Link href="/">
                          <button className='upbtn'>
                            Back to Home
                          </button>
                        </Link>
                      </div>
                    </Card>
                  </Grid>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Apply;
