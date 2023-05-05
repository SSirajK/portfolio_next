import React from 'react';
import Mypic from '../assets/mypic.jpg';

const About: React.FC = () => {
    return (
        <div id='about' className='w-full h-screen text-gray-300 mt-52 pl-4 sm:pl-10'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 md:mt-0 mt-20'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-700'>
                            About
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-6'>
                    <div>
                        <p>
                            Hi! My name is Siraj Ul Haque and I am an experienced full-stack web developer with a focus on MERN stack. I have developed a strong foundation in designing user-centric and scalable applications. My experience includes working on a VKYC (Virtual Know Your Customer) application for Indian banking systems and other clients, as well as collaborating with cross-functional teams to deliver high-quality projects. With skills in UI design, API integration, and project management, I create efficient, responsive, and visually appealing web applications.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-8'>
                        <img
                            className='grid grid-cols-2 gap-10 w-full sm:w-auto h-[230px] sm:ml-52 opacity-80 rounded-3xl'
                            src={Mypic.src}
                            alt='My Picture'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
