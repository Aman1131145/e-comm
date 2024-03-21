import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Body from "../../components/body/Body";

function Home() {
    return <div className="Home">
        <Navbar />
        <Body/>
    </div>;
}

export default Home;
