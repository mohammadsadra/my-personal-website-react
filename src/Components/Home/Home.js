import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home d-flex flex-column justify-content-center align-items-center text-center p-1">
            <h1 className="fade-in">I'm MohammadSadra Haeri</h1>
            <img className="profile-image-animation scale-in-center rounded-5 mt-2 mb-2 object-fit-cover" src="https://imohammadsadra.ir/img/about-me.jpeg" alt="MohammadSadra Haeri" />
            <p className="fade-in">I'm a Front-End Developer @MCI</p>
            <p className="fade-in">Computer Engineering @IUST</p>
            <div className="skills-container">
                <div className="skill">
                    <label htmlFor="web-design">Web Design</label>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: '70%' }}></div>
                    </div>
                    <span className="progress-text">70%</span>
                </div>

                <div className="skill">
                    <label htmlFor="python">Python</label>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: '80%' }}></div>
                    </div>
                    <span className="progress-text">80%</span>
                </div>

                <div className="skill">
                    <label htmlFor="python">Angular</label>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: '90%' }}></div>
                    </div>
                    <span className="progress-text">90%</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
