import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts & Sports</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-file-code'></i>
                    <span>Programmation</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-paint-brush'></i>
                    <span>Dessins</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-music'></i>
                    <span>Musiques</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-bicycle'></i>
                    <span>VTT <em>(Loisir)</em></span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-heartbeat'></i>
                    <span>Tir à l'Arc <em>(En club)</em></span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;