import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import BlogContainer from "../src/components/BlogContainer/BlogContainer";
import Register from "./components/Register/Register";
import AdPost from "./components/AdPost/AdPost";
import Login from "./components/Login/Login";
import { MuiThemeProvider} from "@material-ui/core/styles";
import ProtectedRoute from "./UI/ProtectedRoute/ProtectedRoute";
import "./App.css";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditeProfile";
import theme from "./theme/mainTheme"

// Or Create your Own theme:


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
            <ProtectedRoute
            path="/editprofile"
            component={EditProfile}
            logged={userState.logged}
          />

          <Route path="/" component={HomeContainer} />
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  );
}

export default App;
