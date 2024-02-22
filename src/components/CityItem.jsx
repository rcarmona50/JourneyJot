import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}> {formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;

// "cityName": "Lisbon",
//     "country": "Portugal",
//     "emoji": "🇵🇹",
//     "date": "2027-10-31T15:59:59.138Z",
//     "notes": "My favorite city so far!",
//     "position": {
//       "lat": 38.727881642324164,
//       "lng": -9.140900099907554
//     },
//     "id": "73930385"
//   },
