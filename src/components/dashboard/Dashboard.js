import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Main from "../main/Main";
import Stats from "../stats/Stats";
import Info from "../info/Info";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "20px",
  },
}));

export default function Dashboard({ country }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchS = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div data-test="home" className={classes.root}>
      <Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Grid
                container
                direction={matchS ? "column" : "row"}
                justify="space-around"
                alignItems="stretch"
              >
                <Grid item>
                  {matchS ? (
                    <Main
                      data-test="main"
                      name={country.name}
                      flag={country.flag}
                    />
                  ) : (
                    <Stats
                      data-test="stats"
                      name={country.name}
                      population={country.population}
                      area={country.population}
                      latitude={country.latlng[0]}
                      longitude={country.latlng[1]}
                    />
                  )}
                </Grid>
                <Grid item>
                  {matchS ? (
                    <Stats
                      data-test="stats"
                      name={country.name}
                      population={country.population}
                      area={country.population}
                      latitude={country.latlng[0]}
                      longitude={country.latlng[1]}
                    />
                  ) : (
                    <Main
                      data-test="main"
                      name={country.name}
                      flag={country.flag}
                    />
                  )}
                </Grid>
                <Grid item>
                  <Info
                    data-test="info"
                    name={country.name}
                    capital={country.capital}
                    region={country.region}
                    demonym={country.demonym}
                    subregion={country.subregion}
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

Dashboard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    demonym: PropTypes.string.isRequired,
    subregion: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    area: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
};
