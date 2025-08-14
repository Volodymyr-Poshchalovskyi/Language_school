//* A presentation component that displays a single slide within the GoalSlider.
//* Its content and styling are entirely driven by props.


// ! The component expects 'slide' and 'colors' objects as props to render dynamically.
const Slide = ({ slide, colors }) => {
  return (
    // * Main container with responsive width and padding.
    <div className="flex-shrink-0 w-full md:w-1/2 p-3">
      <div
        className={`bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col border-t-4 ${colors.border}`}
      >
        {/* * The icon container with dynamic background and text colors. */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colors.bg} ${colors.text}`}
        >
          {slide.icon}
        </div>
        {/* * The slide title, which uses `flex-grow` to take up available space. */}
        <h3 className="font-bold text-xl text-gray-900 mb-4 flex-grow">
          {slide.title}
        </h3>
        {/* * A list of points, dynamically rendered from the `slide` prop. */}
        <ul className="space-y-3 text-gray-600">
          {slide.points.map((point, i) => (
            <li key={i} className="flex items-start">
              {/* ? Checkmark icon with dynamic color. */}
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
