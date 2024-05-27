import React from "react";

const otp=()=>{
    return(
        <>
        <img src={loginImage} className='h-screen w-full' alt='Login background' />
      <div className='w-[22rem] h-[33rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-sm bg-custom-dark bg-opacity-65 flex items-center justify-center flex-col'>
        <div className='w-full text-[40px] font-bold text-white flex justify-center mb-8 '>Signup</div>
        <form className='flex items-center justify-center flex-col w-[65%]' onSubmit={handleSubmit}>
          <input className='h-7 w-full mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Username' type='text' name='username' value={inputs.username} onChange={handleChange} />
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Email' type='email' name='email' value={inputs.email} onChange={handleChange} />
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Phone Number' type='number' name='phonenumber' value={inputs.phonenumber} onChange={handleChange} />
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Password' type='password' name='password' value={inputs.password} onChange={handleChange} />
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Confirm Password' type='password' name='confirmpassword' value={inputs.confirmpassword} onChange={handleChange} />
          <div className='text-white text-sm w-full flex gap-10 mb-1 mt-5 '>
            <label>
              <input type='radio' name='role' value='employee' checked={inputs.role === 'employee'} className='mr-2 ' onChange={handleChange} />
              Employee
            </label>
            <label>
              <input type='radio' name='role' value='user' checked={inputs.role === 'user'} className='mr-2 ' onChange={handleChange} />
              User
            </label>
          </div>
          {error? <span className='text-red-500 text-[0.80rem]'>{error}</span>:<span className='text-green-400 text-[0.80rem]'>{success}</span>}
          <div className='text-[0.80rem] text-white w-full'>Already have an account? <Link to='/' className='text-custom-primary font-semibold'>Login</Link></div>
          <Button type='submit' className='bg-white p-2 rounded-sm mt-4 w-full h-9 font-bold text-black' content='Submit' />
        </form>
      </div>
        </>
    )
}

export default otp;