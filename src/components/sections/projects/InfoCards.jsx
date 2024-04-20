import Carousel from './ImageCarousel';
import React from 'react';

const InfoCard = ({ state }) => {
    const media = state.media
  return (
    <div className="bg-indigo-200 rounded-lg overflow-hidden shadow-lg p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="col-span-1">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
      <p className="text-gray-600">{state.description}</p>
    </div>

    <div className="col-span-1 flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">GitHub and Demo</h2>
      <div className="flex items-center space-x-4">
        <a href={state.githubLink} className="text-indigo-900 hover:underline">GitHub</a>
        <a href={state.demoLink} className="text-indigo-900 hover:underline">Demo</a>
      </div>
    </div>

    <div className="col-span-2 md:col-span-1 flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tech Stack</h2>
      <p className="text-gray-600">
        {state.techStack.map((item, index) => (
          <span key={index} className="inline-flex items-center rounded-md bg-purple-50 mx-1 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
            {item}
          </span>
        ))}
      </p>
    </div>
    
    <div className="col-span-2 md:col-span-1 flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Media</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="container mx-auto mt-8">
          <Carousel images={media} />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default InfoCard;
