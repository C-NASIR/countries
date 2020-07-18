import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import KeyboardEventHandler from "react-keyboard-event-handler";

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

  const capitlize = (str) => {
    if (value.length > 1) {
      const strArray = value.toLowerCase().split("");
      strArray[0] = strArray[0].toUpperCase();
      return strArray.join("");
    }
    return value.toUpperCase();
  };

  const handleSubmit = () => {
    setFilter(capitlize(value));
    setValue("");
  };
  return (
    <header data-test="header" className={classes.root}>
      <KeyboardEventHandler
        handleKeys={["return"]}
        onKeyEvent={() => handleSubmit()}
        style={{ width: "100%" }}
      >
        <InputBase
          className={classes.inputBase}
          placeholder="Search Your Country ...."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={handleSubmit}
        />
      </KeyboardEventHandler>
    </header>
  );
}
