import React, { useRef } from 'react';
import ConcentricCircles from './concentricCircleAnimation/ConcentricCircles';



const Contact = () => {


  return (
    <div id="Contact" className="container mx-auto p-4">
      <a href="#Contact"><h2 className="text-3xl font-bold text-gray-900 sm:text-4xl my-4 sm:my-4 xl:my-1">Contact Me</h2></a>
      
      {/* Position the animation and icons container below the h2 */}
      <div className="relative mt-8 sm:mt-12 xl:mt-20">
        {/* ConcentricCircles background */}
        <div className="relative z-0 bg-top items-center justify-center">
        <ConcentricCircles  />
        </div>

        <div className="absolute inset-0 bg-opacity-75 flex items-center justify-evenly bg-indigo-200 rounded-lg overflow-hidden shadow-lg p-6 mt-4 sm:mt-4 xl:mt-1 z-4">
          
          <a href="https://www.linkedin.com/in/chanakyadeveloper/" className="text-black hover:text-blue-700 bg-opacity-100" >
                 <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" className="w-16 h-16 md:w-48 md:h-48" fill="currentColor">
                 <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
                 </svg>
                </a>
                <a href="mailto:chanakyadevpro@gmail.com" className="text-black hover:text-red-700 bg-opacity-100">
                 <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" className="w-16 h-16 md:w-48 md:h-48" fill="currentColor">
                     <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path>
                 </svg>
             </a>
             <a href="https://www.github.com/crash1604" className="text-black hover:text-green-500 bg-opacity-100">
                 <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" className="w-16 h-16 md:w-48 md:h-48" fill="currentColor">
                 <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
                 </svg>
                 </a>
        </div>
      </div>
    </div>

    
    //   <div className="flex justify-between border-b mt-4 mx-4 px-4 max-w-screen-lg">
    //     <div className="flex items-center justify-evenly bg-indigo-200 rounded-lg overflow-hidden shadow-lg p-6">
    //         <div>
    //             <a href="https://www.linkedin.com/in/chanakyadeveloper/" className="text-black hover:text-blue-700" >
    //             <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" className="w-16 h-16 md:w-48 md:h-48" fill="currentColor">
    //             <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
    //             </svg>
    //             </a>
    //         </div>
    //         <div>
    //         <a href="mailto:chanakyadevpro@gmail.com" className="text-black hover:text-red-700">
    //             <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" className="w-16 h-16 md:w-48 md:h-48" fill="currentColor">
    //                 <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path>
    //             </svg>
    //         </a>
    //         </div>

    //         <br/>
    //         <div>
    //             <a href="https://www.github.com/crash1604" className="text-black hover:text-green-500">
    //             <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" className="w-16 h-16 md:w-48 md:h-48" fill="currentColor">
    //             <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
    //             </svg>
    //             </a>
    //         </div>
    //     </div>
    //     <div className="flex-grow overflow-hidden">
    //         <ConcentricCircles/>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;
