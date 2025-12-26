import React, { useEffect, useState } from 'react';
import hero from '../../assets/hero.png';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { FaArrowDown, FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Banner = () => {
    const [appData, setAppData] = useState([]);

    useEffect(() => {
        // Fetch real data to ensure IDs match
        fetch('/AppData.json')
            .then(res => res.json())
            .then(data => {
                // Take top 8 apps for the hero section
                setAppData(data.slice(0, 8));
            });
    }, []);

    return (
        <div className='w-full bg-base-100'>
            <div className='flex flex-col justify-center items-center'>
                
                {/* Hero Section with Modern Gradient/Glass Effect */}
                <div className="hero min-h-[60vh] bg-gradient-to-br from-base-100 via-base-200 to-purple-50 relative overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                    <div className="hero-content text-center z-10">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-extrabold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                                We Build Productive Apps
                            </h1>
                            <p className="py-6 text-gray-600 text-lg leading-relaxed">
                                At <strong>HERO.IO</strong>, we craft innovative digital experiences designed to simplify your life. 
                                Our mission is to turn complex ideas into intuitive, powerful applications used by millions.
                            </p>
                            <div className="flex justify-center gap-4 mt-4">
                                <button className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all gap-3">
                                    <IoLogoGooglePlaystore className="text-xl" /> Google Play
                                </button>
                                <button className="btn btn-outline btn-lg shadow-sm hover:shadow-md transition-all gap-3">
                                    <FaAppStoreIos className="text-xl" /> App Store
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image Section */}
                <div className="relative -mt-16 z-20 w-full max-w-4xl mx-auto px-4">
                     <img className='w-full drop-shadow-2xl animate-fade-in-up' src={hero} alt="App Showcase" />
                </div>

                {/* Stats Section */}
                <div className='w-full bg-[#632EE3] text-white py-12 mt-10'>
                    <div className="container mx-auto px-4">
                        <h2 className='text-3xl font-bold text-center mb-10 opacity-90'>Trusted by Millions globally</h2>
                        
                        <div className='flex flex-wrap justify-center gap-10 md:gap-20 text-center'>
                            <div className='bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg min-w-[200px]'>
                                <p className='text-xs uppercase tracking-wider opacity-70 mb-1'>Total Downloads</p>
                                <h3 className='text-4xl font-bold mb-2'>29.6M+</h3>
                                <div className="badge badge-success text-white gap-2">
                                    <FaArrowDown className="text-[10px]" /> 21% growth
                                </div>
                            </div>
                            
                            <div className='bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg min-w-[200px]'>
                                <p className='text-xs uppercase tracking-wider opacity-70 mb-1'>Active Users</p>
                                <h3 className='text-4xl font-bold mb-2'>900K+</h3>
                                <div className="badge badge-info text-white gap-2">
                                    <FaArrowDown className="text-[10px]" /> 15% growth
                                </div>
                            </div>

                            <div className='bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg min-w-[200px]'>
                                <p className='text-xs uppercase tracking-wider opacity-70 mb-1'>Awards Won</p>
                                <h3 className='text-4xl font-bold mb-2'>130+</h3>
                                <div className="badge badge-warning text-white gap-2">Top Developer</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trending Apps Section */}
                <div className='container mx-auto px-4 py-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold mb-3 text-gray-800'>Trending Apps</h2>
                        <p className='text-gray-500'>Discover our most popular applications loved by users worldwide</p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {appData.map(app => (
                            <Link to={`/apps/${app.id}`} key={app.id} className='group'>
                                <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                                    <figure className="px-6 pt-6 bg-gray-50 group-hover:bg-purple-50 transition-colors">
                                        <img src={app.image} alt={app.title} className="rounded-xl h-32 w-32 object-contain transform group-hover:scale-110 transition-transform duration-300" />
                                    </figure>
                                    <div className="card-body items-center text-center p-6">
                                        <h2 className="card-title font-bold text-lg">{app.title}</h2>
                                        <p className="text-sm text-gray-500 line-clamp-2">{app.description}</p>
                                        <div className="card-actions justify-center mt-4 w-full flex items-center justify-between border-t pt-4">
                                             <div className="flex items-center gap-1 text-yellow-500 font-bold">
                                                <FaStar /> {app.ratingAvg}
                                             </div>
                                             <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
                                                {(app.downloads / 1000000).toFixed(1)}M <small>Downloads</small>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className='text-center mt-16'>
                        <Link to="/apps" className="btn btn-primary btn-wide rounded-full shadow-lg text-lg normal-case">
                            View All Apps
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
