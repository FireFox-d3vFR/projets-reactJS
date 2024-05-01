import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/photo_profil.jpg" alt="profil-pic" />
                    <h3>Jonathan Maquenhem</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        {/* Ceci permet d'amener au lien direct */}
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        {/* Ceci permet d'amener au lien direct */}
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        {/* Ceci permet d'amener au lien direct */}
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        {/* Ceci permet d'amener au lien direct */}
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="Socialnetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/jonathan-maquenhem/" target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/FireFox-d3vFR" target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100008490423526" target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook'></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/firefox_drawingfr/" target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>FireFox-d3vFR - 2023</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;