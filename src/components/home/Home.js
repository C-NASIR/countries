import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Header from "../header/Header";
import Main from "../main/Main";
import Stats from "../stats/Stats";
import Info from "../info/Info";

const useStyles = makeStyles(() => ({
  root: {
    width: "90%",
    margin: "auto",
  },
}));

export default function Home({ name }) {
  const classes = useStyles();
  console.log("This shoudl work ", name);
  return (
    <div data-test="home" className={classes.root}>
      <Header data-test="header" />
      <Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="stretch"
              >
                <Grid item>
                  <Stats data-test="stats" />
                </Grid>
                <Grid item>
                  <Main data-test="main" />
                  <CardMedia
                    className={classes.media}
                    // image={country.flag}
                    title="Paella dish"
                  />
                </Grid>
                <Grid item>
                  <Info
                    data-test="info"
                    // name={country.name}
                    // capital={country.capital}
                    // region={country.region}
                    // demonym={country.demonym}
                    // subregion={country.subregion}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  // country: PropTypes.shape({
  //   name: PropTypes.string,
  //   flag: PropTypes.string.isRequired,
  //   gender: PropTypes.oneOf(["M", "F"]),
  //   birthdate: PropTypes.instanceOf(Date),
  //   isAuthor: PropTypes.bool,
  // }),
  name: PropTypes.string.isRequired,
};
