import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} > {/* ClassName permet de récupérer le css concernant la barre sous la rubrique de la page active */}
                    <li>accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>à propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;