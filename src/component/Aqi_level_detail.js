import React from 'react'
import { useState } from 'react';
import { InfoCircle } from "react-bootstrap-icons";

export const Aqi_level_detail = () => {

  //css
  const divhei = {
    height: '465px',
  }

  const dihe = {
    height : '800px',
  }
  //css end

  const [displaytext, setDisaplaytext] = useState("");




  const show = () => {

    console.log("clicked");
    // setDisaplaytext("Unhealthy for sensitive Groups ")
    document.getElementById('show').textContent += "Unhealthy for sensitive Groups ";

  }


  return (
    <>x``

      <div className="container bg-light" style={dihe}>

        <div className="row row-cols-1 row-cols-md-6 mb-3 text-center container my-5 ">
          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow-sm ">
              <div className="card-header py-3 text-bg-dark ">
                <p className="my-0 fw-normal text-light "> AQI : 0-50 </p>
              </div>

              <div className="card-body bg-success" style={divhei}>
                <b className='text-light'>  Level :</b> <b>  Good</b>
                <hr />
                <h6 className='text-light'> Health Implications  : </h6> <hr />
                <p className='text-dark'>
                  Air quality is considered satisfactory, and air pollution poses little or no risk
                </p>

              </div>





            </div>
          </div>

          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow-sm ">
              <div className="card-header py-3 text-bg-dark ">
                <p className="my-0 fw-normal text-light">  51-100  </p>
              </div>
              <div className="card-body bg-secondary" style={divhei}>
                <b> Moderate</b>
                <hr />
                <h6 className='text-light'> Health Implications  : </h6> <hr />
                <p className='text-dark'>
                  Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</p>

              </div>
            </div>
          </div>

          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow-sm ">
              <div className="card-header py-3 text-bg-dark ">
                <p className="my-0 fw-normal  text-light">  101-150  </p>
              </div>
              <div className="card-body bg-info" style={divhei}>
                <b> USG  <sup onClick={show} id='shw'> <InfoCircle size={15} /> {show && <div>{show.textContent}</div>} </sup> </b>
                <hr />
                <h6 className='text-light'> Health Implications  : </h6> <hr />
                <p className='text-dark'>Members of sensitive groups may experience health effects. The general public is not likely to be affected.
                </p>

              </div>
            </div>
          </div>


          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow-sm ">
              <div className="card-header py-3 text-bg-dark ">
                <p className="my-0 fw-normal  text-light">  151-200  </p>
              </div>
              <div className="card-body bg-primary" style={divhei}>
                <b> Unhealthy</b>
                <hr />
                <h6 className='text-light'> Health Implications  : </h6><hr />
                <p className='text-dark'>
                  Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects
                </p>

              </div>
            </div>
          </div>



          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow-sm ">
              <div className="card-header py-3 text-bg-dark ">
                <p className="my-0 fw-normal  text-light"> 201-300 </p>
              </div>
              <div className="card-body text-dark bg-warning" style={divhei} >
                <b> Very Unhealthy</b>
                <hr />
                <h6 className='text-light'> Health Implications  : </h6> <hr />
                <p className='text-dark'>
                  Health warnings of emergency conditions. The entire population is more likely to be affected.</p>

              </div>
            </div>
          </div>


          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow-sm ">
              <div className="card-header py-3 text-bg-dark border-">
                <p className="my-0 fw-normal  text-light ">  300+ </p>
              </div>
              <div className="card-body bg-danger" style={divhei}  >
                <b> Hazardous	</b>
                <hr />
                <h6 className='text-light' > Health Implications  : </h6> <hr />
                <p className='text-dark'>Health alert: everyone may experience more serious health effects</p>

              </div>
            </div>
          </div>

        </div>

      </div>

    </>

  )
}
