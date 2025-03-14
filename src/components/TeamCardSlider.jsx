// import React, { useState, useEffect } from 'react';

// const TeamCardSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(2); // Start from the middle TeamCardSlider

//   const TeamCardSlider = [
//     {
//       quote: "If I could give 11 stars, 12.",
//       author: "Anthe",
//       position: "CEO at COMPANY",
//       imgSrc: "/imgs/head-shots/1.jpg"
//     },
//     {
//       quote: "SO SO SO HAPPY WITH YOU GUYS!!!! I'd bet you saved me 100 hours",
//       author: "Jeremy",
//       position: "CEO at COMPANY",
//       imgSrc: "/imgs/head-shots/2.jpg"
//     },
//     {
//       quote: "Took some convincing, but now that we're on BOARD, we're never going back.",
//       author: "Pam",
//       position: "CEO at COMPANY",
//       imgSrc: "/imgs/head-shots/3.jpg"
//     },
//     {
//       quote: "It's just the best. Period.",
//       author: "Fernanda",
//       position: "CEO at COMPANY",
//       imgSrc: "/imgs/head-shots/4.jpg"
//     },
//     {
//       quote: "I switched 5 years ago and I've never looked back.",
//       author: "Andy",
//       position: "CEO at COMPANY",
//       imgSrc: "/imgs/head-shots/5.jpg"
//     }
//   ];

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % TeamCardSlider.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + TeamCardSlider.length) % TeamCardSlider.length);
//   };

//   useEffect(() => {
//     // Start from the middle TeamCardSlider
//     setActiveIndex(Math.floor(TeamCardSlider.length / 2));
//   }, []);

//   const getRandomRotation = () => {
//     const rotationValues = [5, -5, 10, -10, 15, -15]; // Random positive and negative rotation values
//     return rotationValues[Math.floor(Math.random() * rotationValues.length)];
//   };

//   return (
//     <div className="bg-gradient-to-b from-purple-50 to-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-purple-900 mb-16">
//           Stagger TeamCardSlider
//         </h2>
//         {/* Carousel Container */}
//         <div className="relative w-full overflow-hidden bg-neutral-200" style={{ height: '500px' }}>
//           {TeamCardSlider.map((TeamCardSlider, index) => {
//             const position = index - activeIndex;
//             const isActive = position === 0;

//             return (
//               <div
//                 key={index}
//                 className={`absolute left-1/2 transform transition-all duration-500 z-10 bg-white cursor-pointer p-8 text-black`}
//                 style={{
//                   width: '365px',
//                   height: '365px',
//                   borderWidth: '2px',
//                   clipPath: 'polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)',
//                   boxShadow: 'black 0px 0px 0px 0px',
//                   transform: `translateX(calc(-50% + ${position * 380}px)) translateY(calc(-50% + 10px)) rotate(${getRandomRotation()}deg)`,
//                   opacity: isActive ? 1 : 0.7,
//                   transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
//                 }}
//               >
//                 <span
//                   className="absolute block origin-top-right rotate-45 bg-black object-cover"
//                   style={{
//                     right: '-2px',
//                     top: '48px',
//                     width: '70.71px',
//                     height: '2px'
//                   }}
//                 ></span>
//                 <img
//                   src={TeamCardSlider.imgSrc}
//                   alt={`TeamCardSlider image for ${TeamCardSlider.author}`}
//                   className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
//                   style={{ boxShadow: '3px 3px 0px white' }}
//                 />
//                 <h3 className="text-base sm:text-xl text-black">
//                   "{TeamCardSlider.quote}"
//                 </h3>
//                 <p className="absolute bottom-8 left-8 right-8 mt-2 text-sm italic text-neutral-700">
//                   - {TeamCardSlider.author}, {TeamCardSlider.position}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Navigation Controls */}
//         <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
//           <button
//             onClick={handlePrev}
//             className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-purple-600 hover:text-white rounded-full"
//           >
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 24 24"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z"></path>
//             </svg>
//           </button>
//           <button
//             onClick={handleNext}
//             className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-purple-600 hover:text-white rounded-full"
//           >
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 24 24"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamCardSlider;


import React, { useState } from "react";
import TeamCard from "./TeamCard";

const TeamCardSlider = ({ teamMembers }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-12">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {teamMembers.map((member, index) => (
          <div key={index} className="min-w-full flex justify-center">
            <TeamCard {...member} delay={index * 0.1} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors"
      >
        &larr;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors"
      >
        &rarr;
      </button>
    </div>
  );
};

export default TeamCardSlider;