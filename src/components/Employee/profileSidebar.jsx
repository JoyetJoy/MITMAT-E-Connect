import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import LockIcon from '@mui/icons-material/Lock';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '../../assets/avatar.png'
import { useNavigate } from 'react-router-dom';

function ProfileSidebar() {
    const navigate=useNavigate()

    const handleNavigate=(path)=>{
        navigate(path)
    }
  return (
    <div className='mt-[1px]'>
      <div className="w-72 h-screen bg-black flex flex-col text-white">
        <div className='h-36 w-full mb-5 flex items-center justify-center flex-col mt-10'>
            <img src={Avatar} alt="avatar" className='h-36 w-36 rounded-full' />
            <div className='flex items-center justify-center text-xl font-semibold'>Joyet Joy</div>
        </div>
        <ul className="space-y-10 mt-10 ml-[10%]  text-xl">
          <li className="flex items-center space-x-2 text-center cursor-pointer" onClick={()=>handleNavigate('/employee/profile')}>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-2 text-center cursor-pointer" onClick={()=>handleNavigate('/employee/profile')}>
            <VerifiedIcon />
            <span/>Verify Certificate
            </li>
          
          <li className="flex items-center space-x-2 text-center cursor-pointer" onClick={()=>handleNavigate('/employee/profile')}>
            <LockIcon />
            <span>Change Password</span>
          </li>
          <li className="flex items-center space-x-2 text-center cursor-pointer" onClick={()=>handleNavigate('/employee/profile')}>
            <DeleteIcon />
            <span>Delete Account</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSidebar;
