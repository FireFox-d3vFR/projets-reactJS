import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Jonathan Maquenhem</h1>
                    <h2>Développeur Front-end</h2>
                    <div className="pdf">
                        <a href="./media/cv-jonathan-maquenhem.pdf" target="_blank">Télécharger CV</a> {/* _blank : ouvre le lien dans une autre page */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;