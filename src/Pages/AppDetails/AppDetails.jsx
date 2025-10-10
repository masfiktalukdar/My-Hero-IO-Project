import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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

        // Check if app is already installed in localStorage
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        if(installedApps.some(a => a.id === singleApp.id)){
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
    if(!installedApps.some(a => a.id === app.id)){
      installedApps.push(app);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      toast.success(`${app.title} installed!`);
      setInstalled(true);
    }
  }

  return (
    <div className="p-5 min-h-screen flex flex-col md:flex-row gap-10">
      <Toaster />
      {/* Left side image */}
      <img src={app.image} alt={app.title} className="w-64 h-64 object-contain" />

      {/* Right side details */}
      <div className='flex-1 flex flex-col gap-5'>
        <div>
          <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
          <p className="text-gray-600 mb-2">{app.companyName}</p>

          {/* Buttons */}
          <div className='flex gap-4 mb-4'>
            <button className='btn'>
              <p className='text-sm p-2 text-green-500 font-bold flex'>{app.ratingAvg}M</p>
            </button>
            <button className='btn'>
              <p className='text-sm p-2 text-orange-500 font-bold'>⭐{app.id}</p>
            </button>
            <button
              className={`btn ml-4 ${installed ? 'btn-success' : 'btn-primary'}`}
              onClick={handleInstall}
              disabled={installed}
            >
              {installed ? 'Installed' : 'Install'}
            </button>
          </div>
        </div>

        {/* Rating Chart */}
        <div className='bg-white shadow-md rounded-lg p-4'>
          <h2 className='text-lg font-semibold mb-2'>Ratings Chart</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* App Description */}
        <div className='mt-4 bg-white shadow-md rounded-lg p-4'>
          <h2 className='text-lg font-semibold mb-2'>Description</h2>
          <p className='text-gray-700'>{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
