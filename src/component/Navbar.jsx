import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to={"/nav"}>NAV</Link>
        <Link className="nav-link" href="#">Features</Link>
        <Link className="nav-link" href="#">Pricing</Link>
        <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
      </div>
    </div> */}
  </div>
</nav>
    </div>
  )
}

export default Navbar