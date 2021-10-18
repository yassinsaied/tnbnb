import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../action/auth";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputText from "../../UI/InputText/InputTerxt";
import CheckBoxInput from "../../UI/CheckBoxInput/CheckBoxInput";
import Alert from "@material-ui/lab/Alert";

const UseStyles = makeStyles((theme) => ({
  titleForm: {
    marginBottom: "30px",
    paddingTop: "20px",
  },

  alertSuccess: {
    fontSize: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
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

  checkBoxLabel: {
    paddingTop: "9px",
    fontSize: "15px",
  },

  boxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },

  fontStyle: {
    color: "#78c2ad",
    with: "20px",

    marginRight: "10px",
    "&:hover": {
      color: "rgba(103, 65, 114, .7)",
    },
  },

  fontCheckStyle: {
    color: "#fff",
    position: "absolute",
    left: "8%",
    top: "50%",
    zIndex: "1000",
    transform: "translate(-50%, -50%)",
  },

  helperText: {
    color: "red",
    paddingLeft: "20px",
  },
}));

const Register = () => {
  const classes = UseStyles();
  const dispatch = useDispatch();
  const { handleSubmit, control, register, watch } = useForm();
  const hash = useRef({});
  hash.current = watch("hash", "");
  const [loading, setLoading] = useState(false);
  const { registred } = useSelector((state) => state.authReducer);
  const { message } = useSelector((state) => state.messageReducer);
  const { logged } = useSelector((state) => state.authReducer);

  const onSubmit = (data) => {
    const newDtata = {
      email: data.email,
      hash: data.hash,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: parseInt(data.phone, 8),
    };

    setLoading(true);
    setTimeout(() => {
      dispatch(registerUser(newDtata)).finally(() => {
        setLoading(false);
      });
    }, 2000);
  };

  return (
    <>
      {logged && <Redirect to="/" />}
      <Box p={3}></Box>
      <Container maxWidth="lg" className={classes.centerContainer}>
        <Grid item={true} xs={12} sm={12} md={8} lg={10}>
          <Paper elevation={3}>
            {registred ? (
              <Box pl={3} pb={5} pr={3} pt={5}>
                <Alert severity="success" className={classes.alertSuccess}>
                  {" "}
                  {message}
                </Alert>
              </Box>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h3" align="center" display="block">
                  Sign up
                </Typography>

                {message && registred === false && (
                  <Box pl={10} pb={2} pr={3} pt={0}>
                    <Alert severity="error"> {message}</Alert>
                  </Box>
                )}

                <Container className={classes.gridContainer}>
                  <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                    <Box
                      pl={3}
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
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "invalid email address",
                                },
                              }),
                            }}
                          />
                        )}
                      />
                    </Box>

                    <Box
                      pl={3}
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
                        name="hash"
                        control={control}
                        defaultValue=""
                        render={({
                          field: { onChange, onBlur, value, name },
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <InputText
                            nameInput={name}
                            labelInput="Password"
                            variantInput="outlined"
                            changeInput={onChange}
                            valueInput={value}
                            classesInput={classes}
                            errorinput={error}
                            typeInput="password"
                            refInput={{
                              ...register("hash", {
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

                    <Box
                      pl={3}
                      pb={2}
                      pr={3}
                      pt={0}
                      className={classes.boxContainer}>
                      <FontAwesomeIcon
                        icon={faLock}
                        size="2x"
                        className={classes.fontStyle}
                      />

                      <FontAwesomeIcon
                        icon={faCheck}
                        size="xs"
                        className={classes.fontCheckStyle}
                      />

                      <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        render={({
                          field: { onChange, onBlur, value, name },
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <InputText
                            nameInput={name}
                            labelInput="Confirm Password"
                            variantInput="outlined"
                            changeInput={onChange}
                            valueInput={value}
                            classesInput={classes}
                            errorinput={error}
                            typeInput="password"
                            refInput={{
                              ...register("confirmPassword", {
                                required: {
                                  value: true,
                                  message: "You must confirm your Password",
                                },
                                validate: {
                                  confirmpass: (value) =>
                                    value === hash.current ||
                                    "The passwords do not match",
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
                  </Grid>
                  <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                    <Box
                      pl={3}
                      pb={2}
                      pr={3}
                      pt={0}
                      className={classes.boxContainer}>
                      <FontAwesomeIcon
                        icon={faUser}
                        size="2x"
                        className={classes.fontStyle}
                      />
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({
                          field: { onChange, onBlur, value, name },
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <InputText
                            nameInput={name}
                            labelInput="First Name"
                            variantInput="outlined"
                            changeInput={onChange}
                            valueInput={value}
                            classesInput={classes}
                            errorinput={error}
                            refInput={{
                              ...register("firstName", {
                                required: {
                                  value: true,
                                  message: "First Name is required",
                                },
                                maxLength: {
                                  value: 10,
                                  message:
                                    "First Name must contain Maximum 10 characters",
                                },

                                minLength: {
                                  value: 3,
                                  message:
                                    "First Name must contain Minimum 3 characters",
                                },
                              }),
                            }}
                          />
                        )}
                      />
                    </Box>
                    <Box
                      pl={3}
                      pb={2}
                      pr={3}
                      pt={0}
                      className={classes.boxContainer}>
                      <FontAwesomeIcon
                        icon={faUser}
                        size="2x"
                        className={classes.fontStyle}
                      />
                      <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({
                          field: { onChange, onBlur, value, name },
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <InputText
                            nameInput={name}
                            labelInput="Last Name"
                            variantInput="outlined"
                            changeInput={onChange}
                            valueInput={value}
                            classesInput={classes}
                            errorinput={error}
                            refInput={{
                              ...register("lastName", {
                                required: {
                                  value: true,
                                  message: "Last Name is required",
                                },
                                maxLength: {
                                  value: 10,
                                  message:
                                    "Last Name must contain Maximum 10 characters",
                                },

                                minLength: {
                                  value: 3,
                                  message:
                                    "Last Name must contain Minimum 3 characters",
                                },
                              }),
                            }}
                          />
                        )}
                      />
                    </Box>

                    <Box
                      pl={3}
                      pb={2}
                      pr={3}
                      pt={0}
                      className={classes.boxContainer}>
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        className={classes.fontStyle}
                      />
                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({
                          field: { onChange, onBlur, value, name },
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <InputText
                            nameInput={name}
                            labelInput="Phone Number"
                            variantInput="outlined"
                            changeInput={onChange}
                            valueInput={value}
                            classesInput={classes}
                            errorinput={error}
                          />
                        )}
                      />
                    </Box>

                    <Box pl={3} pb={2} pr={3} pt={0}>
                      <Controller
                        name="iGreed"
                        control={control}
                        defaultValue={false}
                        rules={{
                          ...register("iGreed", {
                            required: {
                              value: true,
                              message: "Accept Terms is required is required",
                            },
                          }),
                        }}
                        render={({
                          field: { onChange, onBlur, value, name },
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <CheckBoxInput
                            nameInput={name}
                            changeCheck={onChange}
                            valueCheck={value}
                            labelCheck="  I agree all statements in Terms of service"
                            classesCheck={classes}
                            errorcheck={error}
                          />
                        )}
                      />
                    </Box>
                  </Grid>
                </Container>
              </form>
            )}
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
