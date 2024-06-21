import React from 'react';
import Client from '../assets/client1.webp';
import backgroundImage from '../assets/landbg1.png';
import Navbar from '../components/landingNavbar';
import Imgage1 from '../assets/landpageimg1.png';
import Worker from '../assets/worker.jpg';
import Dots from '../assets/dots.png';
import Dot from '../components/dot';
import Button from '../components/defaultButton'
import Plumber from '../assets/worker2.jpg'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/navFooter';

function LandingPage() {
  const navigate = useNavigate();

  const signUpclick=()=>{
    navigate('/signup')
  }
  
  const logInclick=()=>{
    navigate('/login')
  }

  return (
    <>
      <div className="relative h-[40rem] md:h-[44rem]  flex justify-center bg-custom-gradient bg-no-repeat bg-cover bg-center sm:bg-none mb-40" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <div className='absolute flex w-[90%] h-[30rem] top-[15%] gap-[8%] md:flex-row flex-col '>
          <div className='md:w-1/2 w-full flex flex-col  items-center '>
            <div className='w-4/5 2xl:text-[64px] xl:text-[59px] lg:text-[49px] sm:text-[45px]  text-[40px] font-bold pt-0 md:pt-[12%] text-center text-[#213b82] mt-10 md:mt-0'>We Will Do Your All Work</div>
            <p className='md:w-4/5 xl:w-4/5 ml-1 mt-10 text-center text-[#252525f2] font-bold text-[19px]'>Your trusted source for skilled daily wage employees. Connect with reliable workers today!</p>
          </div>
          <img className='absolute w-[12.5rem] top-[49.5%] left-[75%] hidden lg:block' src={Dots} alt="" />
          <img className='relative w-[15rem] xl:w-[21rem] h-fit md:w-[21rem] sm:w-[19rem] rounded-md mt-20 md:mt-0 ml-[13%] xs:ml-[20%] sm:ml-[25%] md:ml-0   shadow-customShadow' src={Imgage1} alt="" />
        </div>
      </div>
      <Dot className=' w-9 h-9 relative top-[35rem] left-[15%] rounded-full bg-[#c597f9] z-10'/>
      <Dot className=' w-6 h-6 relative top-[30rem] left-[80%] rounded-full bg-[#ffc279] z-10'/>
      <Dot className=' w-3 h-3 relative top-[6rem] left-[57%] rounded-full bg-[#74e3ea] z-10'/>
      <div className="flex justify-center items-center p-10 mt-14 sm:mt-0 mb-16">
        <div className="aspect-w-16 aspect-h-9 w-full max-w-screen-lg">
          <div className='h-full w-full flex flex-col sm:flex-row items-center justify-center gap-10 p-10'>
            <div className='w-full sm:w-[27rem] flex flex-col items-center justify-center text-center sm:order-1 order-2'>
              <h1 className='z-11 text-2xl sm:text-4xl font-bold'>Get Started Today</h1>
              <p className='text-base sm:text-[19px] mt-0 sm:mt-5 p-5'>Join our platform to connect with talented individuals and find opportunities tailored to your needs. Showcase your skills, browse profiles, review ratings, and hire with confidence. Enjoy seamless booking and communication. Sign up now!</p>
              <Button className='h-[2.5rem] w-56 bg-[#f7b70b] font-bold rounded-full shadow-black shadow-2xl transform transition duration-300 ease-in-out hover:scale-110 ' onClick={signUpclick} content='Sign Up'/>
            </div>
            <div className='h-1/2 flex justify-center items-center sm:order-2 order-1'>
              <img className='w-[11rem] h-[14rem] sm:w-[18rem] sm:h-[21rem] rounded-tl-[5rem] rounded-br-[5rem] object-cover border border-black transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-sm shadow-custom-shadow' src={Client} alt="Client" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Dot className=' w-9 h-9 relative top-[32rem] left-[14%] rounded-full bg-[#c597f9]'/>
      <Dot className=' w-6 h-6 relative top-[30rem] left-[80%] rounded-full bg-[#74e3ea]'/>
      <Dot className=' w-3 h-3 relative top-[8rem] left-[60%] rounded-full bg-[#ffc279]'/>
      <Dot className=' w-2 h-2 relative top-[4rem] left-[44%] rounded-full bg-[#4E79F0]'/>
      <div className="flex justify-center items-center p-10 mb-16">
        <div className="aspect-w-16 aspect-h-9 w-full max-w-screen-lg">
          <div className='h-full w-full flex flex-col sm:flex-row items-center justify-center gap-10 p-10'>
            <div className='h-1/2 flex justify-center items-center '>
              <img className='w-[11rem] h-[14rem] sm:w-[18rem] sm:h-[21rem] rounded-tl-[5rem] rounded-br-[5rem] object-cover border border-black transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-sm shadow-custom-shadow' src={Worker} alt="Employee" />
            </div>
            <div className='w-full sm:w-[27rem] flex flex-col items-center justify-center text-center'>
              <h1 className='text-2xl sm:text-4xl font-bold'>Welcome Back!</h1>
              <p className='text-base sm:text-[18px] mt-0 sm:mt-5 p-5'>Sign in to connect with talented individuals and discover tailored opportunities. Manage your profile, review ratings, and enjoy seamless booking and communication. Log in now to continue your journey!</p>
              <Button className='h-[2.5rem] w-56 bg-[#f7b70b] font-bold rounded-full shadow-black shadow-2xl transform transition duration-300 ease-in-out hover:scale-110 ' onClick={logInclick} content='Sign In'/>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="relative h-[40rem] md:h-[44rem]  flex justify-center mb-20 ">
        <div className='absolute flex w-[90%] h-[30rem] top-[20%] gap-[8%] md:flex-row flex-col '>
        <img className='absolute w-[11.5rem] -top-[9%] left-[5.1%] hidden md:block' src={Dots} alt="" />
        <img className='relative w-[15rem] xl:w-[21rem] h-fit md:w-[21rem] sm:w-[19rem] mt-5 md:mt-0 ml-[15%] xs:ml-[18%] sm:ml-[25%] md:ml-[9%] rounded-md md:rounded-md shadow-customShadow' src={Plumber} alt="" />
          <div className='md:w-1/2 w-full h-3/4 flex flex-col  items-center justify-center'>
            <div className='w-4/5 2xl:text-[43px] xl:text-[42px] lg:text-[39px] text-[32px] font-bold pt-0 text-center'>Thank You for Visiting !</div>
            <p className='md:w-4/5 xl:w-4/5 ml-1 mt-10 text-center'>We appreciate your time on our platform. Discover talented individuals, tailored opportunities, and seamless booking. Join us to elevate your workforce experience!</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default LandingPage;
