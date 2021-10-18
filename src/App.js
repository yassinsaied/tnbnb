import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import BlogContainer from "../src/components/BlogContainer/BlogContainer";
import Register from "./components/Register/Register";
import AdPost from "./components/AdPost/AdPost";
import Login from "./components/Login/Login";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import ProtectedRoute from "./UI/ProtectedRoute/ProtectedRoute";
import "./App.css";
import Profile from "./components/Profile/Profile";

// Or Create your Own theme:
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


  spinnerStyle : {
    "&.MuiCircularProgress-root" : {
      display: "block",
      margin: "200px auto",
     
      
  }

  }
});

function App() {
  const userState = useSelector((state) => state.authReducer);

  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <Header />

        <Switch>
          <Route path="/profile/:slug" component={Profile} />
          <Route path="/adresult" component={BlogContainer} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <ProtectedRoute
            path="/adpost"
            component={AdPost}
            logged={userState.logged}
          />

          <Route path="/" component={HomeContainer} />
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  );
}

export default App;
