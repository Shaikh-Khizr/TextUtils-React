import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    let navbarColor = props.mode;
    if (navbarColor === 'green') {
        navbarColor = 'dark';
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${navbarColor} bg-${props.mode}`}>
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
                                <a className="nav-link" href="#">{props.aboutText}</a>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form> */}
                        <div>

                        <ul className="navbar-nav mx-4">
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#navbarDropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Change Mode
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input mx-1" type="radio" name="mode" onClick={props.toggleMode} id="lightMode" value="light" defaultChecked />
                                            <label className="form-check-label" htmlFor="lightMode">
                                                Light Mode
                                            </label>
                                        </div>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input mx-1" type="radio" name="mode" onClick={props.toggleMode} id="darkMode" value="dark" />
                                            <label className="form-check-label" htmlFor="darkMode">
                                                Dark Mode
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input mx-1" type="radio" name="mode" onClick={props.toggleMode} id="greenMode" value="green" />
                                            <label className="form-check-label" htmlFor="greenMode">
                                                Green Mode
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        </div>
                        {/* <div className={`form-check text-${props.mode === 'dark' ? 'light' : 'dark'}`}> 
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}