import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import useFetch from "../hooks/useFetch";
import Header from "../components/header/Header";
import Home from "../components/home/Home";

function App() {
  const { data, loading } = useFetch("https://restcountries.eu/rest/v2/all");
  return (
    <ThemeProvider theme={createMuiTheme({})}>
      <div data-test="app" style={{ width: "90%", margin: "auto" }}>
        <Header />
        {loading
          ? "Loading ..."
          : data.map((country) => (
              <Home country={country} name="Nasir" key={country.name} />
            ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
