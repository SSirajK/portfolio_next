import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faEnvira, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
/* eslint-disable react/no-unescaped-entities */

const Skills: React.FC = () => {
    return (
        <div id="skills" className="text-gray-300 md:mt-52 mt-80 px-4 sm:pl-24 h-screen mb-0">
            <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 md:mt-0 mt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-700'>
                        Skills
                    </p>
                </div>
            </div>
            <div className='flex md:flex-row h-screen'>
                <div className="hidden md:block md:w-1/2 md:mr-8">
                    <br />
                    <br />
                    <div className="text-gray-300">
                        <p className="py-4 lg:ml-28">
                            These are the technologies I've worked with
                        </p>
                        <br />
                        <br />
                        <p className="inline"> NodeJs</p>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;|&nbsp;
                        <p className="inline">HTML5</p>&nbsp;&nbsp;&nbsp;|&nbsp;
                        <p className="inline">CSS3</p>
                        <br />
                        <br />
                        <p className="inline"> MongoDb</p>&nbsp;&nbsp;&nbsp;|&nbsp;
                        <p className="inline">React</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;
                        <p className="inline">JavaScript</p>
                        <br />
                        <br />
                        <p className="inline">Animation with CSS</p>&nbsp;&emsp;|&nbsp;
                        <p className="inline">Express JS</p>

                    </div>
                </div>
                <div className="stage-cube-cont md:ml-0 md:mt-0 mt-12 flex-1">
                    <div className="cubespinner grid grid-cols-2 md:grid-cols-3">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNodeJs} color="#41893E" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faEnvira} color="#A5D6A7" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skills;