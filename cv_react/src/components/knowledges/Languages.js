// RCC : Classe Component
import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    // State : c'est un endroit où on va stocker des choses
    state = {
        languages: [
            { id: 1, value: "JavaScript", xp: 1.8 },
            { id: 2, value: "CSS", xp: 2 },
            { id: 3, value: "Php", xp: 0.7 },
            { id: 4, value: "Python", xp: 0.4 }
        ],

        frameworks: [
            { id: 1, value: "Bootstrap", xp: 2 },
            { id: 2, value: "React", xp: 1.4 },
            { id: 3, value: "Sass", xp: 1.5 },
            { id: 4, value: "OpenStreetMap", xp: 0.5 } // Material UI : comme Bootstrap mais en mieux ?
        ]
    }
    render() {
        // Utiliser les données stockées dans "state"
        // this.state = équivalent de this.state.languages ou this.state.frameworks ou this.state.frameworks
        let { languages, frameworks } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;