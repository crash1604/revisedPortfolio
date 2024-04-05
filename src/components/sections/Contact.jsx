import React, { useState } from 'react';

// Mock data for the projects
const projectsData = {
  All: [
    { id: 1, title: 'Project 1', description: 'Description of Project 1', imageUrl: 'path/to/image1.jpg' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', imageUrl: 'path/to/image2.jpg' },
    // Add more projects here
  ],
  Youtube: [
    { id: 3, title: 'Youtube Project 1', description: 'Description of Youtube Project 1', imageUrl: 'path/to/image3.jpg' },
    // Add Youtube-specific projects here
  ],
  Vimeo: [
    // Add Vimeo-specific projects here
  ],
  Soundcloud: [
    // Add Soundcloud-specific projects here
  ],
  Popup: [
    // Add Popup-specific projects here
  ],
  Detail: [
    // Add Detail-specific projects here
  ],
};

const Contact = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [projects, setProjects] = useState(projectsData[activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setProjects(projectsData[tabName]);
  };

  return (
    <div className="container mx-auto">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(projectsData).map((tabName) => (
          <button
            key={tabName}
            className={`px-4 py-2 text-sm font-semibold rounded-md ${activeTab === tabName ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Contact;