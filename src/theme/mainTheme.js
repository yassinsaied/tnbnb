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

    gridEditProfile : {
      marginTop:"150px",


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
      width:"100%"
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
  
    input: {
      backgroundColor: "#fff",
      "&:focus": {
        backgroundColor: "#fff",
      },
      "&:hover": {
        backgroundColor: "#fff",
      },
    },
  
    spinnerStyle: {
      "&.MuiCircularProgress-root": {
        display: "block",
        margin: "200px auto",
      },
    },
  
    button : {
      color : "#fff"
    }
  });

  export default theme;
