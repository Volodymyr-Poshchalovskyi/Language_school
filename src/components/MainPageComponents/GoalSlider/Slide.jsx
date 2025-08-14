// src/components/GoalSliderComponents/Slide.jsx
import React from 'react';

const Slide = ({ slide, colors }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-1/2 p-3">
      <div
        className={`bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col border-t-4 ${colors.border}`}
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colors.bg} ${colors.text}`}
        >
          {slide.icon}
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-4 flex-grow">
          {slide.title}
        </h3>
        <ul className="space-y-3 text-gray-600">
          {slide.points.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className={`mr-3 mt-1 ${colors.text}`}>
                &#10003;
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide;
