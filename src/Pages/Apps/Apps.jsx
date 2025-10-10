
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/App-Error.png';

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/AppData.json')
      .then(res => res.json())
      .then(data => setApps(data));
  }, []);

  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="flex flex-col justify-center items-center m-2">
        <h1 className="font-bold text-3xl">Our All Applications</h1>
        <p className="text-[10px] text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-gray-800 mb-3 sm:mb-0">
          All Apps ({filteredApps.length})
        </h1>

        <input
          type="text"
          placeholder="🔍 Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredApps.length === 0 ? (
          <p className="text-center col-span-full text-red-500 font-bold text-3xl flex flex-col justify-center items-center m-5">
            <img className="w-70" src={error} alt="" />
            Oops! App not found.
          </p>
        ) : (
          filteredApps.map(app => (
            <Link to={`/apps/${app.id}`} key={app.id}>
              <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image full cover */}
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-48 object-cover rounded-t-2xl p-1"
                />

                {/* Text section */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-center text-gray-800">
                    {app.title}
                  </h2>
                  <div className="flex justify-between mt-3">
                    <p className="text-sm p-2 text-green-500 font-bold flex">
                      {app.ratingAvg}M
                    </p>
                    <p className="text-sm p-2 text-orange-500 font-bold">
                      ⭐{app.id}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Apps;
