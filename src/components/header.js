import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 200)
    })
  }, [])

  return (
    <header className={`header ${isScrolled ? "shrink" : ""}`}>
      <Link to="/" className="header__logo">
        METAL<span>KRAT</span>
      </Link>
      <nav className="navigation">
        <ul className="navigation__menu">
          <li>
            <Link to="/" activeClassName="current">
              Strona główna
            </Link>
          </li>
          <li>
            <a href="/#oferta">Oferta</a>
          </li>
          <li>
            <a href="/#realizacje">Realizacje</a>
          </li>
          <li>
            <a href="/#o-firmie">O firmie</a>
          </li>
          <li>
            <a href="/#kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
