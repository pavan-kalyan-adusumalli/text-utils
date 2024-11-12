import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">Text Utils</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className='nav-link' to={"/"}>Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={"/aboutus"}>About <span className="sr-only">(current)</span></Link>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={props.themechange} />
            <label class="form-check-label" for="flexSwitchCheckChecked">Enable Dark Mode</label>
          </div>
          </form>
        </div>
      </nav>
    </>
  )
}
