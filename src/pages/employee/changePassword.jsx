const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/button';
import axiosInstance from '../../instance/axiosInstance';

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const id = '66839de28bbff73bd14d5e08';
  const onSubmit = async(data) => {
    const response=await axiosInstance.post(`/employee/updatepassword?id=${id}`,data)
   
  };

  // To validate confirm password
  const newPassword = watch('newPassword', '');

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='w-[40%] h-[80%] flex items-center flex-col justify-center gap-[10%] border bg-slate-200 rounded-lg'>
        <h2 className='text-2xl font-bold '>Change Password</h2>
        <form className='font-semibold text-lg flex flex-col space-y-[10%]' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Old Password</label><br />
            <input className='rounded-sm' type="password" {...register('oldPassword', { required: 'Old Password is required' })}/>
            {errors.oldPassword && <p className='text-red-500 text-sm'>{errors.oldPassword.message}</p>}
          </div>

          <div>
            <label>New Password</label><br />
            <input className='rounded-sm' type="password" {...register('newPassword', {
              required: 'New Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              pattern: {
                value: passwordRegex,
                message: 'Enter a valid password',
              },
            })}
            />
            {errors.newPassword && <p className='text-red-500 text-xs w-full'>{errors.newPassword.message}</p>}
          </div>

          <div>
            <label>Confirm Password</label><br />
            <input className='rounded-sm' type="password" {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === newPassword || 'Passwords do not match',
            })}
            />
            {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword.message}</p>}
          </div>

          <Button className='h-8 border rounded-lg bg-slate-400' type="submit" content='Submit'/>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
