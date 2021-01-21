import React from "react"

const OrderBaner = () => {
  return (
    <div className="order-baner">
      <div className="container">
        <p className="order-baner__title">
          Zamów już teraz! <br />
          <span>Skontaktuj się z nami aby ustalić szczegóły projektu.</span>
        </p>
        <a href="/#kontakt" className="btn">
          Skontaktuj się
        </a>
      </div>
    </div>
  )
}

export default OrderBaner
