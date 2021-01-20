import React from "react"
import { CookiesProvider, withCookies } from "react-cookie"

import Header from "./header"
import Footer from "./footer"

import "../assets/sass/style.scss"

class Layout extends React.Component {
  state = {
    cookieOpen: false,
  }
  componentDidMount() {
    const { cookies } = this.props
    const isAcceptedCoookie = !!cookies.get("cookie-accept-metalkrat")
    !isAcceptedCoookie && this.setState({ cookieOpen: true })
  }

  acceptCookie = () => {
    const { cookies } = this.props

    const promiseSetCookie = new Promise(resolve =>
      resolve(cookies.set("cookie-accept-metalkrat", "active", { path: "/" }))
    )
    promiseSetCookie.then(() => {
      this.setState({ cookieOpen: false })
    })
  }

  render() {
    const { children } = this.props
    return (
      <>
        <CookiesProvider>
          <Header />
          <main>{children}</main>
          {
            // <div
            //   className={`cookie-baner ${
            //     this.state.cookieOpen ? "open" : ""
            //   }`}
            //   id="mainBelt"
            // >
            //   <img
            //     src={require("../assets/images/ico-cookie.svg")}
            //     alt=""
            //     className="cookie-baner__icon"
            //   />
            //   <p className="cookie-baner__text">
            //     Aby zoptymalizować naszą stronę internetową i stale ją
            //     ulepszać, używamy plików cookie.{" "}
            //     <Link to="/polityka-cookies">Dowiedz się więcej</Link>
            //   </p>
            //   <button
            //     className="btn cookie-baner__button"
            //     onClick={this.acceptCookie}
            //   >
            //     Akceptuję
            //   </button>
            // </div>
          }
          <Footer />
        </CookiesProvider>
      </>
    )
  }
}

export default withCookies(Layout)
