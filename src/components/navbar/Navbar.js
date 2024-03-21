import React from "react";
import "./Navbar.scss";
import searchImage from "../../assets/searchImage.png";
import Section from "./section/Section";

function Navbar() {
    const sections = [
        "HOME",
        "ELECTRONICS",
        "BOOKS",
        "MUSIC",
        "CLOTHING",
        "GAMES",
        "FURNITURE",
        "TRAVEL",
        "BOTANICAL",
    ];
    return (
        <div className="Navbar">
            <div className="logo">
                <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdYofbBx8uk9mWWUC8og1sEm7LBzRgrRK0YScqKMXatJF6bjd7"
                    alt="logo image"
                />
                <p>E-COMM</p>
            </div>
            <div className="right-tab">
                <ul className="sections-list">
                    {sections.map((section) => {
                        return <Section text={section} />;
                    })}
                </ul>
                <div className="search">
                    <img src={searchImage} alt="search image" />
                    <input type="text" className="input-box"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
