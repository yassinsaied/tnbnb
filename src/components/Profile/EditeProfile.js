import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  Grid,
  Box,
  Avatar,
  Button,
  IconButton,
  TextField,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import InputText from "../../UI/InputText/InputTerxt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faQuoteLeft,
  faUser,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import userService from "../../services/authAPI";

const UseStyles = makeStyles((theme) => ({
  centerContainer: {
    ...theme.centerContainer,
    margin: "220px auto",
  },
  gridContainerFlex: theme.gridContainerFlex,
  boxContainer: theme.boxContainer,
  fontStyle: theme.fontStyle,
  gridEditProfile: theme.gridEditProfile,
  boxProfile: {
    position: "relative",
    width: "220px",
    height: "120px",
    margin: "0 auto",
  },
  avatarStyle: {
    "&.MuiAvatar-root": {
      width: "200px",
      height: "200px",
    },

    position: "absolute",
    top: "-100px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  inputFile: {
    display: "none",
  },
  camerInput: {
    position: "absolute",
    top: "-80px",
    right: "30px",
    zIndex: "1000",
  },
}));

const renameFile = (fileReq) => {
  let r = (Math.random() + 1).toString(36).substring(3);
  let extension = fileReq.type.split("/").pop();
  return r + "." + extension;
};





const EditeProfile = (props) => {
  const classes = UseStyles();
  const { currentUser } = useSelector((state) => state.authReducer);
  const { handleSubmit, control, register } = useForm();
  const [avatarImage, setAvatarImage] = useState(
    `${process.env.PUBLIC_URL}avatars/${currentUser.avatar}`
  );
  
  const avatarImageField = register("avatar");
  const onSubmit = (data) => {
   


  //  console.log(data)



  //upload image in SSR
  if(data.avatar[0]!== undefined){
  const newName = renameFile(data.avatar[0]);
  const formData = new FormData();
  formData.append("avatar", data.avatar[0], newName);
  userService.uploadAvatar(formData);
}





  };

  const handleChangeFile = (event) => {
    let file = URL.createObjectURL(event.target.files[0]);
    setAvatarImage(file);
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.centerContainer}>
        <Grid item={true} xs={12} sm={12} md={8} lg={10}>
          <Paper elevation={3} className={classes.gridContainer}>
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Box p={3} className={classes.boxProfile}>
                <label
                  htmlFor="icon-button-file"
                  className={classes.camerInput}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>

                <Avatar
                  className={classes.avatarStyle}
                  alt="Remy Sharp"
                  src={avatarImage}
                />
              </Box>
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                item={true}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={classes.gridContainerFlex}>
                <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                  <Box
                    pl={3}
                    pb={2}
                    pr={3}
                    pt={0}
                    className={classes.boxContainer}>
                    <FontAwesomeIcon
                      icon={faUser}
                      size="lg"
                      className={classes.fontStyle}
                    />
                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue={currentUser.firstName}
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
                      size="lg"
                      className={classes.fontStyle}
                    />
                    <Controller
                      name="lastName"
                      control={control}
                      defaultValue={currentUser.lastName}
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
                      icon={faEnvelope}
                      size="1x"
                      className={classes.fontStyle}
                    />
                    <Controller
                      name="email"
                      control={control}
                      defaultValue={currentUser.email}
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
                      icon={faMapMarkerAlt}
                      size="lg"
                      className={classes.fontStyle}
                    />
                    <Controller
                      name="adress"
                      control={control}
                      defaultValue={currentUser.address}
                      render={({
                        field: { onChange, onBlur, value, name },
                        fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <InputText
                          nameInput={name}
                          labelInput="address"
                          variantInput="outlined"
                          changeInput={onChange}
                          valueInput={value}
                          classesInput={classes}
                        />
                      )}
                    />
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
                      icon={faPhone}
                      size="lg"
                      className={classes.fontStyle}
                    />
                    <Controller
                      name="Phone"
                      control={control}
                      defaultValue={currentUser.phone}
                      render={({
                        field: { onChange, onBlur, value, name },
                        fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <InputText
                          nameInput={name}
                          labelInput="Phone"
                          variantInput="outlined"
                          changeInput={onChange}
                          valueInput={value}
                          classesInput={classes}
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
                      icon={faQuoteLeft}
                      size="lg"
                      className={classes.fontStyle}
                    />
                    <Controller
                      name="descreption"
                      control={control}
                      defaultValue={currentUser.descreption}
                      render={({
                        field: { onChange, onBlur, value, name },
                        fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <TextField
                          name={name}
                          label="A bout You"
                          placeholder="A bout You"
                          variant="outlined"
                          value={value}
                          onChange={onChange}
                          multiline
                          rows={9}
                        />
                      )}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box align="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}>
                  Edite My Profile
                </Button>
              </Box>
              <input
                name="avatar"
                accept="image/*"
                className={classes.inputFile}
                id="icon-button-file"
                type="file"
                {...avatarImageField}
                onChange={(event) => {
                  avatarImageField.onChange(event)
                  handleChangeFile(event);
                }}
              />
            </form>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default EditeProfile;
