const values = [
    {
      name: 'Creating Value for the World',
      description:
        'commitment to making a positive impact and contributing to the betterment of society and the world at large. The importance of generating value that goes beyond personal gain and benefits others.',
    },
    {
      name: 'Continuous Learning',
      description:
        'Importance of ongoing personal and professional development. A dedication to acquiring new knowledge, skills, and insights, and a willingness to adapt and grow in response to changing circumstances.',
    },
    {
        name: 'Commitment to Hard Work',
        description:
          'The importance of diligence, perseverance, and dedication in pursuing goals and achieving success. Hard work is essential for personal and professional fulfillment as it is a key driver of progress and accomplishment.',
      },

  ]

  

export default function About() {
    return (
        <div className="relative mt-52">
            <main className="isolate">
            {/* Hero section */}
            <div className="relative isolate -z-10">
              <svg
                className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
              </svg>
              <div
                className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                aria-hidden="true"
              >
                <div
                  className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                  style={{
                    clipPath:
                      'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                  }}
                />
              </div>
              <div className="overflow-hidden">
                <div className="mx-auto max-w-7xl pt-16 lg:px-8">
                    <div className="w-full lg:shrink-0">
                      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                      “Dwell on the beauty of life. Watch the stars, and see yourself running with them.”
                      </h1>
                      <p className="relative mt-6 text-lg text-right leading-6 text-gray-600 sm:max-w-md lg:max-w-none">
                      ― Marcus Aurelius, Meditations
                      </p>
                     </div>
                    </div>
                </div>
                </div>
    
            {/* Content section */}
            <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 xl:mt-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Objective</h2>
                    <div className="mt-6">
                        <p className="text-base leading-7 text-gray-600">
                            At the heart of everything I do lies a commitment to creating value for the world. I believe in hard work, continuous learning, and I strive to embody these values in both my personal and professional life. My mission is to leave a lasting impact on society for the betterment of mankind while unlocking the mysteries of the universe.
                        </p>
                    </div>
                </div>
            <div className="flex flex-col">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Values</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                       
                    </p>
            </div>
        </div>
            <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div className="flex flex-col" key={value.name}>
                                <dt className="font-semibold text-gray-900">{value.name}</dt>
                                <dd className="mt-1 text-gray-600">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
        </div>
          </main>
          </div>
    )
  }