import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#56cc9d",
    },
    secondary: {
      main: "rgba(103, 65, 114, .7)",
    },
  },

  centerContainer: {
    margin: "150px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  gridEditProfile: {
    marginTop: "150px",
  },

  gridContainerFlex: {
    display: "flex",
  },

  gridItem: {
    margin: "20px",
  },

  gridContainerFlexCenter: {
    display: "flex",
    justifyContent: "center",
  },

  boxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  paperStyle: {
    padding: "1rem  1.5rem",
    marginTop: "30px",
  },

  fontStyle: {
    color: "#78c2ad",
    marginRight: "5px",
    "&:hover": {
      color: "rgba(103, 65, 114, .7)",
    },
  },

  textFiled: {
    "&.MuiTextField-root": {
      background: "#fff",
    },

    "&.MuiFormControl-root": {
      background: "#fff",
    },

    "&.MuiFilledInput-root": {
      backgroundColor: "#fff",
    },
  },

  selectStyle: {
    backgroundColor: "#fff",
    marginTop: "2px",
    "&.MuiFormControl-root ": {
      width: "100%",
      background: "none",
    },

    "&.MuiFilledInput-root": {
      borderRadius: "inherit",
    },

    "&.MuiFilledInput-root.Mui-focused": {
      backgroundColor: "#fff",
    },

    "&.MuiFilledInput-root:hover": {
      backgroundColor: "#fff",
    },
  },

  spinnerStyle: {
    "&.MuiCircularProgress-root": {
      display: "block",
      margin: "200px auto",
    },
  },

  button: {
    color: "#fff",
    marginBottom: "15px",
    marginTop: "15px",
  },

  datePicker: {
    backgroundColor: "#fff !important",
    margin: "0",
    "&.MuiFilledInput-root": {
      backgroundColor: "#fff",
    },
  },

  sliderRange: {
    "&>.MuiSlider-markLabel": {
      color: "#fff",
      fontWeight: 700,
    },
    "&>.MuiSlider-rail": {
      backgroundColor: "#fff",
      opacity: "1",
      height: "5px",
    },
    "&>.MuiSlider-track": {
      height: "5px",
    },

    "&>.MuiSlider-thumb": {
      width: "15px",
      height: "15px",
      marginTop: "-4px",
    },

    "&.MuiInputLabel-root": {
      color: "#fff",
    },
  },
});

export default theme;
