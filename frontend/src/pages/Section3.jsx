import React, { useEffect } from 'react'

import '../styles/section3.css'

import sqaureTech from '../assets/square-tech.svg'
import sqaureVentureCapital from '../assets/square-venture-capital.svg'
import iHub from '../assets/iHub.svg'
import snsIns from '../assets/snsIns.svg'
import snsSpine from '../assets/snsSpine.svg'

const Section3 = () => {

  return (
    <div className='flex justify-start items-center mt-[150px]'>
      <div className='p-[30px] border-2 border-gray-500 rounded-full translate-x-[-50%] relative flex justify-end'>
        <div className='bg-white shadow-2xl flex items-center justify-center p-3 rounded-full'>
          <div className='rounded-full bg-yellow-300 h-[250px] w-[250px] flex justify-end items-center p-4'>
            <p className='w-[100px] text-wrap text-sm'> SNS DESIGN THINKING CONSULTANCY </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-end translate-x-[95%] translate-y-[-15%]'>
          <div className='rounded-full bg-[#B0D402] p-2 mr-2'> <img src={sqaureTech} alt="" /> </div>
          <div className='flex flex-col text-[10px]'>
            <p className='bg-[#B0D402] p-2 rounded-lg mb-1 text-white'> SNS Square Technologies </p>
            <p className='ml-1'> Empowering digital  transformations
              with IT and <br /> software solutions. </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-end translate-x-[45%] translate-y-[-110%] w-fit'>
          <div className='rounded-full bg-[#DE2A1B] p-2 mr-2'> <img src={sqaureVentureCapital} alt="" /> </div>
          <div className='flex flex-col text-[10px] mb-5'>
            <p className='bg-[#DE2A1B] p-2 rounded-lg mb-1 text-white'> SNS Venture Capital and Investments </p>
            <p className='w-full ml-1'> Funding high-potential startups for <br /> ownership stakes </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-start translate-x-[105%] translate-y-[185%]'>
          <div className='rounded-full bg-[#E10485] p-2 mr-2'> <img src={iHub} alt="" /> </div>
          <div className='flex flex-col text-[10px]'>
            <p className='bg-[#E10485] p-2 rounded-lg mb-1 text-white'> SNS Square Technologies </p>
            <p className='ml-1'> Empowering digital  transformations
              with IT and <br /> software solutions. </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-start translate-x-[95%] translate-y-[240%]'>
          <div className='rounded-full bg-[#EB510B] p-2 mr-2'> <img src={snsIns} alt="" /> </div>
          <div className='flex flex-col text-[10px] mt-6'>
            <p className='bg-[#EB510B] p-2 rounded-lg mb-1 text-white'> SNS Institutions </p>
            <p className='ml-1'> Nurturing holistic development
              through quality education. </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-start translate-x-[50%] translate-y-[280%] w-fit'>
          <div className='rounded-full bg-[#01A3D4] p-2 mr-2'> <img src={snsSpine} alt="" /> </div>
          <div className='flex flex-col text-[10px] mt-9'>
            <p className='bg-[#01A3D4] p-2 rounded-lg mb-1 text-white'> SNS B Spine </p>
            <p className='w-full ml-1'> Igniting Gen Y through movement,
               innovation, <br /> and teamwork </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3