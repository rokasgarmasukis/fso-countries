import Country from "./Country";

import { useState, useEffect } from "react";

import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const countriesToShow = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  console.log(countriesToShow);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  if (countriesToShow.length === 1) {
    return (
      <div>
        <input type="text" value={search} onChange={handleSearchInput} />
        <Country country={countriesToShow[0]} />
      </div>
    );
  } else if (countriesToShow.length > 10) {
    return (
      <div>
        <input type="text" value={search} onChange={handleSearchInput} />
        <p>Too many results, specify search</p>
      </div>
    );
  } else {
    return (
      <div>
        <input type="text" value={search} onChange={handleSearchInput} />
        {countriesToShow.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))}
      </div>
    );
  }
};

export default App;
