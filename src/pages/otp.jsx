import React, { useState } from "react";
import loginImage from '../assets/login image.jpg';
import Button from '../components/button';
import axiosInstance from "../instance/axiosInstance";
import { useParams,useNavigate } from "react-router-dom";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error,setError]=useState(null)
  const {id}=useParams()
  const navigate=useNavigate()

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const emptyFields=Object.values(otp).some((value)=>value==='')
    const Otp=otp.join('')
    
    if(emptyFields){
      setError('All fields required')
    }else{
      try{
        const response=await axiosInstance.post('/user/otp',{otp:Otp,id:id})
        setError(response.data.message)
        navigate('/login')
      }catch(error){
        if(error.response&&error.response.status===400){
          setError(error.response.data.message||'Invalid otp')
        }else{
          setError('Otp verification failed!')
        }
      }

    }
    

  };

  return (
    <>
      <img src={loginImage} className="h-screen w-full" alt="Login background" />
      <div className="w-[20rem] h-[18rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-custom-dark bg-opacity-65 flex items-center flex-col backdrop-blur-sm">
        <div className="w-full text-[37px] font-bold text-white flex justify-center mb-8 mt-8">Verify OTP</div>
        <form onSubmit={handleSubmit}>
        <div className="flex space-x-2 mb-4">
          {otp.map((data, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-center text-2xl rounded-md"
            />
          ))}
        </div>
        {error&&<span className="text-red-400">{error}</span>}
        <Button className='w-full h-10 bg-blue-500 mt-5 rounded-md hover:bg-blue-700' label="Submit" type='submit'  content='Verify'/>
        </form>
      </div>
    </>
  );
}

export default OTP;
