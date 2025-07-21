import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700  font-medium'>Us</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to [Your Website Name], your trusted platform for finding and booking appointments with the best doctors near you.</p>
          <p>We started with a simple mission: to make healthcare more accessible, convenient, and transparent for everyone. In today's fast-paced world, long wait times, lack of information, and uncertainty can make even a basic consultation stressful. That’s where we come in.</p>
          <b  className='text-gray-800'>Our Vision</b>
          <p>Quality healthcare is just a click away for everyone, everywhere.
             Patients and doctors connect with confidence, backed by transparency and trust.
             Time is valued — no more long waits, missed appointments, or confusing schedules.
             Technology bridges the gap between care seekers and providers, improving health outcomes and convenience.</p>
        </div>
      </div>
      <div className='text-sl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US?</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>


        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
<b className='text-2xl'>Efficiency:</b>
<p className=''>Our platform lets you book appointments instantly, view real-time availability, and find the right doctor using smart search filters — all in one place</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
<b className='text-2xl'>Convenience:</b>
<p> No more long calls, paperwork, or waiting rooms — just quick, easy, and reliable healthcare at your fingertips.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
<b className='text-2xl'>Personalization:</b>
<p>. Whether you're booking for yourself, a child, or a family member, our platform adapts to your journey, making every step feel easier, faster, and just right for you.</p>
        </div>
      </div>
    </div>
  )
}

export default About
