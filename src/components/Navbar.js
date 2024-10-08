import React from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../config";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { contentInfo } = useSelector((state) => state.content);
    const url = window.location.pathname;
    const navigate = useNavigate();
    const handleAboutScroll = () => {
        const element = document.getElementById("about");
        if (url == "/") {
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        else if (url == "/about") {

        }
        else {
            navigate('/');

            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    const handleContactScroll = () => {
        const element = document.getElementById("contact");
        if (url == "/") {
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        else {
            navigate('/');
            const element = document.getElementById("contact");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    const handleProductScroll = () => {
        const element = document.getElementById("products");
        if (url == "/") {
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        else {
            navigate('/');
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    const handleTeamScroll = () => {
        const element = document.getElementById("team");
        if (url == "/") {
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        else {
            navigate('/');
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light p-0 pb-2 text-primary"
            id="header"
        >
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link cursor"
                            id="about_button"
                            onClick={handleProductScroll}
                        >
                            {contentInfo?.general.navbar_products_title}
                        </a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle cursor"
                            id="products_button"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {contentInfo?.general.navbar_products_title}
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </li> */}
                    <li className="nav-item">
                        <a
                            className="nav-link cursor"
                            id="about_button"
                            onClick={handleAboutScroll}
                        >
                            {contentInfo?.general.navbar_about_title}
                        </a>
                    </li>
                </ul>
                <a
                    href="/"
                    className="navbar-brand mx-auto cursor"
                    id="logo_button"
                >
                    <img
                        className="logo-size"
                        src={`${BASE_URL}/storage/${contentInfo?.general.logo}`}
                        alt="Global Medics"
                    />
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link cursor"
                            id="team_button"
                            onClick={handleTeamScroll}
                        >
                            {contentInfo?.general.navbar_team_title}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link cursor"
                            id="contact_button"
                            onClick={handleContactScroll}
                        >
                            {contentInfo?.general.navbar_contact_title}
                        </a>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <div className="searchBox">
                        <input
                            className="searchInput"
                            type="text"
                            name=""
                            placeholder=""
                        />
                        <button className="searchButton" href="#">
                            <i className="fa fa-search cursor"></i>
                        </button>
                    </div>
                </form> */}
                {/* <form className="form-inline my-2 my-lg-0">
            <div className="input-group rounded">
                <span className="input-group-text border-0" id="search-addon">
                  <a><i className="fa fa-search cursor"></i></a>
                  
                </span>
              </div>
          </form> */}
            </div>
        </nav>
    );
};

export default Navbar;