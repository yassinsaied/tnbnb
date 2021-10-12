import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Redirect ,useHistory } from "react-router-dom";
import { login } from "../../action/auth";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputText from "../../UI/InputText/InputTerxt";
import Alert from "@material-ui/lab/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const UseStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    "&:focus": {
      backgroundColor: "#fff",
    },
    "&:hover": {
      backgroundColor: "#fff",
    },
  },

  centerContainer: {
    margin: "150px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },

  boxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  fontStyle: {
    color: "#78c2ad",
    marginRight: "10px",
    "&:hover": {
      color: "rgba(103, 65, 114, .7)",
    },
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const classes = UseStyles();
  const [loading, setLoadin] = useState(false);
  const { logged } = useSelector((state) => state.authReducer);
  const { message } = useSelector((state) => state.messageReducer);
  let history = useHistory();
  const {handleSubmit,control, register,}= useForm({ validateCriteriaMode: "all",});

  const onSubmit = (data) => {
    setLoadin(true);
    setTimeout(() => {
      dispatch(login(data))
        .then(() => {
          history.push("/");
        })
        .catch(() => {
          setLoadin(false);
        });
    }, 2000);
  };

  return (
    <>
      {logged && <Redirect to="/" />}

      <Container maxWidth="lg" className={classes.centerContainer}>
        <Grid item={true} xs={12} sm={12} md={8} lg={10}>
          <Paper elevation={3} className={classes.gridContainer}>
            <Grid
              item={true}
              xs={12}
              sm={12}
              md={6}
              lg={5}
              className="order-2 order-lg-1 order-md-1">
              <Box p={3}>
                <Typography variant="h3" align="center" display="block">
                  Sign In
                </Typography>
              </Box>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  pl={10}
                  pb={2}
                  pr={3}
                  pt={0}
                  className={classes.boxContainer}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className={classes.fontStyle}
                  />
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <InputText
                        nameInput={name}
                        labelInput="Email"
                        variantInput="outlined"
                        changeInput={onChange}
                        valueInput={value}
                        classesInput={classes}
                        errorinput={error}
                        refInput={{
                          ...register("email", {
                            required: {
                              value: true,
                              message: "email is required",
                            },
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          }),
                        }}
                      />
                    )}
                  />
                </Box>

                <Box
                  pl={10}
                  pb={2}
                  pr={3}
                  pt={0}
                  className={classes.boxContainer}>
                  <FontAwesomeIcon
                    icon={faLock}
                    size="2x"
                    className={classes.fontStyle}
                  />
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <InputText
                     
                        labelInput="Password"
                        variantInput="outlined"
                        changeInput={onChange}
                        valueInput={value}
                        classesInput={classes}
                        typeInput="password"
                        errorinput={error}
                        refInput={{
                          ...register("password", {
                            required: {
                              value: true,
                              message: "Password is required",
                            },
                            pattern: {
                              value:
                                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/i,
                              message:
                                "Password must contain Minimum  6 characters, at least one letter, one number and one special character:",
                            },
                          }),
                        }}
                      />
                    )}
                  />
                </Box>
                {message && (
                  <Box pl={10} pb={2} pr={3} pt={0}>
                    <Alert severity="error"> {message}</Alert>
                  </Box>
                )}

                <Box
                  pl={10}
                  pb={2}
                  pr={3}
                  pt={0}
                  className={classes.gridContainer}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm">
                          {" "}
                        </span>

                        <span> Waiting For Connexion</span>
                      </>
                    ) : (
                      <span> Sign In</span>
                    )}
                  </button>
                </Box>
              </form>
            </Grid>
            <Grid
              item={true}
              xs={12}
              sm={12}
              md={6}
              lg={7}
              className={[
                classes.imageGrid,
                "order-1",
                "order-md-2",
                "order-lg-2",
              ].join(" ")}>
              <img
                src="https://cdn.dribbble.com/users/1465051/screenshots/6389501/shot_007.png"
                className="img-fluid"
                alt="Sample"
              />
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
