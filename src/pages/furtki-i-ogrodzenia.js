import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubpageHeader from "../components/subpageHeader"
import OrderBaner from "../components/orderBaner"

const FurtkiOgrodzenia = () => {
  return (
    <Layout>
      <SEO title="Furtki i ogrodzenia" />
      <SubpageHeader title="Furtki i ogrodzenia" />

      <section className="product-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-container">
                <h2 className="text-container__title">Furtki i ogrodzenia</h2>
                <p className="text-container__desc">
                  Ogrodzenia i furtki dopasowane wizualnie i technologicznie do
                  bramy oraz pozostałych elementów otoczenia. Konstrukcje
                  stalowe, wypełnienie dowolne.
                </p>
                <ul className="text-container__list">
                  <li>Możliwość wyboru strony otwierania furtki</li>
                  <li>
                    Instalacja domofonów, wideodomofonów, zamków oraz
                    elektrozaczepów
                  </li>
                  <li>Dowolny wybór gałek i klamek</li>
                  <li>Wypełnienie metalowe lub drewniane</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="slider-wrapper">
                <img
                  src={require("../assets/images/ogrodzenia-1.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <OrderBaner />
      <div className="offer-navigation">
        <h2 className="offer-navigation__title">To nie to czego szukasz?</h2>
        <p className="offer-navigation__text">Sprawdź inne oferty</p>
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="single-tile">
              <h3 className="single-tile__title">Bramy przesuwne</h3>
              <Link to="/bramy-przesuwne" className="single-tile__link">
                Sprawdź <span>{">"}</span>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-tile">
              <h3 className="single-tile__title">Bramy skrzydłowe</h3>
              <Link to="/bramy-skrzydlowe" className="single-tile__link">
                Sprawdź <span>{">"}</span>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-tile">
              <h3 className="single-tile__title">Konstrukcje stalowe</h3>
              <Link to="/konstrukcje-stalowe" className="single-tile__link">
                Sprawdź <span>{">"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FurtkiOgrodzenia
