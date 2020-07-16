import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Home from "../components/home/Home";
function App() {
  const country = {
    name: "cdcndcdc",
    flag: "https://restcountries.eu/data/usa.svg",
    region: "dcnscknsjc",
  };
  return (
    <ThemeProvider theme={createMuiTheme({})}>
      <div data-test="app">
        <Home country={country} name="Nasir" />
      </div>
    </ThemeProvider>
  );
}

export default App;
