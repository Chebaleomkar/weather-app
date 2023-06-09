  import React, { useEffect, useState } from "react";
  import axios from 'axios';
  import { CloudHaze2, LightningCharge, CloudSnow, Sun, ThermometerHalf, ThermometerHigh, ThermometerLow, TropicalStorm, Wind } from 'react-bootstrap-icons';
  import { Link } from 'react-router-dom';



  export default function Api(props) {


    const [currentDate, setCurrentDate] = useState(new Date());
    const [data2, setData2] = useState([]);
    const [temp, setTemp] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [sunrise, setSunrise] = useState([]);
    const [feels_like, setFeels_like] = useState([]);
    const [min_temp, setMin_temp] = useState([]);
    const [max_temp, setMax_temp] = useState([]);
    const [wind_degrees, setWind_degrees] = useState([]);
    const [wind_speed, setWind_speed] = useState([]);
    // state for aqi 
    const [aqi, setAqi] = useState([]);
    const [coaqi, setCoaqi] = useState([]);
    const [co, setCo] = useState([]);
    const [no2aqi, setNo2aqi] = useState([]);
    const [no2, setNo2] = useState([]);
    const [o3aqi, setO3aqi] = useState([]);
    const [o3, setO3] = useState([]);
    const [so2aqi, setSo2aqi] = useState([]);
    const [so2, setSo2] = useState([]);
    const [pm25aqi, setPm25aqi] = useState([]);
    const [pm25, setPm25] = useState([]);
    const [pm10aqi, setPm10aqi] = useState([]);
    const [pm10, setPm10] = useState([]);



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


    useEffect(() => {
      getData();
      getAQI();
    }, [props.city]);


    return (
      <>

        <div className="container">
          <h1 style={{ fontSize: 50 }}><LightningCharge size={50} />Weather Hub {props.city}</h1>

          <p>
            <b className=" text-success" >Current Date: {currentDate.toDateString()}  </b>

            <b className=" text-success" style={{ "marginLeft": "600px" }} >Time :  {currentDate.toTimeString()} </b>
          </p>


          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center container my-5">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-warning">
                <div className="card-header py-3 text-bg-warning border-warning">
                  <h4 className="my-0 fw-normal"><ThermometerHalf /> Temperatur</h4>
                </div>
                <div className="card-body">

                  <h1 className="card-title pricing-card-title">{temp}<i className="text-body-secondary"><sup>o</sup>C </i>  </h1>



                  <ul className="list-unstyled mt-3 mb-4">

                    <li><ThermometerLow />Min.Temperatur &rarr; {min_temp} <sup>o</sup> c </li>
                    <li><ThermometerHigh />Max. Temperatur &rarr;  {max_temp} <sup>o</sup> c </li>
                    <li><CloudSnow />Feels like &rarr;  {feels_like} </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-info">
                <div className="card-header py-3 text-bg-info border-info">
                  <h4 className="my-0 fw-normal"><CloudHaze2 /> Humidity </h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">{humidity}<i className="text-body-secondary "> % </i></h1>
                  <ul className="list-unstyled mt-3 mb-4">

                    <li><ThermometerLow />Min.Temperatur &rarr; {min_temp} <sup>o</sup> c </li>
                    <li><ThermometerHigh />Max. Temperatur &rarr;  {max_temp} <sup>o</sup> c </li>
                    <li><CloudSnow />Feels like &rarr;{feels_like}  </li>



                  </ul>

                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary ">
                  <h4 className="my-0 fw-normal"><Wind />  Wind</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">{wind_speed} <small className="text-body-secondary ">km/h</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li><TropicalStorm /> wind Degree &rarr; {wind_degrees}<sup>o</sup></li>
                    <li><Sun />Temperatur &rarr; {temp}<sup>o</sup> c</li>
                    <li><CloudSnow />Feels like &rarr;{feels_like} </li>

                  </ul>

                </div>
              </div>
            </div>
          </div>

          {/* // second col */}


          <h2>Air qualtiy report </h2>
          <Link className="btn btn-primary" to="/aqileveldetail" role="button">More about aqi Level </Link>

          <div className="d-grid gap-1 my-4 ">
            <div className="card mb-4 rounded-3 shadow-sm border-warning">
              <div className="card-header py-3 text-bg-success  border-dark">
                <h4 className="my-0 fw-normal "> <b>Overall_AQI </b> &rarr; {aqi} </h4>

              </div>

            </div>

          </div>


          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center container my-2  ">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-warning">
                <div className="card-header py-3 text-bg-warning  border-warning">
                  <h4 className="my-0 fw-normal">CO </h4>
                  <ul className="list-unstyled ">
                    <hr />
                    <li> CO aqi  &rarr; {coaqi}</li>
                    <li>CO con. &rarr; {co}</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-warning">
                <div className="card-header py-3 text-bg-dark text-light border-warning">
                  <h4 className="my-0 fw-normal">NO<sub>2</sub></h4>
                  <hr />
                  <ul className="list-unstyled ">
                    <li>NO<sub>2</sub>aqi  &rarr; {no2aqi}</li>
                    <li>NO<sub>2</sub> con. &rarr; {no2}</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-warning">
                <div className="card-header py-3 text-bg-secondary border-warning">
                  <h4 className="my-0 fw-normal">O<sub>3</sub></h4>
                  <hr />
                  <ul className="list-unstyled ">
                    <li>O<sub>3</sub>aqi  &rarr; {o3aqi}</li>
                    <li>O<sub>3</sub> con. &rarr; {o3}</li>
                  </ul>
                </div>

              </div>
            </div>


            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-warning">
                <div className="card-header py-3 text-bg-info border-warning">
                  <h4 className="my-0 fw-normal">PM 2.5 </h4>
                  <hr />
                  <ul className="list-unstyled ">
                    <li> PM 2.5 aqi  &rarr; {pm25aqi}</li>
                    <li> PM 2.5 con  &rarr; {pm25}</li>
                  </ul>
                </div>

              </div>
            </div>


            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-warning">
                <div className="card-header py-3 text-bg-success border-warning">
                  <h4 className="my-0 fw-normal"> PM10  </h4>
                  <hr />
                  <ul className="list-unstyled ">
                    <li> PM10 aqi  &rarr; {pm10aqi}</li>
                    <li> PM10 con. &rarr; {pm10}</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-warning">
                <div className="card-header py-3 text-bg-danger border-warning">
                  <h4 className="my-0 fw-normal">SO<sub>2</sub></h4>
                  <hr />
                  <ul className="list-unstyled ">
                    <li>SO<sub>2</sub>aqi  &rarr; {so2aqi}</li>
                    <li>SO<sub>2</sub> con. &rarr; {so2}</li>
                  </ul>
                </div>

              </div>
            </div>



          </div>

        </div>



      </>
    );
  };
