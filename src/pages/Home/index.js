import React from 'react';
import './styles.css';

import imgs from '../../assets/vinicius-cardoso.jpg'

export default function Home() {
    return (
        <div className="home-container">
            <header>
            <div class="links">
                            <a href="/">About me</a>
                            <a href="projects.html">Projects</a>
            </div>
            </header>

                    <div id="wrapper">
                            <h1>Vinicius Cardoso</h1>
                            <div className="img">
                                <img src={imgs} alt="vinicius cardoso imagem" />
                            </div>
                            <h2>Software Engineer</h2>
                            <p>Full-Stack programmer with focus in Web Development and Data Science</p>
                    </div>
                        <div id="links-footer" class="links">
                            <a href="https://github.com/Cerebrovinny/" target="_blank">Github</a>
                            <a href="https://www.linkedin.com/in/vinicius-cardoso96/" target="_blank">Linkedin</a>
                        </div>
        </div>
    )
}