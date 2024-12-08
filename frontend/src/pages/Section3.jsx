import React, { useEffect, useState } from 'react'

import '../styles/section3.css'

import sqaureTech from '../assets/square-tech.svg'
import sqaureVentureCapital from '../assets/square-venture-capital.svg'
import iHub from '../assets/iHub.svg'
import snsIns from '../assets/snsIns.svg'
import logo from '../assets/logo.svg'
import { faArrowUpRightDots, faBars, faClose, faGraduationCap, faHandHoldingDollar, faHandsHelping, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Section3 = () => {

  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <div className='relative flex flex-col justify-start items-start'>
      <section className={`${openSideBar ? "sidebar" : "sidebar-hidden"} p-5 flex flex-col`}>
        <div className='flex flex-row justify-between items-center'>
          <img src={logo} alt="" className='w-14 h-14 object-cover' />
          <FontAwesomeIcon icon={faClose} className='cursor-pointer w-6 h-6' onClick={() => setOpenSideBar(stat => !stat)} />
        </div>

        <div className='flex flex-col justify-evenly items-center flex-1 text-2xl py-[50%]'>
          <p className='cursor-pointer hover:underline underline-offset-8'> Home </p>
          <p className='cursor-pointer hover:underline underline-offset-8'> Contact Us </p>
          <p className='cursor-pointer hover:underline underline-offset-8'> About Us </p>
          <p className='cursor-pointer hover:underline underline-offset-8'> Help </p>
        </div>

        <div className='flex justify-between'>
          <a href="https://www.linkedin.com/company/sns-ihub/">Linked In</a>
          <a href="https://www.instagram.com/snsinstitutions/p/DDQijzoTAA6/">Instagram</a>
        </div>
      </section>

      <nav className='p-2 px-4 shadow-sm w-full flex flex-row items-center justify-between'>
        <img src={logo} alt="" className='w-10 h-10 object-cover' />
        <FontAwesomeIcon icon={faBars} className='cursor-pointer' onClick={() => setOpenSideBar(stat => !stat)} />
      </nav>

      <div className='p-[30px] border-2 border-gray-500 rounded-full translate-x-[-50%] relative flex justify-end mt-[150px] sm:p-[40px]'>
        <div className='bg-white shadow-2xl flex items-center justify-center p-3 rounded-full'>
          <div className='rounded-full bg-yellow-300 h-[250px] w-[250px] flex justify-end items-center p-4 sm:w-[330px] sm:h-[330px]'>
            <p className='w-[100px] text-wrap text-sm font-bold sm:w-[130px] sm:text-lg'> SNS DESIGN THINKING CONSULTANCY </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-end translate-x-[55%] translate-y-[-112%] mbmd:translate-x-[60.5%] mbmd:translate-y-[-115%]'>
          <div className='rounded-full bg-[#DE2A1B] p-1 mr-2'> <FontAwesomeIcon icon={faHandHoldingDollar} className='text-white w-6' />  </div>
          <div className='flex flex-col text-[10px] mb-7 sm:text-[11px]'>
            <p className='bg-[#DE2A1B] p-2 rounded-lg mb-1 text-white font-semibold'> SNS Venture Capital and Investments </p>
            <p className='w-[200px] ml-1 mbmd:w-[250px]'> Funding high-potential startups for ownership stakes </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-end translate-x-[95%] translate-y-[-15%] sm:translate-x-[93%]'>
          <div className='rounded-full bg-[#B0D402] p-1 mr-2'> <FontAwesomeIcon icon={faMicrochip} className='text-white w-6' />  </div>
          <div className='flex flex-col text-[10px] sm:text-[11px]'>
            <p className='bg-[#B0D402] p-2 rounded-lg mb-1 text-white font-semibold'> SNS Square Technologies </p>
            <p className='ml-1 w-[140px] mbmd:w-[200px] mblg:w-[250px]'> Empowering digital transformations
              with IT and software solutions. </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-start translate-x-[110%] translate-y-[165%] mbmd:translate-y-[185%] mbmd:translate-x-[108%] sm:translate-y-[235%] sm:translate-x-[110%]'>
          <div className='rounded-full bg-[#E10485] p-1 mr-2'> <FontAwesomeIcon icon={faHandsHelping} className='text-white w-6' />  </div>
          <div className='flex flex-col text-[10px] sm:text-[11px]'>
            <p className='bg-[#E10485] p-2 rounded-lg mb-1 text-white font-semibold'> SNS Innovation Hub </p>
            <p className='ml-1 w-[120px] mbmd:w-[160px] mblg:w-[210px]'> Empowering digital transformations
              with IT and software solutions. </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-start translate-x-[90%] translate-y-[250%] mbmd:translate-y-[230%] mbmd:translate-x-[96%] sm:translate-y-[300%]'>
          <div className='rounded-full bg-[#EB510B] p-1 mr-2'> <FontAwesomeIcon icon={faGraduationCap} className='text-white w-6' />  </div>
          <div className='flex flex-col text-[10px] mt-6 sm:text-[11px]'>
            <p className='bg-[#EB510B] p-2 rounded-lg mb-1 text-white font-semibold'> SNS Institutions </p>
            <p className='ml-1 w-[140px] mbmd:w-[200px] mblg:w-[250px]'> Nurturing holistic development
              through quality education. </p>
          </div>
        </div>

        <div className='absolute flex flex-row items-start translate-x-[50%] translate-y-[250%] w-fit mbmd:translate-y-[270%] mbmd:translate-x-[60%] sm:translate-y-[335%]'>
          <div className='rounded-full bg-[#01A3D4] p-1'> <FontAwesomeIcon icon={faArrowUpRightDots} className='text-white w-6' /> </div>
          <div className='flex flex-col text-[10px] mt-12 mbmd:mt-10 sm:text-[11px]'>
            <p className='bg-[#01A3D4] p-2 rounded-lg mb-1 text-white font-semibold'> SNS B Spine </p>
            <p className='w-[180px] ml-1 mbmd:w-[250px]'> Igniting Gen Y through movement,
              innovation, and teamwork </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3