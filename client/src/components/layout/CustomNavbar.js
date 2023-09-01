import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';
import logo from '../../image/logo2.svg';
import {useSelector} from "react-redux";

export default function CustomNavbar({mClass, nClass, cClass, slogo, hbtnClass}) {
    const cartsCount = useSelector((state) => state.cartReducer.cartsCount);
        return (
            /*<Sticky top={0} innerZ={9999} activeClass="navbar_fixed">*/
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed_area" className={"navbar_fixed"}>
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand ${slogo}`} to="/">
                            <img src={logo} alt=""/>
                            <img src={logo} alt="logo"/>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                               {/* <li className="nav-item"><NavLink title="Home" className="nav-link" to="/home">Home</NavLink></li>*/}
                                <li className="nav-item"><NavLink title="About Us" className="nav-link" to="/about">About</NavLink></li>
                                <li className="dropdown submenu nav-item">
                                    <Link to="/our-offering" title="Our Offering" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Our Offering</Link>
                                    {/*<ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink exact title="Labs" className="nav-link" to='/labs'>Labs</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Smart Classroom" className="nav-link" to='/smart-classroom'>Smart Classroom</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Technology Kit" className="nav-link" to='/technology-kit'>Technology Kit</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Curriculum" className="nav-link" to='/curriculum'>Curriculum</NavLink></li>
                                    </ul>*/}
                                </li>
                                <li className="nav-item dropdown submenu">
                                    <Link to="/products" title="Product" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Products</Link>
                                    {/* <Link to="/Cards" title="Cards" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Cards</Link> */}
                                    {/* <Link to="https://demo.evershop.io/women/seasonal-color-chuck-70-102?color=14&size=26" title="Product" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Products</Link> */}

                                    {/*<a className="nav-link dropdown-toggle" href=".#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Products
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/basic-robotics" className="nav-link">Basic Robotics Kit</NavLink></li>
                                        <li className="nav-item"><NavLink to="/intermediate-robotics" className="nav-link">Intermediate Robotics Kit</NavLink></li>
                                        <li className="nav-item"><NavLink to="/advanced-robotics" className="nav-link">Advanced Robotics Kit</NavLink></li>
                                        <li className="nav-item"><NavLink to="/iot-intermediate" className="nav-link">IOT Intermediate Kit</NavLink></li>
                                        <li className="nav-item"><NavLink to="/iot-advanced" className="nav-link">IOT Advanced Kit</NavLink></li>
                                        <li className="nav-item"><NavLink to="/ai-kit" className="nav-link">AI Kit</NavLink></li>
                                    </ul>*/}
                                </li>
                                <li className="nav-item"><NavLink title="Our Work" className="nav-link" to="/our-work">Our Work</NavLink></li>
                                <li className="nav-item"><NavLink title="contact" className="nav-link" to="/contact">Contact</NavLink></li>
                                {(localStorage.getItem('user')) ?
                                    <>
                                 <li className="nav-item"><NavLink title="contact" className="nav-link" to="/MyAccount">My Account</NavLink></li>
                                 <li className="nav-item"><NavLink title="contact" className="nav-link" to="/cart"> Cart({cartsCount})</NavLink></li>
                                    </>
                                    :''}
                            </ul>
                            {(localStorage.getItem('user')) ? "":
                            <NavLink title="contact"  className={`btn_get btn_hover ${hbtnClass}`} to="/login">
                            Login</NavLink>}
                            
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
};










