import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosDownload } from 'react-icons/io';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Stats = () => {
    return (
        <div className='bg-[linear-gradient(45deg,#632EE3,#9F62F2)] text-center text-white flex flex-col justify-center items-center py-9'>
            <h2 className='font-semibold text-3xl md:text-4xl my-6 p-4'>
                Trusted by Millions, Built for You
            </h2>

            <div className='w-full flex flex-col md:flex-row justify-evenly my-8'>
                <div className='text-center my-6'>
                    <p>
                        Total Downloads
                        
                    </p>
                    <div className='text-6xl justify-center flex items-baseline font-semibold'>
                        <h1>
                            29.6M
                        </h1>
                        <IoIosDownload></IoIosDownload>
                    </div>
                    
                    <p>
                        21% more than last month
                    </p>
                </div>
                <div className='text-center my-6'>
                    <p>
                        Total Reviews
                    </p>
                    <div className='text-6xl flex justify-center items-baseline-last gap-3 font-semibold'>
                        <h1>
                            906k
                        </h1>
                        <FaStar></FaStar>
                    </div>
                    <p>
                        46% more than last month
                    </p>
                </div>
                <div className='text-center my-6'>
                    <p>
                        Active Apps
                    </p>
                    <div className='text-6xl flex justify-center items-center gap-2 font-semibold'>
                        <h1>
                            132+
                        </h1>
                        <IoLogoGooglePlaystore></IoLogoGooglePlaystore>
                    </div>
                    <p>
                        31 more will Launch
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stats;