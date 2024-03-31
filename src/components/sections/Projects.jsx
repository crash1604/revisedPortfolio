import React from "react";

const navigation = [
    { name: 'Spotify Backend', href: '#', current: true, description :"desc 1", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:'links' },
    { name: 'IBM Capstone', href: '#', current: false, description :"desc 1", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:'links' },
    { name: 'TweetMe', href: '#', current: false, description :"desc 1", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:'links'  },
    { name: 'Portfolio', href: '#', current: false, description :"desc 1", techStack: ['list' ,'of','stacks'], githubLink:'github.io', demoLink:'lol', media:'links'  },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Projects() {
    return <>
        <div className="mx-auto max-w-7xl px-6 sm:mt-4 lg:px-8 xl:mt-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
            <div className="">
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
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-600">description</p>
        </div>
        <div className="col-span-3 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tech Stack</h2>
          <p className="text-gray-600">techStack</p>
        </div>
        <div className="col-span-3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">GitHub and Demo</h2>
          <div className="flex items-center space-x-4">
            <a href="" className="text-blue-500 hover:underline">GitHub</a>
            <a href="" className="text-blue-500 hover:underline">Demo</a>
          </div>
        </div>
        <div className="col-span-3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Media</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* {media.map((item, index) => (
              <img key={index} src={item} alt={`Media ${index + 1}`} className="w-full h-auto rounded-lg" />
            ))} */}
            <img key="1" src="https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg" alt='test' className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
        </div>
    </>
}