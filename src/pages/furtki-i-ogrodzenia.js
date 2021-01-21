import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubpageHeader from "../components/subpageHeader"
import OrderBaner from "../components/orderBaner"

const FurtkiOgrodzenia = () => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

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
                  <li>Możliwość wyboru storny otwierania furtki</li>
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
    </Layout>
  )
}

export default FurtkiOgrodzenia
