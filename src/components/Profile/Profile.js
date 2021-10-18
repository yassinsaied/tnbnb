import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import userService from "../../services/authAPI";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Box,
  Avatar,
  ListItem,
  List,
  CircularProgress,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ListAd from "../ListAds/ListAds";
import SkeletonPost from "../../UI/SkeletonPost/SkeletonPost";
import SkeletonType from "../../UI/SkeletonType/SkeletonType";

const UseStyles = makeStyles((theme) => ({
  container: { ...theme.centerContainer, marginTop: "200px" },
  gridContainer: {
    ...theme.gridContainerFlex,
    flexWrap: "wrap",
  },
  gridItem: theme.gridItem,
  fontStyle: theme.fontStyle,
  spinnerStyle: theme.spinnerStyle,
  paperStyle: {
    ...theme.paperStyle,
    margin: "10px 5px 10px 10px",
    padding: "1rem",
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

  skeletonImageStyle: {
    "&.MuiSkeleton-pulse" : {
      animation:"none !important"
    },
  
   
  },

  skeletonBox : {
    position: "absolute",
    top: "-110px",
    left: "50%",
    transform: "translateX(-50%)",

  },


  boxProfile: {
    position: "relative",
    paddingTop: "100px",
  },

  listItem: {
    "&.MuiListItem-gutters": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },

  quoteUser: {
    padding: "5px",
    marginTop: "20px",
  },
}));

const Profile = (props) => {
  const classes = UseStyles();
  const slug = props.match.params.slug;
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.authReducer);

  useEffect(() => {
    userService.getUserBySlug(slug).then((res) => {
      console.log(res);
      setTimeout(() => {
        setUserProfile(res["hydra:member"][0]);
       setLoading(false);
      }, 1500);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          item={true}
          xs={12}
          sm={12}
          md={8}
          lg={11}
          className={classes.gridContainer}>
          <Grid item={true} xs={12} sm={12} md={4} lg={3}>
            <Paper elevation={3} className={classes.paperStyle}>
              <Box className={classes.boxProfile}>
                {loading ? (<>
                  <SkeletonType variant="circle" nubrSkeleton={1} width={200} height={200} style={classes.skeletonBox}/>
                  <SkeletonType variant="rect" nubrSkeleton={2} width={210} height={118}/></>
                ) : (
                  <>
                    <Avatar
                      className={classes.avatarStyle}
                      alt="Remy Sharp"
                      src="https://demos.creative-tim.com/argon-dashboard-react/static/media/team-4-800x800.99c612eb.jpg"
                    />
                    <Typography variant="h5" align="center">
                      {userProfile.firstName + " " + userProfile.lastName}
                    </Typography>

                    <Paper
                      variant="outlined"
                      square
                      className={classes.quoteUser}>
                      <Typography variant="caption" align="center">
                        {userProfile.descreption}
                      </Typography>
                    </Paper>

                    <List>
                      <ListItem className={classes.listItem}>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="sm"
                          className={classes.fontStyle}
                        />
                        <Typography variant="body1">
                          {userProfile.email}
                        </Typography>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          size="sm"
                          className={classes.fontStyle}
                        />
                        <Typography variant="body1">
                          {userProfile.address}
                        </Typography>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <FontAwesomeIcon
                          icon={faPhone}
                          size="sm"
                          className={classes.fontStyle}
                        />
                        <Typography variant="body1">
                          {userProfile.phone}
                        </Typography>
                      </ListItem>
                    </List>
                  </>
                )}
              </Box>
            </Paper>
          </Grid>

          <Grid item={true} xs={12} sm={12} md={9} lg={9}>
            <Paper elevation={3} className={classes.paperStyle}>
              {loading ? (
                <Grid
                  item
                  sm={12}
                  md={12}
                  lg={12}
                  className={classes.gridContainer}>
                  <SkeletonPost nubrSkeleton={9} />
                </Grid>
              ) : (
                <ListAd
                  listAds={userProfile.ads}
                  titleListe={`You Have ${userProfile.ads.length} Post`}
                />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
