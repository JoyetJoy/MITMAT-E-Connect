import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axiosInstance from '../../instance/axiosInstance';

function EmployeeProfile() {
  const [initialValues, setInitialValues] = useState({
    id:'',
    name: '',
    email: '',
    phonenumber: '',
    position: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      const id = '66839de28bbff73bd14d5e08';  
      try {
        const response = await axiosInstance.get(`/employee/profileGet?id=${id}`);
        const data = response.data.employee;
        console.log(data);
        setInitialValues({
          id: data._id,
          name: data.username || '',
          email: data.email || '',
          phonenumber: data.phonenumber || '',
          position: data.position || '',
        });
      } catch (error) {
        console.error('There was an error fetching the data!', error);
        setError('There was an error fetching the data!');
      }
    };

    fetchProfileData();
  }, []);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true, // Reinitialize form when initialValues change
    onSubmit: async (values) => {
      setError(''); // Reset the error state before submission
      try {
        const response=await axiosInstance.put(`/employee/profilePut?id=${initialValues.id}`, values); // Replace with your actual API endpoint
        const data = response.data.updatedEmployee;
        console.log(data);
        setInitialValues({
          id: data.id,
          name: data.username || '',
          email: data.email || '',
          phonenumber: data.phonenumber || '',
          position: data.position || '',
        });
      } catch (error) {
        console.error('There was an error updating the profile!', error);
        setError('There was an error updating the profile!');
      }
    },
  });

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[40%] h-[90%] bg-slate-200 flex items-center justify-center flex-col font-bold rounded-lg'>
        <h1 className='text-2xl'>Employee Profile</h1>
        <form className='flex flex-col items-center mt-10 gap-5' onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name" className='block mb-2 text-black'>Name</label>
            <input
              className='border border-black rounded-sm text-black pl-1'
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div>
            <label htmlFor="email" className='block mb-2 text-black'>Email</label>
            <input
              className='border border-black rounded-sm text-black pl-1'
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div>
            <label htmlFor="phonenumber" className='block mb-2 text-black'>Phone Number</label>
            <input
              className='border border-black rounded-sm text-black pl-1'
              id="phonenumber"
              name="phonenumber"
              type="text"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phonenumber}
            />
          </div>
          <div>
            <label htmlFor="position" className='block mb-2 text-black'>Position</label>
            <input
              className='border border-black rounded-sm text-black pl-1'
              id="position"
              name="position"
              type="text"
              placeholder="Position"
              onChange={formik.handleChange}
              value={formik.values.position}
            />
          </div>
          {error && <div className='text-red-500'>{error}</div>}
          <button type="submit" className=' w-[60%] h-8 flex items-center justify-center bg-slate-400 text-black px-4 py-2 rounded-sm'>Save</button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeProfile;
