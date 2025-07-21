import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <h3 className='text-2xl'>Logo</h3>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Heelooooooooooooooooooooooooooooooooooooooooooooooooooo</p>

            </div>



            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>



            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Phone number</li>
                    <li>Email id</li>
                </ul>

            </div>

        </div>
        <div>
            <hr></hr>
            <p className='py-5 text-sm text-center'>Copyright 2024 research-All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
