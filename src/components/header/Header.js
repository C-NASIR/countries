import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  inputBase: {
    fontSize: "2em",
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: "1em",
    border: "1px solid",
    borderRadius: "6px",
    margin: "1em 0",
    flexShrink: 3,
  },
}));

export default function Header({ setFilter }) {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const handleSubmit = () => {
    setFilter(value);
  };
  return (
    <header data-test="header" className={classes.root}>
      <InputBase
        data-test="search"
        className={classes.inputBase}
        placeholder="Search Your Country ...."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Search
      </Button>
    </header>
  );
}
