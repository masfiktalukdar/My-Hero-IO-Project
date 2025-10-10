import React from 'react';
import hero from '../../assets/hero.png';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import appData from '../../../public/AppDataSort.json'; // JSON import
import { Link } from 'react-router-dom'; // 🟢 added import for Link

const Banner = () => {
    return (
        <div className='bg-[#ffffff] w-full'>
            <div className='flex flex-col justify-center items-center'>
                {/* Hero Section */}
                <h1 className='text-4xl font-bold'>
                    We Build <br />
                    <span className='text-[#632EE3]'>Productive</span> Apps
                </h1>

                <p className='text-[12px] text-gray-500 text-center'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> 
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                <div className='flex gap-5 m-3'>
                    <button className="btn btn-active"> 
                        <IoLogoGooglePlaystore /><span>Google Play</span>
                    </button>
                    <button className="btn btn-active"> 
                        <FaAppStoreIos /><span>App Store</span>
                    </button>
                </div>

                <img className='w-150' src={hero} alt="hero" />

                {/* Trusted Section */}
                <div className='bg-[#632EE3] w-full flex flex-col justify-center items-center'>
                    <h1 className='text-white p-5'>Trusted by Millions, Built for You</h1>

                    <div className='flex justify-between flex-wrap'>
                        <div className='m-5'>
                            <p className='text-[8px] text-gray-200'>Total Downloads</p>
                            <h1 className='text-white text-2xl'>29.6M</h1>
                            <p className='text-[8px] text-gray-200'>21% more than last month</p>
                        </div> 

                        <div className='m-5'>
                            <p className='text-[8px] text-gray-200'>Total Downloads</p>
                            <h1 className='text-white text-2xl'>906K</h1>
                            <p className='text-[8px] text-gray-200'>21% more than last month</p>
                        </div> 

                        <div className='m-5'>
                            <p className='text-[8px] text-gray-200'>Total Downloads</p>
                            <h1 className='text-white text-2xl'>132+</h1>
                            <p className='text-[8px] text-gray-200'>21% more than last month</p>
                        </div> 
                    </div>
                </div>

                {/* App Cards Section */}
                <div className='m-5'>
                    <h1 className='text-3xl font-bold m-3'>Trending Apps</h1>
                    <p className='text-[10px] text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 w-full m-5'>
                    {appData.map(app => (
                        <div key={app.id} className='border-1 border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center'>
                            <img src={app.image} alt={app.title} className='w-24 h-24 mb-2' />
                            <h2 className='font-bold text-lg text-center'>{app.title}</h2>
                            <div className='flex justify-between gap-20'>
                                <button className='btn'>
                                    <p className='mt-2 text-sm p-2 text-green-500 font-bold flex'>
                                        <FaArrowDown /> {app.ratingAvg}M
                                    </p>
                                </button>
                                <button className='btn'>
                                    <p className='text-sm p-2 text-orange-500 font-bold'>⭐{app.id}</p>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🟢 New Button Section - নিচে যুক্ত করা হয়েছে */}
                <div className='my-8'>
                    <Link to="/apps">
                        <button className="btn bg-[#632EE3] hover:bg-[#5123c5] text-white px-6 py-2 rounded-full font-bold shadow-lg transition-all duration-300">
                            View All Apps →
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
