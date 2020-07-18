import React, { useState } from "react";
import Header from "../header/Header";
import Dashboard from "../dashboard/Dashboard";
export default function Home({ countries }) {
  const [filter, setFilter] = useState("");
  const searchFilter = () => {
    return countries.filter((country) => country.name.startsWith(filter));
  };
  return (
    <React.Fragment>
      <Header setFilter={setFilter} />
      {searchFilter(filter).map((country) => (
        <Dashboard country={country} name="Nasir" key={country.name} />
      ))}
    </React.Fragment>
  );
}
