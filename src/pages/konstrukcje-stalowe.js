import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubpageHeader from "../components/subpageHeader"
import OrderBaner from "../components/orderBaner"

const KonstrukcjeStalowe = () => {
  return (
    <Layout>
      <SEO title="Konstrukcje stalowe" />
      <SubpageHeader title="Konstrukcje stalowe" />

      <section className="product-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-container">
                <h2 className="text-container__title">Konstrukcje stalowe</h2>
                <p className="text-container__desc">
                  Konstrukcje stalowe oraz aluminiowe wszelkiego rodzaju. Od
                  poręczy i schodów po nawet kładki i małe pomosty.
                </p>
                <ul className="text-container__list">
                  <li>Konstrukcja stalowa lub aluminiowa</li>
                  <li>Wypełnienie (jeśli potrzebne) drewniane lub metalowe</li>
                  <li>Schody</li>
                  <li>Poręcze i balustrady</li>
                  <li>Pomosty i kładki</li>
                  <li>Wiaty oraz podobne konstrukcje</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="slider-wrapper">
                <img
                  src={require("../assets/images/stalowe-1.jpg")}
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

export default KonstrukcjeStalowe
