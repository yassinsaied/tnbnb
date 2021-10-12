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
import ProtectedRoute  from "./UI/ProtectedRoute/ProtectedRoute"
import "./App.css";

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
});

function App() {
 const userState = useSelector(state => state.authReducer)




  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <Header />

        <Switch>
          <Route path="/adresult" component={BlogContainer} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/adpost" component={AdPost}  logged={userState.logged}/>
        

          <Route path="/" component={HomeContainer} />
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  );
}

export default App;
