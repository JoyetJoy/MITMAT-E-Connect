import React from 'react';
import logo from '../assets/logo.png';
import Button from './defaultButton';
import { useNavigate } from 'react-router-dom';

function LandingNavbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmit = () => {
    navigate('/signup');
  };

  return (
    <div className='w-full h-20 flex items-center pl-[8%] pr-[5%] bg-transparent'>
      <img className='w-[10rem]' src={logo} alt="Logo" />
      
      <div className='ml-auto flex items-center gap-4'>
        <div className='w-20 h-9 flex items-center hover:cursor-pointer' onClick={handleLoginClick}>Login</div>
        <Button className='w-32 h-9 text-white bg-[#2d53bc] hover:bg-blue-800 border-2 border-black outline outline-2 rounded-md outline-white' onClick={handleSubmit} content='Sign Up'/>
      </div>
    </div>
  );
}

export default LandingNavbar;
