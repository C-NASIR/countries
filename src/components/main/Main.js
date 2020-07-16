import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    marginTop: 0,
  },
  media: {
    width: "100%",
    height: "90%",
    paddingTop: "56.25%", // 16:9
  },
});

export default function Main({ flagUrl }) {
  const classes = useStyles();
  return (
    <main data-test="main">
      <h2 className={classes.title}> United States of America</h2>
      <CardMedia
        className={classes.media}
        image={flagUrl}
        title="Paella dish"
      />
    </main>
  );
}

Main.propTypes = {
  flagUrl: PropTypes.string,
  name: PropTypes.string,
};
