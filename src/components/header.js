import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-lg)`,
        textDecoration: `none`,
      }}
    >
      μ<b>R</b> 
    </Link>
  </header>
)

export default Header
