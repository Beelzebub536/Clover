import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TeamCard = ({ name, role, bio, imageUrl, email, linkedin, twitter }) => {
  const ref = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  // Motion values for X and Y rotations
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth animation
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  // CSS transform template for 3D rotation
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  // Handle mouse move for tilt effect
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    if (isClicked) return; // Disable tilt effect when card is clicked

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    setIsClicked(false);
    x.set(0);
    y.set(0);
  };

  // Handle card click
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const isClickedSpring = useSpring(isClicked ? 0.8 : 1, {
    stiffness: 150,
    damping: 20,
  });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transformStyle: "preserve-3d",
        transform: isClicked ? "none" : transform,
        opacity: isClickedSpring,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-teal-300 to-emerald-500 shadow-2xl shadow-gray-700 border-2 border-emerald-700 cursor-pointer"
    >
      {/* Background Image */}
      <div
        style={{
          transform: "translateZ(65px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${imageUrl})`,
        }}
        className="absolute inset-4 rounded-xl bg-cover bg-center shadow-lg border-2 border-emerald-700"
      >
        {/* Dark Overlay */}
        {isClicked && (
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" />
        )}

        {/* Name and Role (Visible when not clicked) */}
        {!isClicked && (
          <div
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              transform: "translateZ(40px)",
              textShadow: "2px 2px 2px black",
            }}
            className="absolute bottom-4 left-4"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-white">
              {role}
            </p>
            <p className="text-xl font-bold sm:text-2xl text-emerald-400">
              {name}
            </p>
          </div>
        )}

        {/* Bio and Icons (Visible when clicked) */}
        {isClicked && (
          <div
            className="absolute inset-0 p-2 flex flex-col justify-end 
          transform opacity-0 transition-all translate-y-0 hover:opacity-100 duration-500"
            style={{ overflowY: "auto", scrollbarWidth: "none" }}
          >
            {/* Bio */}
            <div className="text-white text-sm mb-4 transf">
              <p>{bio}</p>
            </div>

            {/* Icons */}
            <div className="flex space-x-4 justify-center">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:text-emerald-400 transition-colors hover:glow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 transition-colors hover:glow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 transition-colors hover:glow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;

<a href="#" className="group relative block bg-black">
  <div className="relative p-4 sm:p-6 lg:p-8">
    {/* 
      - A container for the text content.
      - "relative" ensures it remains above the background image.
      - "p-4 sm:p-6 lg:p-8" sets responsive padding (small on default, increasing on larger screens).
    */}
    <div className="mt-32 sm:mt-48 lg:mt-64">
      {/* 
        - Pushes the hidden content down initially.
        - "mt-32" sets top margin, increasing with screen size ("sm:mt-48", "lg:mt-64").
      */}

      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        {/*
          - Initially hidden text container.
          - "translate-y-8" moves it down by 8 units.
          - "opacity-0" makes it invisible initially.
          - "transform" ensures smooth transition effects.
          - "transition-all" applies smooth changes to all properties.
          - "group-hover:translate-y-0" moves the text up to its normal position when hovered.
          - "group-hover:opacity-100" makes it fully visible on hover.
        */}

        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
        {/*
          - Hidden text that appears on hover.
          - "text-sm" makes it small text.
          - "text-white" keeps it readable against the dark background.
        */}
      </div>
    </div>
  </div>
</a>;

// {/* Mouse pointer icon, lifted even higher in 3D space */}
// <FiMousePointer
//   style={{
//     transform: "translateZ(75px)",
//   }}
//   className="mx-auto text-4xl"
// />
// {/* Text content, slightly lower than the icon in 3D space */}
// <p
//   style={{
//     transform: "translateZ(50px)",
//   }}
//   className="text-center text-2xl font-bold"
// >
//   HOVER ME
// </p>
