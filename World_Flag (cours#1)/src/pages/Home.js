import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Countries from '../components/Countries';

const Home = () => {
    return (
        <div>
            <Logo />
            {/* J'appelle le components - Navigation */}
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;