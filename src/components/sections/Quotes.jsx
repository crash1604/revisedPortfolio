import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [currentDate, setCurrentDate] = useState('');
  const quotes = [
    "The best way to predict the future is to invent it. — Alan Kay",
    "Any sufficiently advanced technology is indistinguishable from magic. — Arthur C. Clarke",
    "Real artists ship. — Steve Jobs",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "It's not a bug – it's an undocumented feature. — Anonymous",
    "Innovation distinguishes between a leader and a follower. — Steve Jobs",
    "Simplicity is the soul of efficiency. — Austin Freeman"
  ];
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(today.toLocaleDateString('en-US', options));
    // Select a random quote
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="container flex mx-auto my-4 bg-white rounded-lg shadow">
      <img
        className="w-16 h-16 rounded-full m-4"
        src="https://media.licdn.com/dms/image/D5603AQHjXiYZZo-T7A/profile-displayphoto-shrink_800_800/0/1704395543457?e=2147483647&v=beta&t=Gij4bqoenq9DikAnSIDH2ZcVuiaegxnoqQUDUUerR6Q"
        alt="Profile"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="mb-2">
          <div className="text-xl font-bold text-black">Chanakya Sharma</div>
          <p className="text-sm text-gray-600">@chanakya &middot; {currentDate}</p>
        </div>
        <div className="mb-2 text-gray-900">{quote}</div>
        <div className="flex mt-4">
           <div className="actions flex justify-between">
      <div className="mx-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
        </svg>
        <span>20</span>
      </div>
      <div className="mx-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        <span>17</span>
      </div>
      <div className="mx-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        <span>215</span>
      </div>
      <div>
        <img src="https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/share_rgaloj.svg" alt="" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/thirus/image/upload/v1632940964/logos/stats_jt2vsb.svg" alt="" />
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;	