import React, { useEffect, useState } from "react";

const RotatingSlider = ({ images }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate the rotation angle for each image
  const quantity = images.length;
  const angle = 360 / quantity;

  // Rotate the slider and pause at each image
  useEffect(() => {
    let interval;

    const rotateAndPause = () => {
      // Rotate to the next image
      setRotationAngle((prevAngle) => (prevAngle + angle) % 360);

      // Pause for 1 second
      setIsPaused(false);
      setTimeout(() => {
        setIsPaused(false);
      }, 1000); // Pause duration
    };

    if (!isPaused) {
      interval = setInterval(rotateAndPause, 2000); // Time between rotations
    }

    return () => clearInterval(interval);
  }, [isPaused, angle]);

  return (
    <div className="flex justify-center relative w-full h-screen border-4">
      {/* Slider Container */}
      <div
        className="absolute top-1/4 left-1/2 w-48 h-64 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(-16deg) rotateY(${rotationAngle}deg)`,
          transition: isPaused ? "none" : "transform 1s ease-in-out", // Smooth transition
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 rounded-lg overflow-hidden shadow-lg"
            style={{
              transform: `rotateY(${
                index * angle
              }deg) translateZ(300px)`, // Adjust translateZ for depth
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingSlider;