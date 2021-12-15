import React from 'react';
import './App.css';
import { Adaptability } from './component/Adaptability';
import { Banner } from './component/Banner';
import { Carousel } from './component/Carousel';
import { Coments } from './component/Coments';
import { FooterDesk } from './component/FooterDesk';
import { MentalWellness } from './component/MentalWellness';
import { Navbar } from './component/Navbar';
import { Nutrition } from './component/Nutrition';
import { OurPillars } from './component/OurPillars';
import { SportsAccessories } from './component/SportsAccessories';
import { VarietySports } from './component/VarietySports';



function App() {
  return (
    <div className="App">
    <Navbar />
    <Banner />
    <OurPillars />
    <Adaptability />
    <VarietySports />
    <Nutrition />
    <MentalWellness />
    <SportsAccessories />
    <Coments />
    <Carousel />
    <FooterDesk />
    </div>
  );
}

export default App;
