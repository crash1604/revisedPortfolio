import React, { useState } from "react";
import InfoCard from "./InfoCards";

const navigation = [
    { index:1,
      name: 'Spotify Backend', 
      href: '#', 
      description :"SpotifyLookalike, a small music streaming app's backend built with Django and Django Rest Framework. This project aims to provide basic functionalities similar to Spotify, including managing albums, artists, user authentication, music tracks, and playlists.", 
      techStack: ['Python' ,'Django','Django Rest Framework'], 
      githubLink:'https://github.com/crash1604/Spotifylookalike', 
      demoLink:'lol', 
      media:[
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/SpotifyLookAlike/Screenshot%202024-04-20%20at%2012.22.09%20AM.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/SpotifyLookAlike/Screenshot%202024-04-20%20at%2012.23.01%20AM.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/SpotifyLookAlike/Screenshot%202024-04-20%20at%2012.24.50%20AM.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/SpotifyLookAlike/Screenshot%202024-04-20%20at%2012.26.01%20AM.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/SpotifyLookAlike/Screenshot%202024-04-20%20at%2012.26.38%20AM.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/SpotifyLookAlike/Screenshot%202024-04-20%20at%2012.26.49%20AM.png?raw=true'
      ] },
    { index:2, 
      name: 'IBM Capstone', 
      href: '#', 
      description :"Car Dealership Review Platform project represents the culmination of my journey through the IBM Full Stack Cloud Developer Professional Certificate on Coursera. Within this project, you'll find a cloud-hosted web application built using Django and deployed on the IBM Cloud.", 
      techStack: ['Python' ,'Node','Django', 'React','IBM Cloudant', 'IBM watson', 'NoSQL', 'REST Framework', 'HTML', 'CSS', 'JavaScript'], 
      githubLink:'https://github.com/crash1604/agfzb-CloudAppDevelopment_Capstone', 
      demoLink:'lol', 
      media:[
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/IBMCapstone/dealership_details.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/IBMCapstone/dealership_review_submission.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/IBMCapstone/dealerships.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/IBMCapstone/dealerships_filter.png?raw=true'
      ] },
    { 
      index:3, 
      name: 'Currency Exchange Tracker', 
      href: 'https://currency-chanakya.netlify.app/', 
      description :"This Dashboard application utilizes the Frankfurter API to retrieve historical currency exchange rate data for up to 2 years for CAD, USD, EUR, and reverse rates. This data is rendered in both a chart using Chart.js and a table using ag-Grid with features such as filtering, and the ability to persist filter settings with localstorage.", 
      techStack: ['Python', 'Django', 'Django Rest Framework', 'React' ,'JavaScript','HTML','CSS', 'Frankfurter API','ChartJs', 'AG grid'], 
      githubLink:'https://github.com/crash1604/Henon', 
      demoLink:'https://currency-chanakya.netlify.app/', 
      media:[
        'https://github.com/crash1604/Henon/blob/main/media/SS1.png?raw=true',
        'https://github.com/crash1604/Henon/blob/main/media/SS2.png?raw=true',
        'https://github.com/crash1604/Henon/blob/main/media/SS3.png?raw=true',
      ]  }, 
    { index:4, 
      name: 'Portfolio', 
      href: '#', 
      description :"My most Recent addition created with JavaScript, React, and Tailwind CSS to demonstrate front end development capabilities in the realm of software development", 
      techStack: ['React', 'Tailwind CSS', 'JavaScript','HTML'], 
      githubLink:'https://github.com/crash1604/revisedPortfolio', 
      demoLink:'lol', 
      media:[
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/portfolio/home.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/portfolio/prof.png?raw=true',
        'https://github.com/crash1604/MediaFilesPortfolio/blob/main/portfolio/contact.png?raw=true'
      ]  },
      { index:5, 
        name: 'TweetMe', 
        href: '#', 
        description :"Developed and optimized a full-stack application mirroring X-like (Former Twitter)    functionality, integrating React for the frontend and Django Rest Framework for the    backend, with comprehensive CRUD features and rigorous testing to ensure    seamless user experience and robust performance.", 
        techStack: ['Python', 'Django', 'Django Rest Framework', 'React' ,'JavaScript','HTML','CSS'], 
        githubLink:'https://github.com/crash1604/TweetMe', 
        demoLink:'lol', 
        media:[
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ]  },
  ]

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(navigation[0]);
  
    function handleNavigationClick(item) {
      // Update the current page state with the clicked item's data
      setCurrentPage({ ...item, current: true }); // We spread the item to maintain other properties
    }
  
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
  
    return (
      <div id="Projects">
        <div className="mx-auto max-w-7xl px-6 sm:mt-4 lg:px-8 xl:mt-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <div className="mt-8">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigationClick(item);
                      }}
                      className={classNames(
                        item.name === currentPage.name ? 'bg-indigo-900 text-white' : 'text-gray-700 hover:bg-indigo-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.name === currentPage.name ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* InfoCard component to render the current page's content */}
            <InfoCard state={currentPage}/>
          </div>
        </div>
      </div>
    );
  }
  