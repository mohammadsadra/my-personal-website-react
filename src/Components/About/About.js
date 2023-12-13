import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="profile-circle">
                <img src="https://imohammadsadra.ir/img/home-bg.jpg" alt="MohammadSadra Haeri" />
            </div>
            <h1 className="fade-in">MohammadSadra Haeri</h1>
            <p className="fade-in">I'm a web developer at idea varzan system and study at AmirKabir university</p>
            <p className="fade-in">In love with soccer, tennis, FIFA(video game) and discovering new programming languages and unknown technologies</p>
            <div className="about-details">
                <div className="detail-item fade-in">
                    <i className="icon">&#60;/&#62;</i>
                    <p>Web & Mobile Developer</p>
                    <p>Angular - Flutter</p>
                </div>
                <div className="detail-item fade-in">
                    <i className="icon">&#x1f4bb;</i>
                    <p>Academic Degree</p>
                    <p>Python: Quera</p>
                    <p>Angular: TopLearn</p>
                </div>
            </div>
            <a href="https://imohammadsadra.ir/assets/M.Sadra%20Haeri%20-%20CV.pdf" download className="fade-in cv-button">
                Get My CV
            </a>
        </div>
    );
};

export default About;
