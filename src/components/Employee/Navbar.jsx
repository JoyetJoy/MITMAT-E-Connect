import React from 'react';
import logo from '../../assets/logowhite.png';
import Button from '../defaultButton';
import { useNavigate } from 'react-router-dom';

function ClientNavbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmit = () => {
    navigate('/signup');
  };

  return (
    <div className='w-full h-20 flex items-center pl-[5%] pr-[5%]  bg-black gap-[4%] text-white  text-[20px]'>
      <img className='w-[7rem] sm:w-[10rem]' src={logo} alt="Logo" />
      <div>Home</div>
      <div>Employees</div>
      <div>About Us</div>
      <div>Contact Us</div>
      
      <div className='ml-auto flex items-center gap-4'>
        <div className='w-10 h-10 text-white bg-[#2d53bc] hover:bg-blue-800 border-2 border-white outline outline-2 rounded-full outline-black' ></div>
      </div>
    </div>
  );
}

export default ClientNavbar;
