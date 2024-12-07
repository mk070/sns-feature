import React, { useEffect } from 'react'

import '../styles/section3.css'

import sqaureTech from '../assets/square-tech.svg'
import sqaureVentureCapital from '../assets/square-venture-capital.svg'
import iHub from '../assets/iHub.svg'
import snsIns from '../assets/snsIns.svg'
import snsSpine from '../assets/snsSpine.svg'
import { faBrain, faHandsHelping, faLightbulb, faRocket, faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <div className='rounded-full bg-[#B0D402] p-1 mr-2'> <FontAwesomeIcon icon={faBrain} className='text-white w-6'/>  </div>
          <div className='flex flex-col text-[10px]'>
            <p className='bg-[#B0D402] p-2 rounded-lg mb-1 text-white'> SNS Square Technologies </p>
            <p className='ml-1'> Empowering digital <br /> transformations
              with IT and <br /> software solutions. </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-end translate-x-[45%] translate-y-[-115%] w-fit'>
          <div className='rounded-full bg-[#DE2A1B] p-1 mr-2'> <FontAwesomeIcon icon={faRocket} className='text-white w-6'/>  </div>
          <div className='flex flex-col text-[10px] mb-5'>
            <p className='bg-[#DE2A1B] p-2 rounded-lg mb-1 text-white'> SNS Venture Capital and Investments </p>
            <p className='w-full ml-1'> Funding high-potential startups for <br /> ownership stakes </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-start translate-x-[110%] translate-y-[165%]'>
          <div className='rounded-full bg-[#E10485] p-1 mr-2'> <FontAwesomeIcon icon={faHandsHelping} className='text-white w-6'/>  </div>
          <div className='flex flex-col text-[10px]'>
            <p className='bg-[#E10485] p-2 rounded-lg mb-1 text-white'> SNS Innovation Hub </p>
            <p className='ml-1'> Empowering digital <br /> transformations
              with IT <br />  and software solutions. </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-start translate-x-[90%] translate-y-[250%]'>
          <div className='rounded-full bg-[#EB510B] p-1 mr-2'> <FontAwesomeIcon icon={faSchool} className='text-white w-6'/>  </div>
          <div className='flex flex-col text-[10px] mt-6'>
            <p className='bg-[#EB510B] p-2 rounded-lg mb-1 text-white'> SNS Institutions </p>
            <p className='ml-1'> Nurturing holistic development
              <br /> through quality education. </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-start translate-x-[35%] translate-y-[275%] w-fit'>
          <div className='rounded-full bg-[#01A3D4] p-1'> <FontAwesomeIcon icon={faLightbulb} className='text-white w-6'/> </div>
          <div className='flex flex-col text-[10px] mt-10'>
            <p className='bg-[#01A3D4] p-2 rounded-lg mb-1 text-white'> SNS B Spine </p>
            <p className='w-full ml-1'> Igniting Gen Y through movement, <br />
               innovation, and teamwork </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3