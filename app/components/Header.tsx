import React from 'react'

const HeaderPage = () => {
  return (
    <div className="header">
        <div className="spacer15"></div>
        <div className="row">
          <div className="col-sm">
            <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link eta-menu eta-hover-a" href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className ="nav-link eta-menu eta-hover-a" href="/profile">PROFILE</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link eta-menu eta-hover-a" href="/contact">CONTACT</a>
                </li>
            </ul>
          </div>
          <div className="col-sm">
            <ul className="nav justify-content-center">
              <h2 className="etah2">Eta</h2>
            </ul>
          </div>
          <div className="col-sm">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link socialColor" target = "_blank" href="https://github.com/eta31/" rel="noopener noreferrer">
                  <i className="fab fa-github fa-lg">
                  </i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link socialColor" target = "_blank" href="mailto:ts.enkhtulga@gmail.com" rel="noopener noreferrer">
                  <i className="fas fa-envelope fa-lg">
                  </i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link socialColor" target = "_blank" href="https://www.linkedin.com/in/enkhtulga-eta/" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-lg">
                  </i>
                  </a>
                </li>
            </ul>
          </div>
        </div>
        </div>
  )
}

export default HeaderPage