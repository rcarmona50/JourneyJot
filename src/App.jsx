import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        // setIsLoading(true);
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        setCities(data);
        setCountries(data);
      } catch {
        alert("something is wrong");
      } finally {
        // setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList cities={cities} />} />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList countries={countries} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
