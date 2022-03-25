import { useState, useEffect } from "react";

import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
      console.log(response.data);
    })
  },[search])

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      find countries <input type="text" value={search} onChange={handleSearchInput} />
    </div>
  );
};

export default App;
