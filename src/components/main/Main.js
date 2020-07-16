import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  title: {
    marginTop: 0,
    textAlign: "center",
  },
});

export default function Main({ flag, name }) {
  const classes = useStyles();
  return (
    <main data-test="main" className={classes.root}>
      <h1 className={classes.title}> {name} </h1>
      <img src={flag} className={classes} width="320" alt={`Flag of ${name}`} />
    </main>
  );
}

Main.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
