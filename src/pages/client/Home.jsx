import React from 'react';
import Navbar from '../../components/Client/ClientNavbar';
import backgroundImage from '../../assets/1_cover.jpg';
import Button from '../../components/button'; // Assuming you have a Button component
import Gigpro from '../../assets/companies/gigpro.png';
import Labourlink from '../../assets/companies/labourlink-logo.png';
import Jobjunction from '../../assets/companies/jobjunction-logo.png';
import Workwave from '../../assets/companies/WorkWave_Logo.jpg';
import Homecard from '../../components/homecard';
import { SlTrophy, SlBadge, SlRocket, SlWallet } from "react-icons/sl";
import Mixer from '../../assets/mixer.jpg';
import Carpenter from '../../assets/carpenter.jpg'
import Polisher from '../../assets/polisher.jpg'
import Furniture from '../../assets/furnicher.jpg'
import Electrician from '../../assets/electrician.jpg'
import Background from '../../assets/background.jpg'

function Home() {
  return (
    <div>
      <div className='h-screen w-full' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <Navbar />
        <div className='h-3/4 w-full flex flex-col items-start justify-center pl-[5%] space-y-10'>
          <div className='text-4xl text-[#3398dc] pt-5'>NEED A HAND?</div>
          <div className='w-3/4 text-[4rem] font-bold mt-10'>SKILLED WORKERS AT YOUR FINGERTIPS</div>
          <Button className='h-10 w-32 bg-[#f7b70b] font-semibold text-white rounded-[4px]' content='Explore Now' />
        </div>
      </div>
      <div className='h-screen flex items-center justify-center flex-col mt-[5rem] '>
        <div>The companies we are supported by</div>
        <div className='flex space-x-16 mt-8'>
          <img className=' w-48' src={Gigpro} alt="" />
          <img className=' w-48' src={Labourlink} alt="" />
          <img className=' w-48' src={Jobjunction} alt="" />
          <img className=' w-48' src={Workwave} alt="" />
        </div>
        <div className='flex mt-[8rem]'>
          <Homecard className='w-[17rem] h-[17rem] border flex flex-col text-center box-border text-lg outline-[#eeeeee] items-center justify-center space-y-7 hover:border-b-2 hover:border-yellow-500 hover:transform transition-all duration-300 ease-in-out'
            content={
            <><SlTrophy className='w-[2.5rem] h-[2.5rem] text-yellow-500'/>
            <p>OVER 10 YEARS OF EXPERIENCE</p>
            <div className='h-[2px] w-10 bg-yellow-500'></div>
            </>}
          />
          <Homecard className='w-[17rem] h-[17rem] border flex flex-col text-center box-border text-lg outline-[#eeeeee] items-center justify-center space-y-7 hover:border-b-2 hover:border-yellow-500 hover:transform transition-all duration-300 ease-in-out'
            content={
            <><SlBadge className='w-[2.5rem] h-[2.5rem] text-yellow-500'/>
            <p>ONLY LICENSED PROFESSIONALS</p>
            <div className='h-[2px] w-10 bg-yellow-500'></div>
            </>}
          />
          <Homecard className='w-[17rem] h-[17rem] border flex flex-col text-center box-border text-lg outline-[#eeeeee] items-center justify-center space-y-7 hover:border-b-2 hover:border-yellow-500 hover:transform transition-all duration-300 ease-in-out'
            content={
            <><SlRocket className='w-[2.5rem] h-[2.5rem] text-yellow-500'/>
            <p>WE PROVIDE SERVICE NATIONWIDE</p>
            <div className='h-[2px] w-10 bg-yellow-500'></div>
            </>}
          />
          <Homecard className='w-[17rem] h-[17rem] border flex flex-col text-center box-border text-lg outline-[#eeeeee] items-center justify-center space-y-7 hover:border-b-2 hover:border-yellow-500 hover:transform transition-all duration-300 ease-in-out'
            content={
            <><SlWallet className='w-[2.5rem] h-[2.5rem] text-yellow-500'/>
            <p>HONEST PRICES. BECAUSE WE CARE</p>
            <div className='h-[2px] w-10 bg-yellow-500'></div>
            </>}
          />
        </div>
      </div>
      <div className='h-full w-full flex items-center mt-[7rem] flex-col pl-[5%]'>
        <div className='text-[2.5rem] font-semibold'>SERVICES</div>
        <div className='h-[6px] w-24 bg-yellow-500 mt-5'></div>
        <div className='h-[42rem] w-full flex mt-10 flex-row'>
          <div className='relative h-[34rem] w-[45%] overflow-hidden group' style={{ backgroundImage: `url(${Mixer})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className='absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10'>
              <div className='h-[90%] w-[90%] border flex items-center justify-center'>
                <p className='text-xl'>INSTALL A MIXER</p>
              </div>
            </div>
            <div className='absolute inset-0 transition-transform transform group-hover:scale-110 duration-300 ease-in-out'>
              <div className='h-full w-full' style={{ backgroundImage: `url(${Mixer})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            </div>
          </div>
          <div>
            <div className='flex mb-4 ml-8'>
              <div className='relative w-[16rem] h-[16rem] mr-4 group overflow-hidden' style={{ backgroundImage: `url(${Carpenter})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10'>
                  <div className='h-[85%] w-[85%] border border-gray-400 flex items-center justify-center'>
                    <p className='text-xl'>CARPENTER</p>
                  </div>
                </div>
                <div className='absolute inset-0 transition-transform transform group-hover:scale-110 duration-300 ease-in-out'>
                  <div className='h-full w-full' style={{ backgroundImage: `url(${Carpenter})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                </div>
              </div>
              <div className='relative w-[16rem] h-[16rem] ml-4 group overflow-hidden' style={{ backgroundImage: `url(${Polisher})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10'>
                  <div className='h-[85%] w-[85%] border flex items-center justify-center'>
                    <p className='text-xl'>POLISHER</p>
                  </div>
                </div>
                <div className='absolute inset-0 transition-transform transform group-hover:scale-110 duration-300 ease-in-out'>
                  <div className='h-full w-full' style={{ backgroundImage: `url(${Polisher})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                </div>
              </div>
            </div>
            <div className='flex mt-8 ml-8'>
              <div className='relative w-[16rem] h-[16rem] mr-4 group overflow-hidden' style={{ backgroundImage: `url(${Furniture})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10'>
                  <div className='h-[85%] w-[85%] border flex items-center justify-center'>
                    <p className='text-xl text-center'>INSTALL A FURNITURE</p>
                  </div>
                </div>
                <div className='absolute inset-0 transition-transform transform group-hover:scale-110 duration-300 ease-in-out'>
                  <div className='h-full w-full' style={{ backgroundImage: `url(${Furniture})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                </div>
              </div>
              <div className='relative w-[16rem] h-[16rem] ml-4 group overflow-hidden' style={{ backgroundImage: `url(${Electrician})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10'>
                  <div className='h-[85%] w-[85%] border flex items-center justify-center'>
                    <p className='text-xl'>ELECTRICIAN</p>
                  </div>
                </div>
                <div className='absolute inset-0 transition-transform transform group-hover:scale-110 duration-300 ease-in-out'>
                  <div className='h-full w-full' style={{ backgroundImage: `url(${Electrician})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[40rem]'>
        <div className='h-full transform origin-top-left skew-y-[4deg] bg-[#f7b70b]'>
          <div className='h-3/4 bg-cover transform origin-top-left skew-y-[-4deg]' style={{backgroundImage:`url(${Background})`}}></div>
        </div>
      </div>



    </div>
  );
}

export default Home;
