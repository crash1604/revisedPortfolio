import React, { useState } from "react";
import InfoCard from "./InfoCards";

const navigation = [
    { index:1, name: 'Spotify Backend', href: '#', description :"desc 1", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:['https://via.placeholder.com/720','https://via.placeholder.com/720','https://via.placeholder.com/720','https://via.placeholder.com/720'] },
    { index:2, name: 'IBM Capstone', href: '#', description :"desc 2", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:['https://via.placeholder.com/720','https://via.placeholder.com/720','https://via.placeholder.com/720','https://via.placeholder.com/720'] },
    { index:3, name: 'TweetMe', href: '#', description :"desc 3", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:['https://via.placeholder.com/720','https://via.placeholder.com/720','https://via.placeholder.com/720','https://via.placeholder.com/720']  },
    { index:4, name: 'Portfolio', href: '#', description :"desc 4", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:['https://via.placeholder.com/720','https://via.placeholder.com/720','https://via.placeholder.com/720','https://via.placeholder.com/720']  },
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
      <>
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
      </>
    );
  }
  