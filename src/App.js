import { useState } from "react";
import "./App.css";
import Search from "./Compo/Search/Search";
import Widget from "./Compo/weather/Widget";

function App() {
  const [CW, SetCW] = useState();
  const [CF, SetCF] = useState();
  const [city, setCity] = useState();

  const [_lat, SetLat] = useState();
  const [_lon, SetLon] = useState();

  const onSearchChangeHandler = (data) => {
    const [lat, lon] = data.value.split(" ");

    SetLat(lat);
    SetLon(lon);
    setCity(data.data);

    // const API_URL = "https://api.openweathermap.org/data/2.5";
    // const API_KEY = "0030b48316abc97821733f4b6bf83987";

    // const FetchWeather = fetch(
    //   `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    // );
    // const FetchForCast = fetch(
    //   `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    // );

    // Promise.all([FetchWeather, FetchForCast])
    //   .then(async (res) => {
    //     const WeatherRes = await res[0].json();
    //     const ForcastRes = await res[1].json();

    //     SetCW({ city: data.label, ...WeatherRes });
    //     SetCF({ city: data.label, ...ForcastRes });
    //   })
    //   .catch((er) => console.log(er));
  };
  return (
    <div>
      <Search onSearchChange={onSearchChangeHandler} />
      {city ? <Widget lat={_lat} lon={_lon} data={city} /> : null}
    </div>
  );
}

export default App;
