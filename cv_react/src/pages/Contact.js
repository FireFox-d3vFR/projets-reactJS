import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard'; // Permet de copier le texte

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Villeurbanne</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0777750929">
                                <span
                                    className="clickInput"
                                    onClick={
                                        () => {
                                            alert('Numéro de téléphone copié !');
                                        }
                                    }>
                                    07 77 75 09 29
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-at"></i>
                            <CopyToClipboard text="maquenhem.jonathan@gmail.com">
                                <span
                                    className="clickInput"
                                    onClick={
                                        () => {
                                            alert('Adresse mail copié !');
                                        }
                                    }>
                                    maquenhem.jonathan@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.google.com" target='_blank' rel='noopener noreferrer'>
                                <h4>LinkedIn</h4>
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target='_blank' rel='noopener noreferrer'>
                                <h4>GitHub</h4>
                                <i className='fab fa-github'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target='_blank' rel='noopener noreferrer'>
                                <h4>Facebook</h4>
                                <i className='fab fa-facebook'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target='_blank' rel='noopener noreferrer'>
                                <h4>Instagram</h4>
                                <i className='fab fa-instagram'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;