import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Home from "../components/home/Home";
import useFetch from "../hooks/useFetch";

function App() {
  const { data, loading } = useFetch("https://restcountries.eu/rest/v2/all");
  return (
    <ThemeProvider theme={createMuiTheme({})}>
      <div data-test="app" style={{ width: "90%", margin: "auto" }}>
        {loading ? "Loading ..." : <Home countries={data} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
