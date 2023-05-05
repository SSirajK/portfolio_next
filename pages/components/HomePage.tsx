import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Link from 'react-scroll/modules/components/Link';

const HomePage: React.FC = () => {
    return (
        <div id='homepage' className='w-full h-screen flex justify-around'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full mt-4'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#b5bdda] mg:ml-4'>
                    Siraj Ul Haque
                </h1>
                <img
                    className='pt-10'
                    src='https://readme-typing-svg.herokuapp.com?color=%236FDA44&size=32&center=true&vCenter=true&width=600&height=50&lines=Hi+there+%F0%9F%91%8B;Front-End+Developer;Problem+Solver;'
                    alt='Headline'
                />
                <p className='text-[#52596b] py-4 mg:ml-32 max-w-[700px]'>
                    I&apos;m a Full-Stack Web Developer at Syntizen Technologies.
                </p>
                <ul>
                    <li>
                        <Link to='work' smooth={true} duration={500}>
                            <button className='text-white group border-2 w-36 mg:ml-40 h-12 px-3 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-800'>
                                View Work
                                <span className='group-hover:rotate-45 duration-300'>
                                    <HiArrowNarrowRight className='ml-3' />
                                </span>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
