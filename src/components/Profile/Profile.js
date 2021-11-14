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
  Button,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ListAd from "../ListAds/ListAds";
import Pagination from "../../UI/Pagination/Pagination";
import SkeletonPost from "../../UI/SkeletonPost/SkeletonPost";
import SkeletonType from "../../UI/SkeletonType/SkeletonType";
import { Link } from "react-router-dom";

const UseStyles = makeStyles((theme) => ({
  container: { ...theme.centerContainer, marginTop: "200px" },
  gridContainer: {
    ...theme.gridContainerFlex,
    flexWrap: "wrap",
  },
  gridItem: theme.gridItem,
  fontStyle: theme.fontStyle,
  spinnerStyle: theme.spinnerStyle,
  button: theme.button,
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
    "&.MuiSkeleton-pulse": {
      animation: "none !important",
    },
  },

  skeletonBox: {
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
  const [adsOfUser, setAdsOfUser] = useState([]);
  const [totaleItems, setTotalItems] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [userProfile, setUserProfile] = useState({});
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingPost, setLoadingPost] = useState(true);
  const { currentUser } = useSelector((state) => state.authReducer);
  const itemPerPage = 6;

  //set CurrentPage of pagination
  const handelChangePage = (page) => {
    setcurrentPage(page);
  };

  //get User by Slug
  useEffect(() => {
    userService
      .getUserBySlug(slug)
      .then((res) => {
        let userId = res["hydra:member"][0].id;
        setTimeout(() => {
          setUserProfile(res["hydra:member"][0]);
          setLoadingProfile(false);
        }, 1500);

        return userId;
      })
      .then((userId) => {
        setLoadingPost(true);
        userService
          .getAdsOfUser(userId, itemPerPage, currentPage)
          .then((data) => {
            setTimeout(() => {
              setAdsOfUser(data["hydra:member"]);
              setTotalItems(data["hydra:totalItems"]);
              setLoadingPost(false);
            }, 1500);
          });
      });
  }, [slug, currentPage]); // eslint-disable-next-line react-hooks/exhaustive-deps

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
                {loadingProfile ? (
                  <>
                    <SkeletonType
                      variant="circle"
                      nubrSkeleton={1}
                      width={200}
                      height={200}
                      style={classes.skeletonBox}
                    />
                    <SkeletonType
                      variant="rect"
                      nubrSkeleton={2}
                      width={210}
                      height={118}
                    />
                  </>
                ) : (
                  <>
                    <Avatar
                      className={classes.avatarStyle}
                      alt="Remy Sharp"
                      src={`${process.env.PUBLIC_URL}avatars/${userProfile.avatar}`}
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
                    {userProfile.id === currentUser.id && (
                      <Box align="center">
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}>
                          <Link className="nav-link" to="/editprofile">
                            Edite My Profile
                          </Link>
                        </Button>
                      </Box>
                    )}
                  </>
                )}
              </Box>
            </Paper>
          </Grid>

          <Grid item={true} xs={12} sm={12} md={9} lg={9}>
            <Paper elevation={3} className={classes.paperStyle}>
              {loadingPost ? (
                <Grid
                  item
                  sm={12}
                  md={12}
                  lg={12}
                  className={classes.gridContainer}>
                  <SkeletonPost nubrSkeleton={9} />
                </Grid>
              ) : (
                <>
                  <ListAd
                    listAds={adsOfUser}
                    titleListe={`You Have ${totaleItems} Post`}
                  />
                  <Pagination
                    totaleItems={totaleItems}
                    itemPerPage={itemPerPage}
                    currentPage={currentPage}
                    changedPage={handelChangePage}
                  />
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
