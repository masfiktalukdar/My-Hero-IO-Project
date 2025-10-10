import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const filtered = installedApps.filter(app => app.id !== id);
    setInstalledApps(filtered);
    localStorage.setItem('installedApps', JSON.stringify(filtered));
    toast.success('App uninstalled!');
  }

  return (
    <> 
      <div className="p-5 min-h-screen flex flex-col gap-5">
        {/* Always visible header */}
        <h1 className="text-3xl font-bold text-center mb-5">Your Installed Apps</h1>
        <p className='text-[15px] text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>
        
        <Toaster />
        
        {installedApps.length === 0 && (
          <p className="text-center mt-10 font-bold">No installed apps</p>
        )}

        {installedApps.map(app => (
          <div key={app.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">{app.title}</h1>
              <p className="text-gray-600">{app.companyName}</p>
            </div>
            <button
              className="btn btn-error"
              onClick={() => handleUninstall(app.id)}
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Installation;
