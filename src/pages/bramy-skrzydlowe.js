import React from "react"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubpageHeader from "../components/subpageHeader"
import OrderBaner from "../components/orderBaner"

const BramySkrzydlowe = () => {
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
      <SEO title="Bramy skrzydlowe" />
      <SubpageHeader title="Bramy skrzydlowe" />

      <section className="product-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-container">
                <h2 className="text-container__title">
                  Bramy skrzydlowe klasyczne
                </h2>
                <p className="text-container__desc">
                  Klasyczna konstrukcja bram skrzydłowych. Dwa skrzydła uchylają
                  się do wewnątrz posesji, a po zamknięciu spotykają się na
                  środku podjazdu.
                </p>
                <ul className="text-container__list">
                  <li>
                    Idealne do posesji, na których nie ma warunków do
                    zamontowania bramy przesuwnej
                  </li>
                  <li>
                    Do posesji bez żadnych utrudnień (np. pochylenie terenu)
                  </li>
                  <li>Konstrukcja stalowa</li>
                  <li>Wypełnienie metalowe lub drewniane</li>
                  <li>
                    Różne rodzaje radia pozwalające na zwiększenie lub
                    zmniejszenie zasięgu pilota
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="slider-wrapper">
                <Slider {...sliderSettings}>
                  <div>
                    <div className="single-slide">
                      <img
                        src={require("../assets/images/przesuwna-1.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="single-slide">
                      <img
                        src={require("../assets/images/przesuwna-1.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="text-container text-container--right">
                <h2 className="text-container__title">
                  Bramy skrzydłowe uchylne "pod górę"
                </h2>
                <p className="text-container__desc">
                  Bramy skrzydłowe uchylne "pod górę" dzięki specjalnej
                  konstrukcji można zamontować na posesji ze spadkiem.
                </p>
                <ul className="text-container__list">
                  <li>
                    Idealne do małych posesji z brakiem miejsce na odsunięcie
                    bramy
                  </li>
                  <li>Przeznaczone do posesji ze spadkiem</li>
                  <li>Możliwość otwierania "pod górę"</li>
                  <li>Konstrukcja stalowa</li>
                  <li>Wypełnienie metalowe lub drewniane</li>
                  <li>
                    Różne rodzaje radia pozwalające na zwiększenie lub
                    zmniejszenie zasięgu pilota
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="slider-wrapper">
                <img
                  src={require("../assets/images/pod-gore-1.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-container">
                <h2 className="text-container__title">Bramy uchylno łamane</h2>
                <p className="text-container__desc">
                  Bramy uchylne na jedną stronę, dodatkowo łamane w celu
                  oszczędzenia miejsca na posesji.
                </p>
                <ul className="text-container__list">
                  <li>
                    Idealne do małych posesji z brakiem miejsce na odsunięcie
                    bramy
                  </li>
                  <li>
                    Do posesji o niestandardowych kształtach i ukształtowaniu
                    uniemożliwiającym zamontownaie innego rodzaju bram
                  </li>
                  <li>Od małych dwu metrowych po nawet 9m</li>
                  <li>Konstrukcja stalowa</li>
                  <li>Wypełnienie metalowe lub drewniane</li>
                  <li>
                    Różne rodzaje radia pozwalające na zwiększenie lub
                    zmniejszenie zasięgu pilota
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="slider-wrapper">
                <img
                  src={require("../assets/images/lamane-1.jpg")}
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

export default BramySkrzydlowe
