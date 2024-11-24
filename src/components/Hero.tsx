import React from 'react'
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/logo2.png)] bg-cover'
    style={{ backgroundSize : "35%", backgroundPosition: "left 100px top 100px"}}
    >
        <Navbar />
        <div className='container grid lg:grid-cols-2 h-[calc(100vh- 60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
            <div>
            <p className='mt-[130px] ml-[550px] text-20xl' data-aos="fade-left">Hi!</p>
              <p className='mt-[30px] ml-[550px]' data-aos="fade-left">I'm Syed Hamza</p>
              <div>
                <h1 className='mt-[20px] ml-[550px] font-medium text-[#08e95e]'>
                  <Typewriter
                  options={{
                  strings: ['Front-end Developer!', 'UI/UX Designer!', 'Typist!'],
                  autoStart: true,
                  loop: true,
                    }}
        />
      </h1>
    </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Hero