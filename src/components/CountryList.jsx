import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ countries }) {
  if (!countries.length)
    return <Message message="Welcome! Add a Country first please!" />;

  return (
    <ul className={styles.CountryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
