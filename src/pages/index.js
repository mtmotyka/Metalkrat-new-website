import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    draggable: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Layout>
      <SEO title="Strona główna" />
      <section className="home-hero">
        <div className="main-content">
          <p className="main-content__name">METALKRAT</p>
          <h1 className="main-content__title">
            największy wybór standardowych i specjalnych bram wjazdowych,
            ogrodzeń, furtek oraz konstrukcji stalowych
          </h1>
          <AnchorLink to="#oferta" className="btn">
            Więcej
          </AnchorLink>
        </div>
      </section>
      <span className="anchor" id="o-firmie"></span>
      <section className="home-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="home-about__title">
                Metalkrat to firma z ponad 25 letnim doświadczeniem
              </h2>
              <p className="home-about__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti numquam, ab itaque ea ad possimus quasi. Laboriosam sed
                optio tempore ipsum. Fugiat accusamus nostrum magni dignissimos
                eligendi nisi modi quod. At aspernatur quia eius laudantium ex,
                ducimus quod mollitia quasi, inventore commodi, voluptate minima
                numquam vero enim odit voluptates vel.
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-4">
                  <div className="single-item">
                    <p className="single-item__number">4</p>
                    <p className="single-item__desc">Specjalizacje</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-4">
                  <div className="single-item">
                    <p className="single-item__number">10</p>
                    <p className="single-item__desc">Lat gwarancji</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-4">
                  <div className="single-item">
                    <p className="single-item__number">600+</p>
                    <p className="single-item__desc">
                      Zrealizowanych projektów
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="image-wrapper">
                <img
                  src={require("../assets/images/about-img.jpg")}
                  alt=""
                  className="img-fluid"
                />
                <div className="red-box">
                  <p className="red-box__number">25</p>
                  <p className="red-box__desc">Lat doświadczenia</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="home-about__second-title">Oferta</h2>
        </div>
      </section>
      <span className="anchor" id="oferta"></span>
      <section className="home-offer">
        <div className="row no-gutters">
          <div className="col-xl-3 col-md-6">
            <Link to="/bramy-przesuwne">
              <div className="single-item single-item--1">
                <h3 className="single-item__title">Bramy przesuwne</h3>
                <p className="single-item__desc">
                  Bramy wjazdowe standardowe i specjalne w tym m.in podwójnie
                  (potrójnie) zsuwane na jedną stronę, przesuwne łukowe.
                  Wypełnienie dowolne.
                </p>
                <Link to="/bramy-przesuwne" className="single-item__button">
                  Dowiedz się więcej
                </Link>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6">
            <Link to="/bramy-skrzydlowe">
              <div className="single-item single-item--2">
                <h3 className="single-item__title">Bramy skrzydłowe</h3>
                <p className="single-item__desc">
                  Bramy uchylne praktycznie bez ograniczeń. Uchylno przesuwne,
                  uchylno łamane, uchylne otwierane "pod górę". Wypełnienie
                  dowolne.
                </p>
                <Link to="/bramy-skrzydlowe" className="single-item__button">
                  Dowiedz się więcej
                </Link>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6">
            <Link to="/furtki-i-ogrodzenia">
              <div className="single-item single-item--3">
                <h3 className="single-item__title">Furtki i ogrodzenia</h3>
                <p className="single-item__desc">
                  Ogrodzenia i furtki dopasowane wizualnie i technologicznie do
                  bramy oraz pozostałych konstrukcji. Konstrukcje stalowe,
                  wypełnienie dowolne.
                </p>
                <Link to="/furtki-i-ogrodzenia" className="single-item__button">
                  Dowiedz się więcej
                </Link>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6">
            <Link to="/konstrukcje-stalowe">
              <div className="single-item single-item--4">
                <h3 className="single-item__title">Konstrukcje stalowe</h3>
                <p className="single-item__desc">
                  Konstrukcje takie jak wiaty, balustrady, poręcze, metalowe
                  schody itp. itd.
                </p>
                <Link to="/konstrukcje-stalowe" className="single-item__button">
                  Dowiedz się więcej
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-special-offer">
        <div className="information-box">
          <p className="information-box__title">
            Brak miejsca na bramę przesuwną?
          </p>
          <h3 className="information-box__title">
            Postaw na bramę <span>podwójnie zsuwaną</span>
          </h3>
          <p className="information-box__desc">
            Autorska konstrukcja, w której brama składa się z dwóch skrzydeł i
            zsuwa się na jedną stornę, podobnie jak drzwi w windzie. Dzięki temu
            można ją montować tam, gdzie jest za mało miejsca na klasyczną bramę
            zsuwaną. Wystarczy tylko <strong>70% długości światła</strong>.
          </p>
          <Link to="/bramy-przesuwne#podwojnie" className="btn">
            Dowiedz się więcej
          </Link>
        </div>
      </section>
      <span className="anchor" id="realizacje"></span>
      <section className="home-gallery">
        <div className="container">
          <h2 className="home-gallery__title">Wybrane realizacje</h2>
          <div className="gallery-slider">
            <Slider {...sliderSettings}>
              <div>
                <div className="single-slide">
                  <div className="image-container image-container--1"></div>
                </div>
              </div>
              <div>
                <div className="single-slide">
                  <div className="image-container image-container--2"></div>
                </div>
              </div>
              <div>
                <div className="single-slide">
                  <div className="image-container image-container--3"></div>
                </div>
              </div>
              <div>
                <div className="single-slide">
                  <div className="image-container image-container--4"></div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <span className="anchor" id="kontakt"></span>
      <section className="home-contact">
        <div className="container">
          <h2 className="home-contact__title">Kontakt</h2>
          <div className="inner">
            <p className="inner__text">
              Andrzej Motyka - Zakład Usług Technicznych Metalkrat <br />
            </p>
            <a href="tel:+48732613301" className="inner__link">
              +48 732 613 301
            </a>
            <a href="mailto:m.adnrzej@onet.eu" className="inner__link">
              m.andrzej@onet.eu
            </a>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40958.53281748108!2d19.911114402325243!3d50.08800369239328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a4a3a6d8e6f%3A0x3eed86443a91a88!2sJ%C3%B3zefa%20Elsnera%2024%2C%2031-311%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1611178464319!5m2!1spl!2spl"
            width="100%"
            title="mapa"
            height="400"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
