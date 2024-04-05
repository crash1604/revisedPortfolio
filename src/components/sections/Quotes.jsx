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
        src="https://pbs.twimg.com/profile_images/1329475394714537986/MXGt0d_h_x96.jpg"
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
      <div>
        <img src="https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/reply_ts2dvv.svg" alt="" />
        <span>20</span>
      </div>
      <div>
        <img src="https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/retweet_wkdf6j.svg" alt="" />
        <span>17</span>
      </div>
      <div>
        <img src="https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/like_zmb4tf.svg" alt="" />
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