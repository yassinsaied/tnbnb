import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputText from "../../UI/InputText/InputTerxt";
import SelectList from "../../UI/SelectList/SelectList";
import CheckBoxInput from "../../UI/CheckBoxInput/CheckBoxInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faHome,
  faMapMarkerAlt,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { DropzoneArea } from "material-ui-dropzone";
import gov from "../../gov.json";
import axios from "axios";
import "./AdPost.css";
const UseStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f9fafc",
  },

  formStyle: {
    display: "grid",
    width: "100%",
  },

  selectStyle: {
    backgroundColor: "#f9fafc",
  },

  centerContainer: {
    margin: "150px auto",
    display: "flex",
  },

  gridContainer: {
    marginTop: "20px",
  },

  paperStyle: {
    padding: "1rem  1.5rem",
    marginTop: "30px",
  },

  boxContainer: {
    display: "flex",
    justifyContent: "space-between;",
  },

  boxTItle: {
    display: "flex",
  },

  dividerStyle: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#616161",
  },

  fontStyle: {
    color: "#78c2ad",
    marginRight: "10px",
  },

  checkBoxLabel: {
    paddingTop: "9px",
    paddingLeft: "0px",
    fontSize: "15px",
  },
  checkBoxstyle: {
    paddingRight: "0px",
  },

  dropzoneStyel: {
    "&.MuiDropzonePreviewList-image": {
      padding: "10px",
    },
    "&.MuiDropzonePreviewList-removeButton": {
      top: "0px",
      left: "50%",
    },
  },
}));

const type = [
  { type: "Villa" },
  { type: "Villa Floor" },
  { type: "Apartement" },
  { type: "Guest Hous" },
  { type: "Motel" },
  { type: "Trend" },
];

const numberRooms = [
  { numberRooms: "S+0" },
  { numberRooms: "S+1" },
  { numberRooms: "S+3" },
  { numberRooms: "S+4" },
  { numberRooms: "S+5" },
  { numberRooms: "S+6" },
  { numberRooms: "S+7" },
  { numberRooms: "S+8" },
];

