import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="fade-left">
          <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-gray-500 pt-2'>
          With a strong foundation in web development, I specialize in HTML, CSS, and JavaScript, consistently focusing on creating seamless, responsive user experiences. My expertise extends to frameworks like React and Next.js, where I craft interactive, performance-driven applications that meet both client and user needs. I also leverage Tailwind CSS for streamlined, scalable styling, allowing me to maintain clean and maintainable codebases.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='spce-y-2'>
                <h2 data-aos="fade-left">Html</h2>
                <h2 data-aos="fade-left">CSS</h2>
                <h2 data-aos="fade-left">JavaScript</h2>
                <h2 data-aos="fade-left">Typist</h2>
            </div>
            <div className='spce-y-2'>
                <h2 data-aos="fade-left">Nextjs</h2>
                <h2 data-aos="fade-left">Tailwind</h2>
                <h2 data-aos="fade-left">Reactjs</h2>
                <h2 data-aos="fade-left">Ms Office</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills