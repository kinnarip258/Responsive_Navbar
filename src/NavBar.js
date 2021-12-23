import React from 'react'
import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <> 
            <nav className = "main-nav">
                {/* 1st name logo */}
                <div className= "logo">
                    <h2><span>N</span>avbar<span>A</span>pp</h2>
                </div>

                {/* 2nd menu list */}
                <div className = "menu-link">
                    <ul>
                        <li>
                            <NavLink to = "/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>

            {/* 3rd social media logo */}
                <div className = "social-media">
                    <ul className= "social_media_desktop">
                        <li>
                            <a href = "#" target= "_new" className="facebook"> <FaFacebookSquare/> </a>
                        </li>
                        <li>
                            <a href = "#" target= "_new" className="instagram"> <FaInstagramSquare/> </a>
                        </li>
                        <li>
                            <a href = "#" target= "_new" className="youtube"> <FaYoutubeSquare/> </a>
                        </li>
                    </ul>
                </div>

                
            </nav>
            
                
           
        </>
    );
};

export default NavBar;