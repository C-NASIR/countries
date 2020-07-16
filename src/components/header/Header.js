import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(() => ({
  root: {},
  inputBase: {
    fontSize: "2em",
    boxSizing: "border-box",
    paddingLeft: "1em",
    width: "100%",
    border: "1px solid",
    borderRadius: "6px",
    margin: "1em 0",
    flexShrink: 3,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <header data-test="header" className={classes.root}>
      <InputBase
        data-test="search"
        className={classes.inputBase}
        placeholder="Search Your Country ...."
      />
    </header>
  );
}
