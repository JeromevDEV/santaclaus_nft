import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Faq } from "./components/faq";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Rarity } from "./components/rarity";
import { Chart } from "./components/chart";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Faq data={landingPageData.Faq} />
      <Features data={landingPageData.Features} />
      <Chart/>
      <Gallery data={landingPageData.Gallery}/>
      <Rarity data={landingPageData.Rarity}/>
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default App;
