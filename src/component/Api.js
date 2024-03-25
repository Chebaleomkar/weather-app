import React, { useEffect, useState } from "react";
import axios from 'axios';
import { CloudHaze2, LightningCharge, CloudSnow, Sun, ThermometerHalf, ThermometerHigh, ThermometerLow, TropicalStorm, Wind, GeoAltFill, GearFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import i18next from "i18next";

export default function Api(props) {

  const {t} = useTranslation();

  const [time, setTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data2, setData2] = useState(0);
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [sunrise, setSunrise] = useState(0);
  const [feels_like, setFeels_like] = useState(0);
  const [min_temp, setMin_temp] = useState(0);
  const [max_temp, setMax_temp] = useState(0);
  const [wind_degrees, setWind_degrees] = useState(0);
  const [wind_speed, setWind_speed] = useState(0);
  // state for aqi 
  const [aqi, setAqi] = useState(0);
  const [coaqi, setCoaqi] = useState(0);
  const [co, setCo] = useState(0);
  const [no2aqi, setNo2aqi] = useState(0);
  const [no2, setNo2] = useState(0);
  const [o3aqi, setO3aqi] = useState(0);
  const [o3, setO3] = useState(0);
  const [so2aqi, setSo2aqi] = useState(0);
  const [so2, setSo2] = useState(0);
  const [pm25aqi, setPm25aqi] = useState(0);
  const [pm25, setPm25] = useState(0);
  const [pm10aqi, setPm10aqi] = useState(0);
  const [pm10, setPm10] = useState(0);



  // weatherreport api: 1
  const weatherreport = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    params: { city: `${props.city}` },
    headers: {
      'X-RapidAPI-Key': 'fe2f26c906msh336fdf1b2d865e1p1b3814jsn02a4de671e51',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  async function getData() {
    try {
      const res = await axios.request(weatherreport);
      setData2(res.data);
      setTemp(res.data.temp);
      setHumidity(res.data.humidity);
      setSunrise(res.data.sunrise);
      setFeels_like(res.data.feels_like);
      setMax_temp(res.data.max_temp);
      setMin_temp(res.data.min_temp);
      setWind_degrees(res.data.wind_degrees);
      setWind_speed(res.data.wind_speed);
    } catch (error) {
      console.error(error);
    }
  }

  // aqi api: 2

  const weatherAqi = {
    method: 'GET',
    url: `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?`,
    params: { city: `${props.city}` },
    headers: {
      'X-RapidAPI-Key': 'fe2f26c906msh336fdf1b2d865e1p1b3814jsn02a4de671e51',
      'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
  };

  async function getAQI() {
    try {
      const res2 = await axios.request(weatherAqi);
      console.log(res2);
      setAqi(res2.data.overall_aqi);
      setCoaqi(res2.data.CO.aqi)
      setCo(res2.data.CO.concentration);

      setNo2aqi(res2.data.NO2.aqi);
      setNo2(res2.data.NO2.concentration);

      setO3aqi(res2.data.O3.aqi);
      setO3(res2.data.O3.concentration);

      setSo2aqi(res2.data.SO2.aqi);
      setSo2(res2.data.SO2.concentration);

      setPm25aqi(res2.data["PM2.5"].aqi);
      setPm25(res2.data["PM2.5"].concentration);

      setPm10aqi(res2.data.PM10.aqi);
      setPm10(res2.data.PM10.concentration);

    } catch (error) {
      console.error(error);
    }
  }

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };


  useEffect(() => {
    
    getData();
    getAQI();
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [props.city]);


  return (
    <>

      <div className="container">
        <h1 className="" style={{ fontSize: 50 }}>
          <LightningCharge size={50} />
          Weather Hub
        </h1>
        <h4 className="">
          <GeoAltFill /> {t("NAME.CITY")} : {props.city}
        </h4>

        <div className="row justify-content-start my-3 ">
          <div className="col-6 col-md-4 col-lg-3">
            <div className="card border-warning">
              <div className="card-body text-center">
                <h2 className="card-title"></h2>
                <p className="card-text">
                  <span id="clock" className="fw-bold text-dark"> {t("NAME.TIME")} : {formatTime(time)}</span> <br/>
                  <b className="text-dark">  {t("NAME.DATE")}: {currentDate.toDateString()}  </b>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center my-5">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-warning">
              <div className="card-header py-3 text-bg-warning border-warning">
                <h4 className="my-0 fw-normal">
                  <ThermometerHalf />   {t("NAME.TEMPERATURE")}
                </h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  {temp}
                  <i className="text-body-secondary">
                    <sup>o</sup>C
                  </i>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <ThermometerLow /> {t("NAME.MIN")}  &rarr; {min_temp} <sup>o</sup>C
                  </li>
                  <li>
                    <ThermometerHigh /> {t("NAME.MAX")}  {t("NAME.TEMPERATURE")} &rarr; {max_temp} <sup>o</sup>C
                  </li>
                  <li>
                    <CloudSnow />{t("NAME.FEELS_LIKE")} &rarr; {feels_like}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-info">
              <div className="card-header py-3 text-bg-info border-info">
                <h4 className="my-0 fw-normal">
                  <CloudHaze2 /> {t("NAME.HUMIDITY")} 
                </h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  {humidity}
                  <i className="text-body-secondary">%</i>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <ThermometerLow /> {t("NAME.MIN")}  {t("NAME.TEMPERATURE")}&rarr; {min_temp} <sup>o</sup>C
                  </li>
                  <li>
                    <ThermometerHigh />  {t("NAME.MAX")} {t("NAME.TEMPERATURE")} &rarr; {max_temp} <sup>o</sup>C
                  </li>
                  <li>
                    <CloudSnow />{t("NAME.FEELS_LIKE")}  &rarr; {feels_like}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">
                  <Wind /> {t("NAME.WIND")}
                </h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  {wind_speed} <small className="text-body-secondary">km/h</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <TropicalStorm /> {t("NAME.WIND_DEGREE")} &rarr; {wind_degrees}<sup>o</sup>
                  </li>
                  <li>
                    <Sun /> {t("NAME.TEMPERATURE")} &rarr; {temp}<sup>o</sup>C
                  </li>
                  <li>
                    <CloudSnow />{t("NAME.FEELS_LIKE")} &rarr; {feels_like}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center"> {t("NAME.AIR_QUALITY_REPORT")}</h2>

        <div className="d-grid gap-1 my-4">
          <div className="card mb-4 rounded-3 shadow-sm border-warning">
            <div className="card-header py-3 text-bg-info border-dark">
              <h4 className="my-0 fw-normal">
                <b>{t("NAME.OVERALL_AQI")}</b> &rarr; {aqi}
              </h4>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-warning">
              <div className="card-header py-3 text-bg-warning border-warning">
                <h4 className="my-0 fw-normal">CO</h4>
                <ul className="list-unstyled">
                  <hr />
                  <li>CO AQI &rarr; {coaqi}</li>
                  <li>CO {t("NAME.CONCENTRATION")} &rarr; {co}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-warning">
              <div className="card-header py-3 text-bg-dark text-light border-warning">
                <h4 className="my-0 fw-normal">NO<sub>2</sub></h4>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    NO<sub>2</sub> AQI &rarr; {no2aqi}
                  </li>
                  <li>
                    NO<sub>2</sub>  {t("NAME.CONCENTRATION")} &rarr; {no2}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-warning">
              <div className="card-header py-3 text-bg-secondary border-warning">
                <h4 className="my-0 fw-normal">O<sub>3</sub></h4>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    O<sub>3</sub> AQI &rarr; {o3aqi}
                  </li>
                  <li>
                    O<sub>3</sub>  {t("NAME.CONCENTRATION")} &rarr; {o3}
                  </li>
                </ul>
              </div>
            </div>
          </div>

         

          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-warning">
              <div className="card-header py-3 text-bg-info border-warning">
                <h4 className="my-0 fw-normal">PM 2.5</h4>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    PM 2.5 AQI &rarr; {pm25aqi}
                  </li>
                  <li>
                    PM 2.5  {t("NAME.CONCENTRATION")} &rarr; {pm25}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-warning">
              <div className="card-header py-3 text-bg-success border-warning">
                <h4 className="my-0 fw-normal">PM 10</h4>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    PM 10 AQI &rarr; {pm10aqi}
                  </li>
                  <li>
                    PM 10  {t("NAME.CONCENTRATION")} &rarr; {pm10}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-warning">
              <div className="card-header py-3 text-bg-warning border-warning">
                <h4 className="my-0 fw-normal">SO2</h4>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    SO2 AQI &rarr; {so2aqi}
                  </li>
                  <li>
                   SO2  {t("NAME.CONCENTRATION")} &rarr; {so2}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link className="btn btn-success ml-24" to="/aqileveldetail" role="button"> {t("NAME.MORE_ABOUT_AQI_LEVEL")}</Link>
          
        </div>

      </div> 





    </>
  );
};
