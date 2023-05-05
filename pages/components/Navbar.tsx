import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const mail = 'https://mail.google.com/mail/?view=cm&fs=1&to=shieksirajkhan290@example.com';

    return (
        <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                {/* <Image src={Logo} alt="Logo Image" width={50} height={50} /> */}
            </div>
            {/* menu */}
            <ul className="hidden md:flex px-4 cursor-pointer">
                <li className="px-4">
                    <Link to="homepage" smooth duration={500}>
                        Home
                    </Link>
                </li>
                <li className='px-4 cursor-pointer'>
                    <a href='/Siraj_Ul_Haque_Resume.pdf' target='_blank'>
                        Resume
                    </a></li>
                <li className="px-4 cursor-pointer">
                    <Link to="about" smooth duration={500}>
                        About
                    </Link>
                </li>
                <li className="px-4 cursor-pointer">
                    <Link to="skills" smooth duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="px-4 cursor-pointer">
                    <Link to="work" smooth duration={500}>
                        Work
                    </Link>
                </li>
                <li className="px-4 cursor-pointer">
                    <Link to="contact" smooth duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden" style={{ display: nav ? 'flex' : 'none' }}>
                <li className="py-6 text-4xl">
                    <Link to="homepage" smooth duration={500} onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="about" smooth duration={500} onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="skills" smooth duration={500} onClick={handleClick}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="work" smooth duration={500} onClick={handleClick}>
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="contact" smooth duration={500} onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden md:flex lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/siraj-ul-haque-387608154/">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/SSirajK">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#61a496]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href={mail}>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4f565e]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/Siraj_Ul_Haque_Resume.pdf' download>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;