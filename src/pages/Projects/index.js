import React from 'react';
import './styles.css';
import imgs from '../../assets/be-the-hero.jpg';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div class="projects-container">
        <header>
        <div class="links">
            <Link to="/">About Me</Link>
            <Link to="/projects">Projects</Link>
        </div>
    </header>

        <div id="wrapper">
            <h1>Projects</h1>
        </div>

    <div className="cards">
        <div className="card">
            <div className="card_image-container">
                <img src={imgs} alt="be the hero app cover" />
            </div>
        <div className="card_content">
            <p>Website Application Be The Hero to help ongs receive donations from Heros</p>
        </div>
        <div class="links">
            <a href="https://betheheroone.netlify.com/" alt="be-the-hero-website" target="_blank">Check Live Website</a>
        </div>
        </div>
    </div>
        </div>

    );
}