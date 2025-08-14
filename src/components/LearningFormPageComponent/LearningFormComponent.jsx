//* A highly reusable component that renders a stylized content page based on an external data object.
//* This component is primarily responsible for the presentational layer.

import { Link } from 'react-router-dom';

// ! The component accepts a 'data' prop to dynamically populate its content.
function LearningFormPage({ data }) {
  return (
    // * Main container with dynamic background color from the 'data' prop.
    <div className={`${data.bgColor} py-16 md:py-24 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        {/* ? The 'avoid-emoji' class is used to prevent the EmojiFall animation from overlapping this section. */}
        <div className="avoid-emoji text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {data.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            {data.subtitle}
          </p>
        </div>

        {/* * Main content card with dynamic sections. */}
        <div className="avoid-emoji bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {data.whatIsItTitle}
            </h2>
            {/* ! Renders HTML from a string. Used here for rich text, but requires careful sanitization. */}
            <p
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.whatIsItText }}
            />
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {data.forWhomTitle}
            </h2>
            {/* * Maps over an array to render a list of items. */}
            <ul className="space-y-3 text-lg text-gray-700">
              {data.forWhomList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className={`${data.forWhomCheckmarkColor} mr-3 mt-1`}>
                    &#10003;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ключові переваги
            </h2>
            {/* * Maps over an array of advantages to render dynamic grid items. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.advantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`${advantage.bgColor} p-6 rounded-lg`}
                >
                  <h3
                    className={`font-bold text-xl ${advantage.titleColor} mb-2`}
                  >
                    {advantage.title}
                  </h3>
                  <p className={advantage.descriptionColor}>
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* * Call-to-action button that uses the 'Link' component for client-side routing. */}
        <div className="avoid-emoji mt-12 text-center">
          <Link
            to={data.buttonLink}
            className={`inline-block ${data.buttonColor} text-white font-bold py-3 px-8 rounded-lg text-lg ${data.buttonHoverColor} transition-transform transform hover:scale-105`}
          >
            {data.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LearningFormPage;
