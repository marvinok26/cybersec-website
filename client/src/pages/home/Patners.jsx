// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import './main-styles.css'

// import partner1 from './images/partner/partner-1.png';
// import partnerHover1 from './images/partner/partner-hover-1.png';
// import partner2 from './images/partner/partner-2.png';
// import partnerHover2 from './images/partner/partner-hover-2.png';
// import partner3 from './images/partner/partner-3.png';
// import partnerHover3 from './images/partner/partner-hover-3.png';
// import partner4 from './images/partner/partner-4.png';
// import partnerHover4 from './images/partner/partner-hover-4.png';
// import partner5 from './images/partner/partner-5.png';
// import partnerHover5 from './images/partner/partner-hover-5.png';
// import partner6 from './images/partner/partner-6.png';
// import partnerHover6 from './images/partner/partner-hover-6.png';

// const Partners = () => {
//   return (
//     <div className="partner-area pt-24 pb-24">
//       <div className="container mx-auto">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           autoplay={{
//             delay: 6000,
//             disableOnInteraction: true,
//           }}
//           breakpoints={{
//             0: {
//               slidesPerView: 2,
//             },
//             576: {
//               slidesPerView: 3,
//             },
//             768: {
//               slidesPerView: 4,
//             },
//             1024: {
//               slidesPerView: 6,
//             },
//           }}
//           modules={[Autoplay]}
//           className="partner-slides"
//         >
//           {[
//             { img: partner1, hoverImg: partnerHover1 },
//             { img: partner2, hoverImg: partnerHover2 },
//             { img: partner3, hoverImg: partnerHover3 },
//             { img: partner4, hoverImg: partnerHover4 },
//             { img: partner5, hoverImg: partnerHover5 },
//             { img: partner6, hoverImg: partnerHover6 },
//           ].map((partner, index) => (
//             <SwiperSlide key={index}>
//               <div className="partner-card text-center">
//                 <a href="#" target="_blank" rel="noreferrer">
//                   <img src={partner.img} alt="partner" className="transition-opacity duration-300 mx-auto" />
//                   <img src={partner.hoverImg} alt="partner" className="absolute top-0 left-0 right-0 mx-auto opacity-0 transition-opacity duration-300" />
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Partners;