const AdPost = (props) => {
  const classes = UseStyles();
  const { handleSubmit, control, register } = useForm({
    validateCriteriaMode: "all",
  });


  const renameFile = (fileReq) =>{
    let r = (Math.random() + 1).toString(36).substring(3);
    let extension = fileReq.type.split("/").pop();
    return r +"." + extension
  
  }

  const onSubmit = async (data) => {

    console.log(data);
    const files = data.dropzone;
    
    files.forEach((file, index) => {
      const newName = renameFile(file) ;
      const fd = new FormData();
      fd.append("picture", file , newName );
      axios
        .post("http://localhost:4000/picture", fd)
        .then((res) => console.log(res));
    });
  };

  return (
    <>
      <Container maxWidth="md" className={classes.centerContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formStyle}>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperStyle}>
              <Box className={classes.boxTItle}>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  size="2x"
                  className={classes.fontStyle}
                />
                <Typography variant="h5"> General Information</Typography>
              </Box>
              <Divider className={classes.dividerStyle} />

              <Grid
                className={classes.gridContainer}
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}>
                <Typography variant="body1" display="block" gutterBottom>
                  Title of Ad*
                </Typography>
                <Controller
                  name="title"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, onBlur, value, name },
                    fieldState: { invalid, isTouched, isDirty, error },
                  }) => (
                    <InputText
                      nameInput={name}
                      labelInput="Title"
                      variantInput="outlined"
                      changeInput={onChange}
                      valueInput={value}
                      classesInput={classes}
                      errorinput={error}
                      refInput={{
                        ...register("title", {
                          required: {
                            value: true,
                            message: "Title is required",
                          },
                          maxLength: {
                            value: 10,
                            message: "Title must contain Maximum 15 characters",
                          },

                          minLength: {
                            value: 3,
                            message: "Title must contain Minimum 3 characters",
                          },
                        }),
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid
                item
                className={classes.gridContainer}
                xs={12}
                sm={12}
                md={12}
                lg={12}>
                <Typography variant="body1" display="block" gutterBottom>
                  Categoty*
                </Typography>

                <Controller
                  control={control}
                  name="type"
                  defaultValue=""
                  render={({
                    field: { onChange, onBlur, value, name },
                    fieldState: { invalid, isTouched, isDirty, error },
                  }) => (
                    <SelectList
                      classeOverrided={classes}
                      id="gove-select"
                      optionsSelect={type}
                      variantSelect="outlined"
                      keyType="type"
                      labelSelect="Choose Type of your AD"
                      errorSelect={error}
                      changeSelect={onChange}
                      valueSelect={value}
                      refSelect={{
                        ...register("type", {
                          required: {
                            value: true,
                            message: "Type of your Ad is required",
                          },
                        }),
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid
                item
                className={classes.gridContainer}
                xs={12}
                sm={12}
                md={12}
                lg={12}>
                <Typography variant="body1" display="block" gutterBottom>
                  Introduction of your ad*
                </Typography>
                <Controller
                  name="introduction"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, onBlur, value, name },
                    fieldState: { invalid, isTouched, isDirty, error },
                  }) => (
                    <InputText
                      nameInput={name}
                      labelInput="Introduction"
                      variantInput="outlined"
                      changeInput={onChange}
                      valueInput={value}
                      classesInput={classes}
                      errorinput={error}
                      multilineInput="multiline"
                      rowsInput={5}
                      refInput={{
                        ...register("introduction", {
                          required: {
                            value: true,
                            message: "Introduction is required",
                          },
                          maxLength: {
                            value: 500,
                            message:
                              "Introduction must contain Maximum 255 characters",
                          },

                          minLength: {
                            value: 2,
                            message:
                              "Introduction must contain Minimum 3 characters",
                          },
                        }),
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid
                item
                className={classes.gridContainer}
                xs={12}
                sm={12}
                md={12}
                lg={12}>
                <Typography variant="body1" display="block" gutterBottom>
                  Description of your ad*
                </Typography>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, onBlur, value, name },
                    fieldState: { invalid, isTouched, isDirty, error },
                  }) => (
                    <InputText
                      nameInput={name}
                      labelInput="Description"
                      variantInput="outlined"
                      changeInput={onChange}
                      valueInput={value}
                      classesInput={classes}
                      errorinput={error}
                      multilineInput="multiline"
                      rowsInput={5}
                      refInput={{
                        ...register("description", {
                          required: {
                            value: true,
                            message: "Description is required",
                          },
                          maxLength: {
                            value: 500,
                            message:
                              "Description must contain Maximum 500 characters",
                          },

                          minLength: {
                            value: 2,
                            message:
                              "Description must contain Minimum 3 characters",
                          },
                        }),
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={[classes.boxContainer, classes.gridContainer].join(
                  " "
                )}>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                  {" "}
                  <Typography variant="body1" display="block" gutterBottom>
                    Price/Night*
                  </Typography>
                  <Controller
                    name="price"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <InputText
                        nameInput={name}
                        labelInput="price"
                        variantInput="outlined"
                        changeInput={onChange}
                        valueInput={value}
                        classesInput={classes}
                        errorinput={error}
                        typeEntry="price"
                        typeInput="number"
                        refInput={{
                          ...register("price", {
                            required: {
                              value: true,
                              message: "Title is required",
                            },
                            pattern: {
                              value:
                                /(\d+(?: . + , \d+)?)/ /* eslint-disable */,

                              message: "Price must contain  Only Number",
                            },
                          }),
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                  <Typography variant="body1" display="block" gutterBottom>
                    Rooms*
                  </Typography>

                  <Controller
                    control={control}
                    name="rooms"
                    defaultValue=""
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <SelectList
                        classeOverrided={classes}
                        id="room-select"
                        optionsSelect={numberRooms}
                        variantSelect="outlined"
                        keyType="numberRooms"
                        labelSelect="Number Of Rooms"
                        errorSelect={error}
                        changeSelect={onChange}
                        valueSelect={value}
                        refSelect={{
                          ...register("rooms", {
                            required: {
                              value: true,
                              message: "Number of rooms is required",
                            },
                          }),
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>

              </Paper>
              </Grid>

              <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperStyle}>
              <Box className={classes.boxTItle}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  className={classes.fontStyle}
                />
                <Typography variant="h5"> Location</Typography>
              </Box>
              <Divider className={classes.dividerStyle} />

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={[classes.boxContainer, classes.gridContainer].join(
                  " "
                )}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <Typography variant="body1" display="block" gutterBottom>
                    Location*
                  </Typography>

                  <Controller
                    control={control}
                    name="location"
                    defaultValue=""
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <SelectList
                        classeOverrided={classes}
                        id="gove-select"
                        optionsSelect={gov}
                        variantSelect="outlined"
                        keyType="city"
                        labelSelect="Location"
                        changeSelect={onChange}
                        valueSelect={value}
                        errorSelect={error}
                        refSelect={{
                          ...register("location", {
                            required: {
                              value: true,
                              message: "Location is required",
                            },
                          }),
                        }}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={7} lg={7}>
                  {" "}
                  <Typography variant="body1" display="block" gutterBottom>
                    Full Adress
                  </Typography>
                  <Controller
                    name="fullAdress"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <InputText
                        nameInput={name}
                        labelInput="Full Adress"
                        variantInput="outlined"
                        changeInput={onChange}
                        valueInput={value}
                        classesInput={classes}
                        errorinput={error}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperStyle}>
              <Box className={classes.boxTItle}>
                <FontAwesomeIcon
                  icon={faHome}
                  size="2x"
                  className={classes.fontStyle}
                />
                <Typography variant="h5"> Property Features</Typography>
              </Box>
              <Divider className={classes.dividerStyle} />

              <Grid className={classes.boxContainer} item xs={12}>
                <Grid>
                  <Controller
                    name="parking"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Parking"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />

                  <Controller
                    name="pool"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Pool"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />

                  <Controller
                    name="centralHeating"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Central Heating"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />
                </Grid>
                <Grid>
                  <Controller
                    name="centerCooling"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Center Cooling"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />

                  <Controller
                    name="elevator"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Elevator"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />

                  <Controller
                    name="spa"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Spa"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />
                </Grid>
                <Grid>
                  <Controller
                    name="stunningViews"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Stunning views"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />

                  <Controller
                    name="dishWasher"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Dish Washer"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />

                  <Controller
                    name="surveillanceCamera"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Surveillance camera"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />
                </Grid>
                <Grid>
                  <Controller
                    name="petFrindly"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Pet Frindly"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />

                  <Controller
                    name="sweetRoom"
                    control={control}
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <CheckBoxInput
                        nameInput={name}
                        changeCheck={onChange}
                        valueCheck={value}
                        labelCheck="Sweet Room"
                        classesCheck={classes}
                        errorcheck={error}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Paper>

            <Paper elevation={3} className={classes.paperStyle}>
              <Box className={classes.boxTItle}>
                <FontAwesomeIcon
                  icon={faImages}
                  size="2x"
                  className={classes.fontStyle}
                />
                <Typography variant="h5"> Gallery</Typography>
              </Box>
              <Divider className={classes.dividerStyle} />
              <Grid
                item
                className={classes.gridContainer}
                xs={12}
                sm={12}
                md={12}
                lg={12}>

                <Controller
                  name="dropzone"
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, name },
                    fieldState: { invalid, isTouched, isDirty, error },
                  }) => (
                    <DropzoneArea
                      onChange={onChange}
                      filesLimit={5}
                      name="dropzone"
                      acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                      maxFileSize={2000000}
                    />
                  )}
                />


          <Box  sx={{my:"20px" , mx: "auto"  , display: 'flex' , justifyContent: 'center'}}>
            <button type="submit" className="btn btn-primary btn-lg px-5">
              <span> Sign In</span>
            </button>
          </Box>


              </Grid>

              
            </Paper>
          </Grid>

        </form>
      </Container>
    </>
  );
};

export default AdPost;
