import React from "react";
import InfoCard from "./InfoCards";

const navigation = [
    { name: 'Spotify Backend', href: '#', current: true, description :"desc 1", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:'links' },
    { name: 'IBM Capstone', href: '#', current: false, description :"desc 1", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:'links' },
    { name: 'TweetMe', href: '#', current: false, description :"desc 1", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:'links'  },
    { name: 'Portfolio', href: '#', current: false, description :"desc 1", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:'links'  },
  ]

let current={
    name: 'Spotify Backend', 
    href: '#', current: true, 
    description :"desc 1", 
    techStack: ['list' ,'of','stacks'], 
    githubLink:'github.io', 
    demoLink:'lol', 
    media:['https://via.placeholder.com/720',"https://via.placeholder.com/300", "https://via.placeholder.com/300" ]
}

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Projects() {
    return <>
        <div className="mx-auto max-w-7xl px-6 sm:mt-4 lg:px-8 xl:mt-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
            <div className="mt-8">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <InfoCard state={current}/>
                </div>
            </div>
        </div>
    </>
}