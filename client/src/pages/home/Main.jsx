import React from "react";
import HeroSlider from "./HeroSlider";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import ServicesCard from "./ServicesCard";



export default function Page() {
  return (
    <>


      <HeroSlider />

      <WhoWeAre />

      <ServicesCard />

      <div className="bg-with-F5F5F5-color">
        <WhyChooseUs />
      </div>

    </>
  )
}
