import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  title: {
    marginTop: 0,
    textAlign: "center",
  },
}));

export default function Stats({ name, population, area, latitude, longitude }) {
  const classes = useStyles();
  return (
    <section data-test="stats" className={classes.root}>
      <h3 className={classes.title}> Stats </h3>
      <hr />
      <p> Name : {name}</p>
      <p> Population : {population} </p>
      <p> Area : {area}</p>
      <p> Latitude : {latitude}</p>
      <p> Longitude : {longitude}</p>
    </section>
  );
}

Stats.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  area: PropTypes.number,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};
