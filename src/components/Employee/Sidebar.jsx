import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import LockIcon from '@mui/icons-material/Lock';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '../../assets/avatar.png';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../instance/axiosInstance';

function ProfileSidebar() {
  const navigate = useNavigate();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleDelete = async () => {
    try {
      const id = '66839de28bbff73bd14d5e08';
      await axiosInstance.delete(`/employee/deleteaccount?id=${id}`);
      setShowConfirmDelete(false);
      setShowDeleteSuccess(true);
      setTimeout(() => {
        setShowDeleteSuccess(false);
        navigate('/login');
      }, 2000); // Redirect to login after 2 seconds
    } catch (error) {
      console.error('Error deleting account:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className='mt-[1px]'>
      <div className="w-72 h-screen bg-black flex flex-col text-white">
        <div className='h-36 w-full mb-5 flex items-center justify-center flex-col mt-10'>
          <img src={Avatar} alt="avatar" className='h-36 w-36 rounded-full' />
          <div className='flex items-center justify-center text-xl font-semibold'>Joyet Joy</div>
        </div>
        <ul className="space-y-10 mt-10 ml-[10%] text-xl">
          <li className="flex items-center space-x-2 text-center cursor-pointer" onClick={() => handleNavigate('/employee/account')}>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-2 text-center cursor-pointer" onClick={() => handleNavigate('/employee/profile')}>
            <VerifiedIcon />
            <span>Verify Certificate</span>
          </li>
          <li className="flex items-center space-x-2 text-center cursor-pointer" onClick={() => handleNavigate('/employee/changepassword')}>
            <LockIcon />
            <span>Change Password</span>
          </li>
          <li className="flex items-center space-x-2 text-center cursor-pointer" onClick={() => setShowConfirmDelete(true)}>
            <DeleteIcon />
            <span>Delete Account</span>
          </li>
        </ul>
      </div>

      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg">
            <div>
            <h2 className="text-xl mb-4">Are you sure you want to delete your account?</h2>
            </div>
            <div className='flex items-center justify-center'>
            <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleDelete}>Yes, Delete</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setShowConfirmDelete(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showDeleteSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-xl">Account deleted successfully!</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileSidebar;
