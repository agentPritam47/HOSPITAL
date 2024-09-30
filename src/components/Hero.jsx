import React from 'react'

const Hero = () => {
  return (
    <div className=' h-fit pb-[25vh] sm:pb-5 w-full pt-7 px-[5vw] lg:px-[10vw] font-[bolld]'>
        <nav className=' w-full flex justify-between items-center'>
            <h1 className=' text-3xl'>OSKA</h1>

            <div className=' lg:flex items-center gap-7 text-[1.05vw] font-bold lg:visible hidden'>
                <p>Individuals</p>
                <p>Medical professionals</p>
                <p>How it works</p>
                <p>About us</p>
                <p>Contact us</p>
                <p className=' px-5 py-2 border-[3.9px] border-zinc-300 rounded-full'>DE</p>
            </div>
        </nav>


        <div className=' w-full h-[80vh] lg:h-[70vh] mt-[3vw] rounded-2xl flex lg:flex-row flex-col lg:overflow-hidden relative bg-red-300'>
            <div className='lg:pl-[5vw] lg:pr-[6vw] pl-[3vw] pr-[3vw] py-[7.5vw] lg:h-full h-[100%] lg:w-[55%] lg:rounded-none rounded-2xl w-full bg-violet-900 flex justify-center items-center'>
                <div className='h-full w-full '>
                    <h1 className=' rounded-2xl text-white text-3xl lg:text-4xl font-bold'>A healthier you: Personal support for long-lasting change</h1>
                    <p className=' text-white mt-5'>Personal health coaching for people with chronic conditions via our easy-to-use app.</p>
                    <div className='flex flex-col lg:flex-row gap-5 pt-5'>
                        <button className=' text-sm w-fit font-semibold px-7 lg:px-5 py-3 bg-white text-black rounded-full sm:text-lg'>Start now <i className="ri-arrow-right-line"></i></button>
                        <button className=' text-sm w-fit font-semibold px-4 py-2 border-[4px] border-white text-white rounded-full sm:text-lg'>Find out more</button>
                    </div>
                </div>
            </div>
            <div className=' lg:h-full h-[50vh] lg:w-[45%] w-[70vw] lg:rounded-none rounded-2xl lg:overflow-visible bg-green-300 lg:relative absolute lg:top-0 top-[60vh] right-0'>
                <img className='sm:rounded-none rounded-2xl h-full w-full object-cover' src="https://www.oska-health.com/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F23300f312f264ce6a97ab86ef3552a46%252Ff78356c464fe44f48a74e83993bceb2b&w=640&q=75" alt="" />

                <div className=' rounded-xl absolute top-1/2 left-[0%] lg:h-[21vw] h-[36vh] w-[17vh] lg:w-[10vw] -translate-x-1/2 -translate-y-1/2 '>
                <img className=' h-full w-full object-cover' src="https://www.oska-health.com/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Ffile%2Fassets%252F23300f312f264ce6a97ab86ef3552a46%252F9735e32cbe794a148c26d0c59c57769c&w=1920&q=75" alt="" />
            </div>
            </div>

            
        </div>
    </div>
  )
}

export default Hero