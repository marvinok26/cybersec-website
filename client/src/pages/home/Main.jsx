import React from "react";
import HeroSlider from "./HeroSlider";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import ServicesCard from "./ServicesCard";

import './styles.scss'



export default function Page() {
  return (
    <>


      <HeroSlider />

      <WhoWeAre />

      <div className="bg-with-F5F5F5-color">
        <WhyChooseUs />
      </div>


      <ServicesCard />
    </>
  )
}
