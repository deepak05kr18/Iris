import React from "react";
import HeroBanner from "./hero/hero.js";
import Main from "./Main/main.js";
import Card from "./Card/card.js";
import AI from "./innovations/innovation.js";
import Tech from "./Tech/tech.js";
import Why from "./Why_us/why.js"
import Images from "./Gallery/gallery.js";
import Clients from "./Clients/clients.js";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Main />
            <Card />
            <AI />
            <Tech />
            <Why />
            <Clients />
            <Images />
            

            
        </div>
    );
};

export default Home;