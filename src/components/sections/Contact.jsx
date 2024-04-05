import React, { useState } from 'react';

// Mock data for projects
const projectDetails = {
  'Spotify Backend': {
    description: 'Description for Spotify Backend',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/your-username/spotify-backend',
    demoUrl: 'https://demo.spotify-backend.com',
    imageUrl: 'path/to/spotify-image.jpg'
  },
  // Add more projects here
};

const Contact = () => {
  const [activeProject, setActiveProject] = useState(projectDetails['Spotify Backend']);

  const handleTabClick = (projectName) => {
    setActiveProject(projectDetails[projectName]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        {Object.keys(projectDetails).map((projectName) => (
          <button
            key={projectName}
            className={`mr-4 py-2 ${activeProject === projectDetails[projectName] ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => handleTabClick(projectName)}
          >
            {projectName}
          </button>
        ))}
      </div>

      {/* Project Details */}
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Description and Tech Stack */}
        <div className="w-full md:w-2/3 md:pr-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p>{activeProject.description}</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Tech Stack</h3>
          <ul>
            {activeProject.techStack.map((stack, index) => (
              <li key={index}>{stack}</li>
            ))}
          </ul>
        </div>

        {/* GitHub and Demo Links */}
        <div className="w-full md:w-1/3 mb-4">
          <h3 className="text-lg font-semibold mb-2">GitHub and Demo</h3>
          <a href={activeProject.githubUrl} className="text-blue-500 hover:underline mr-2">GitHub</a>
          <a href={activeProject.demoUrl} className="text-blue-500 hover:underline">Demo</a>
        </div>

        {/* Media */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-2">Media</h3>
          <img className="w-full sm:w-1/2 md:w-1/4" src={activeProject.imageUrl} alt="Project Media" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
