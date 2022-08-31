import { useEffect, useState } from "react";
import { getWeather } from "../../apis/weather";
import Weather from "../../components/Weather";
import "./styles.css";

const Welcome = () => {
  const [locationName, setLocationName] = useState("ho chi minh");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getWeather(locationName).then((res) => {
      setWeatherData(res.data);
    });
  }, [locationName]);

  const onChange = (e) => {
    const value = e.target.value;
    setLocationName(value);
  };

  return (
    <section className="section">
      <select className="form-select" value={locationName} onChange={onChange}>
        <option value="ho chi minh">Ho Chi Minh</option>
        <option value="ha noi">Ha Noi</option>
        <option value="da nang">Da Nang</option>
      </select>

      {weatherData && weatherData.name && (
        <Weather data={weatherData} />
      )}
    </section>
  );
};

export default Welcome;
