import React from 'react';
import RF from '../assets/RodanandFields.jpg';
import Purplle from '../assets/purplle.jpg';
import purple from '../assets/purple.jpg';

const Work: React.FC = () => {
    return (
        <div id="work" className="text-gray-300 md:mt-52 mt-80 px-4 sm:pl-12 min-h-screen mb-0">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-24 h-full md:mt-12 mt-64">
                <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 md:mt-0 mt-20'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-700'>
                            Work
                        </p>
                    </div>
                </div>
                <p className='py-6 md:pr-24 text-center'>//Check out some of my recent work</p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Cart Items */}

                    <div style={{ backgroundImage: `url(${RF.src})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}

                        <div className="opacity-0 group-hover:opacity-100 ml-10">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Rodan And Fields (clone)
                            </span>
                            <br />
                            <span className="text-1l text-white tracking-wider">
                                Website cloned and tech used was HTML | CSS | Vanilla JS
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://rodan-fields.netlify.app/">
                                    <button className="text-center rounded-lg px-4 py-3 mr-6 mb-2 bg-black text-blue-400 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Mitul-778/Rodan-Fields">
                                    <button className="text-center rounded-lg px-4 py-3 mr-8 bg-black text-blue-300 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Purplle.src})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}

                        <div className="opacity-0 group-hover:opacity-100 ml-10">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Purplle (clone)
                            </span>
                            <br />
                            <span className="text-1l text-white tracking-wider">
                                Website cloned and tech used was HTML | CSS | Advanced JS
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://stirring-speculoos-743377.netlify.app/">
                                    <button className="text-center rounded-lg px-4 py-3 mr-6 mb-2 bg-black text-blue-400 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/SSirajK/Purplle">
                                    <button className="text-center rounded-lg px-4 py-3 mr-8 bg-black text-blue-300 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${purple.src})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}

                        <div className="opacity-0 group-hover:opacity-100 ml-10">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Purple (clone)
                            </span>
                            <br />
                            <span className="text-1l text-white tracking-wider">
                                Website cloned and tech used was HTML | CSS | ReactJS
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://purple-clone.netlify.app/">
                                    <button className="text-center rounded-lg px-4 py-3 mr-6 mb-2 bg-black text-blue-400 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/victorfreitas/purple-clone">
                                    <button className="text-center rounded-lg px-4 py-3 mr-8 bg-black text-blue-300 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;