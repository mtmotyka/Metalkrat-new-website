import React from "react"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubpageHeader from "../components/subpageHeader"
import OrderBaner from "../components/orderBaner"

const BramyPrzesuwne = () => {
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
      <SEO title="Bramy przesuwne" />
      <SubpageHeader title="Bramy przesuwne" />

      <section className="product-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-container">
                <h2 className="text-container__title">
                  Bramy pojedynczo zsuwane
                </h2>
                <p className="text-container__desc">
                  Klasyczne bramy pojedynczo zsuwane to bramy, które można
                  zobaczyć na większości posesji.
                </p>
                <ul className="text-container__list">
                  <li>
                    Idealne do dużych posesji z miejscem na odsunięcie bramy
                  </li>
                  <li>Od małych dwu metrowych po nawet 9m</li>
                  <li>Konstrukcja stalowa</li>
                  <li>Wypełnienie metalowe lub drewniane</li>
                  <li>Różne rodzaje napędów: standardowy oraz szybki</li>
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
      <span className="anchor" id="podwojnie"></span>
      <section className="product-section">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="text-container text-container--right">
                <h2 className="text-container__title">
                  Bramy podwójnie (potrójnie) zsuwane
                </h2>
                <p className="text-container__desc">
                  Bramy podwójnie (potrójnie) zsuwane{" "}
                  <strong>na jedną stronę</strong> to niespotykana i autorska
                  konstrukcja. Brama składa się z dwóch skrzydeł, które
                  otwierają się na jedną stronę. Jedno skrzydło nachodzi na
                  drugie (tak jak np. drzwi w windzie). Dzięki takiemu
                  rozwiązaniu można zdecydować się na bramę jeśli nie ma się
                  dość miejsca na jej odsunięcie. Przy klasycznych bramach
                  potrzebne miejsce na jej odsunięcie to minimum długość bramy +
                  ok. 20% ogona. Przy podwójnie zsuwanych wystarczy ok.{" "}
                  <strong>70% całej długości bramy</strong>
                </p>
                <ul className="text-container__list">
                  <li>
                    Idealne do małych posesji z brakiem miejsce na odsunięcie
                    bramy
                  </li>
                  <li>Od małych dwu metrowych po nawet 9m</li>
                  <li>Konstrukcja stalowa</li>
                  <li>Wypełnienie metalowe lub drewniane</li>
                  <li>Różne rodzaje napędów: standardowy oraz szybki</li>
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
                        src={require("../assets/images/podwojnie-2.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="single-slide">
                      <img
                        src={require("../assets/images/podwojnie-1.jpg")}
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
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-container">
                <h2 className="text-container__title">
                  Bramy przesuwne łukowo
                </h2>
                <p className="text-container__desc">
                  Bramy przesuwne o niestandardowym kształcie. Wygięte w łuk
                  umożliwiają dopasowanie ich do zakrzywionych wjazdów posesji.
                </p>
                <ul className="text-container__list">
                  <li>
                    Idealne do dużych posesji z miejscem na odsunięcie bramy
                  </li>
                  <li>Od małych dwu metrowych po nawet 9m</li>
                  <li>
                    Kształt łuku pozwoli dostosować je do niestandardowych
                    kształtów posesji
                  </li>
                  <li>Konstrukcja stalowa</li>
                  <li>Wypełnienie metalowe lub drewniane</li>
                  <li>Różne rodzaje napędów: standardowy oraz szybki</li>
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
                  src={require("../assets/images/lukowa-1.jpg")}
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

export default BramyPrzesuwne
