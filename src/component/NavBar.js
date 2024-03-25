import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from './Api';
import { Alert } from './Alert';
import i18next from 'i18next';
import {  useTranslation } from 'react-i18next';


export default function NavBar(props) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { t } = useTranslation();
  console.log('Nested translation:', t("NAME.HOME"));

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand text-info" href="/"><i>WeatherHub</i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"> {t("NAME.HOME")}  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{t("NAME.ABOUT")} </Link>
              </li>

              <li>
              <button className="btn btn-primary" onClick={() => { console.log('Switching to Hindi'); i18next.changeLanguage('hi') }}>  हिंदी  </button>
              </li>
            
            <li>
              <button className="btn btn-primary"  onClick={() => { i18next.changeLanguage('en') }}>  English </button>
            </li>


            </ul>
            <form className="d-flex border border-info" role="search">
              <input className="form-control me-2" type="search" placeholder={t("NAME.SEARCH_CITY")}  aria-label="Search" value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
        </div>
      </nav>

      <Alert msg="Enter a city name to retrieve the search results." />

      <Api city={searchQuery} />
    </>
  );
}


