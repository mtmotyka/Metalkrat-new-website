import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      <nav className={`navigation ${isMenuOpen === true ? "opened" : ""}`}>
        <ul className="navigation__menu ">
          <li role="presentation" onClick={() => setIsMenuOpen(false)}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Strona główna
            </Link>
          </li>
          <li role="presentation" onClick={() => setIsMenuOpen(false)}>
            <AnchorLink to="/#oferta">Oferta</AnchorLink>
          </li>
          <li role="presentation" onClick={() => setIsMenuOpen(false)}>
            <AnchorLink to="/#realizacje">Realizacje</AnchorLink>
          </li>
          <li role="presentation" onClick={() => setIsMenuOpen(false)}>
            <AnchorLink to="/#o-firmie">O firmie</AnchorLink>
          </li>
          <li role="presentation" onClick={() => setIsMenuOpen(false)}>
            <AnchorLink to="/#kontakt">Kontakt</AnchorLink>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        aria-label="Otwórz menu"
        className={`hamburger hamburger--squeeze ${
          isMenuOpen === true ? "is-active" : ""
        }`}
        onClick={e => setIsMenuOpen(!isMenuOpen)}
      >
        {Array(4)
          .fill(null)
          .map(index => (
            <span key={index} />
          ))}
      </button>
    </header>
  )
}

export default Header
