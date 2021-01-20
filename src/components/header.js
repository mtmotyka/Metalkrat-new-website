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
      <p className="header__logo">
        METAL<span>KRAT</span>
      </p>
      <nav className="navigation">
        <ul className="navigation__menu">
          <li>
            <Link to="/" activeClassName="current">
              Strona główna
            </Link>
          </li>
          <li>
            <Link>Oferta</Link>
          </li>
          <li>
            <Link>O firmie</Link>
          </li>
          <li>
            <Link>Realizacje</Link>
          </li>
          <li>
            <Link>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
