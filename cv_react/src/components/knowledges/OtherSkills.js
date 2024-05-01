import React from 'react';

const OtherSkills = () => {
    return (
        <div className='otherSkills'>
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li><i className='fas fa-check-square'></i> Anglais <em>(Informatique)</em></li>
                    <li><i className='fas fa-check-square'></i> Base de données <em>(SQL)</em></li>
                    <li><i className='fas fa-check-square'></i> Linux <em>(Ubuntu)</em></li>
                    <li><i className='fas fa-check-square'></i> Suites Office</li>
                </ul>
                <ul>
                    <li><i className='fas fa-check-square'></i> Autodesk Sketchbook</li>
                    <li><i className='fas fa-check-square'></i> Assemble des ordinateurs</li>
                    <li><i className='fas fa-check-square'></i> UI/UX <em>(Wix, Figma)</em></li>
                    <li><i className='fas fa-check-square'></i> Méthodes Agile</li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;