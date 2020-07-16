import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
function App() {
  const countries = [
    {
      name: "cdcndcd",
      flag: "https://restcountries.eu/data/usa.svg",
      region: "dcnscknsjc",
      capital: "sxsxs",
      demonym: "xsjxnsxs",
      subregion: "dcbshbcsdcsc",
      population: 48484884,
      area: 8478474,
      latitude: 474,
      longitude: 47474,
    },
    {
      name: "cdcnddc",
      flag: "https://restcountries.eu/data/usa.svg",
      region: "dcnscknsjc",
      capital: "sxsxs",
      demonym: "xsjxnsxs",
      subregion: "dcbshbcsdcsc",
      population: 48484884,
      area: 8478474,
      latitude: 474,
      longitude: 47474,
    },
    {
      name: "cdcncdc",
      flag: "https://restcountries.eu/data/usa.svg",
      region: "dcnscknsjc",
      capital: "sxsxs",
      demonym: "xsjxnsxs",
      subregion: "dcbshbcsdcsc",
      population: 48484884,
      area: 8478474,
      latitude: 474,
      longitude: 47474,
    },
    {
      name: "cdndcdc",
      flag: "https://restcountries.eu/data/usa.svg",
      region: "dcnscknsjc",
      capital: "sxsxs",
      demonym: "xsjxnsxs",
      subregion: "dcbshbcsdcsc",
      population: 48484884,
      area: 8478474,
      latitude: 474,
      longitude: 47474,
    },
  ];
  return (
    <ThemeProvider theme={createMuiTheme({})}>
      <div data-test="app" style={{ width: "90%", margin: "auto" }}>
        <Header />
        {countries.map((country) => (
          <Home country={country} name="Nasir" key={country.name} />
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
