const Slide = ({ slide, colors }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-1/2 p-3">
      <div
        className={`bg-[#FFFFFF] dark:bg-gray-800 rounded-2xl shadow-lg p-6 
                    h-[23rem] sm:h-[23rem] md:h-full flex flex-col 
                    border-t-4 ${colors.border} transition-colors duration-300`}
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colors.bg} ${colors.text}`}
        >
          {slide.icon}
        </div>
        
        <h3 className="font-bold text-xl text-[#69140E] dark:text-[#FFFFFF] mb-4 flex-grow">
          {slide.title}
        </h3>
        
        <ul className="space-y-3">
          {slide.points.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className={`mr-3 mt-1 ${colors.text}`} aria-hidden>
                &#10003;
              </span>
              <span className="text-[#69140E]/80 dark:text-[#FFFFFF]/80">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide;
