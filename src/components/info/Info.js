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

function Info({ name, capital, region, demonym, subregion }) {
  const classes = useStyles();
  return (
    <section data-test="info" className={classes.root}>
      <h3 className={classes.title}> Info</h3>
      <hr />
      <p> Name : {name}</p>
      <p> Capital : {capital}</p>
      <p> Region : {region} </p>
      <p> Demonym : {demonym}</p>
      <p> Subregion : {subregion}</p>
    </section>
  );
}

Info.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  demonym: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
};

export default Info;
