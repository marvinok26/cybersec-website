import React from "react";
import HeroSlider from "./HeroSlider";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import ServicesCard from "./ServicesCard";
import PartnerCarousel from "./PartnerCarousel";



export default function Page() {
  return (
    <>


      <HeroSlider />

      <WhoWeAre />

      <div className="bg-with-F5F5F5-color">
        <WhyChooseUs />
        {/* Partner Carousel */}
      <PartnerCarousel className=" w-full"/>
      </div>

      <ServicesCard />

      

    </>
  )
}
