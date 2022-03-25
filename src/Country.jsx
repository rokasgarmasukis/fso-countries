const Country = ({country}) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>
      <div>
        <p>Languages:</p>
        <ul>
          {Object.entries(country.languages).map(([k,language]) => (
            <li>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt="" />
      </div>
    </div>
  );
};

export default Country;