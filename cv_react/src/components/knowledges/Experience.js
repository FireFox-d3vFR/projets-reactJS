import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expériences</h3>
            <div className="exp-1">
                <h4>Développeur Web - Orange (Alternance)</h4>
                <h5>2023 - 2024</h5>
                <p><strong>Développement web : </strong>Maîtrise des langages de programmation web tels que HTML, CSS, JavaScript.</p>
                <p><strong>Intégration de services web : </strong>Intégration de services web tiers à travers des API pour enrichir les fonctionnalités des applications.</p>
            </div>
            <div className="exp-2">
                <h4>Employé Polyvalent - McDonnald's</h4>
                <h5>2022 - Présent</h5>
                <p><strong>Service client : </strong>Fourni un excellent service client en assurant un accueil amical et en répondant aux besoins des clients de manière rapide et efficace.</p>
                <p><strong>Travail en équipe : </strong>Collaboré avec une équipe dynamique pour maintenir la propreté et l'efficacité des opérations du restaurant.</p>
            </div>
        </div>
    );
};

export default Experience;