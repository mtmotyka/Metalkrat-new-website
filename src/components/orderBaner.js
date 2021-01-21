import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const OrderBaner = () => {
  return (
    <div className="order-baner">
      <div className="container">
        <p className="order-baner__title">
          Zamów już teraz! <br />
          <span>Skontaktuj się z nami aby ustalić szczegóły projektu.</span>
        </p>
        <AnchorLink to="/#kontakt" className="btn">
          Skontaktuj się
        </AnchorLink>
      </div>
    </div>
  )
}

export default OrderBaner
