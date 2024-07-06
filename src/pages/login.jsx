import React, { useState } from 'react';
import backgroundImage from '../assets/login image.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../components/button';
import axiosInstance from '../instance/axiosInstance';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [errorTimeoutId, setErrorTimeoutId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data) => {
    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Password regex validation (at least 8 characters, at least one uppercase letter, one lowercase letter, and one number)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(data.email)) {
      setError('email', { type: 'manual', message: 'Enter a valid email address' });
    } else if (!passwordRegex.test(data.password)) {
      setError('password', { type: 'manual', message: 'Enter a valid password' });
    } else {
      try {
        const response = await axiosInstance.post('/user/login', data);
        setSuccessMessage('Login Successfully');
        // Redirect to OTP page immediately after setting success message
        console.log(response.data);
        if (response.data.user) {
          navigate(`/employee/account`);
        } else {
          // Handle case where user ID is not present in the response
          setError('error', { type: 'manual', message: 'User ID not found for OTP redirection.' });
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          const id = error.response.data;console.log(id);
          navigate(`/otp/${id}`);
        } else {
          setError('error', { type: 'manual', message: error.response.data.message });
          if (errorTimeoutId) {
            clearTimeout(errorTimeoutId);
          }
          const timeoutId = setTimeout(() => {
            setError('error', { type: 'manual', message: '' });
          }, 1000);
          setErrorTimeoutId(timeoutId);
        }
      }
    }
  };

  return (
    <div className='h-screen bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='w-[20rem] h-[25rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-custom-dark bg-opacity-65 flex items-center justify-center flex-col backdrop-blur-sm'>
        <div className='w-full text-[40px] font-bold text-white flex justify-center mb-8'>Login</div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col w-[65%]'>
          <input className='h-7 w-full mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Email' type='text' {...register('email', { required: true })} />
          {errors.email && <span className='text-[0.80rem] text-red-500  float-start'>{errors.email.message || 'This field is required'}</span>}
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Password' type='password' {...register('password', { required: true })} />
          {errors.password && <span className=' text-[0.80rem] text-red-500'>{errors.password.message || 'This field is required'}</span>}
          <div className='text-white text-sm w-full flex gap-10 mb-1 mt-5 '>
            <label>
              <input type='radio' value='employee' {...register('role', { required: true })} className='mr-2 ' />
              Employee
            </label>
            <label>
              <input type='radio' value='user' {...register('role', { required: true })} className='mr-2 ' />
              User
            </label>
          </div>
          {errors.role && <span className='text-red-500 text-[0.80rem]'>This field is required</span>}
          <div className='text-[0.80rem] text-white w-full'>Don't have an account? <Link to='/signup' className='text-custom-primary font-semibold'>Register</Link></div>
          {errors.error && <span className='text-red-500 text-[0.80rem]'>{errors.error.message}</span>}
          {successMessage && <span className='text-green-500 text-[0.80rem]'>{successMessage}</span>}
          <Button type='submit' className='bg-white p-2 rounded-sm mt-4 w-full h-9 font-bold text-black hover:bg-blue-700' content='Submit' />
        </form>
      </div>
    </div>
  );
}

export default Login;
