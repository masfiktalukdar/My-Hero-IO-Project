import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { toast, Toaster } from 'react-hot-toast';

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch('/AppData.json')
      .then(res => res.json())
      .then(data => {
        const singleApp = data.find(item => item.id === parseInt(id));
        setApp(singleApp);

        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        if (installedApps.some(a => a.id === singleApp.id)) {
          setInstalled(true);
        }
      });
  }, [id]);

  if (!app) return <p className="text-center mt-10 font-bold">Loading...</p>;

  const chartData = app.ratings.map(r => ({
    name: r.name,
    count: r.count
  }));

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    if (!installedApps.some(a => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      toast.success(`${app.title} installed!`);
      setInstalled(true);
    }
  };

  return (
    <div className="p-5 min-h-screen flex flex-col gap-10 bg-gray-50">
      <Toaster />

      {/* Top section - Image and details side by side */}
      <div className="flex flex-col md:flex-row gap-10 bg-white shadow-lg rounded-lg p-6">
        {/* Left side image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-64 h-64 object-contain mx-auto md:mx-0"
        />

        {/* Right side details */}
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-600">{app.companyName}</p>

          {/* Additional app info from JSON */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2 text-gray-700">
            <p><strong>Size:</strong> {app.size} MB</p>
            <p><strong>Reviews:</strong> {app.reviews.toLocaleString()}</p>
            <p><strong>Downloads:</strong> {(app.downloads / 1000000).toFixed(1)}M+</p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <p className="text-green-500 font-bold flex items-center">
              ⭐ {app.ratingAvg} / 5
            </p>
            <button
              className={`px-4 py-2 rounded-md text-white font-semibold transition duration-200 ${
                installed ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
              }`}
              onClick={handleInstall}
              disabled={installed}
            >
              {installed ? 'Installed' : 'Install'}
            </button>
          </div>
        </div>
      </div>

      {/* Rating chart full width */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <h2 className="text-lg font-semibold mb-3 text-center">Ratings Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 10, right: 40, left: 50, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#34d399" barSize={20} radius={[5, 5, 5, 5]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description under the chart */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
