import { useContext } from "react";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities } = useCities();
  if (!cities.length)
    return <Message message="Welcome! Add a city first please!" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
