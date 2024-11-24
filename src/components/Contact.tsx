import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                    Feel free to reach out if you have any questions, need help with a project, or just want to say hi.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    < MdOutlineMailOutline size={30}/> abcd@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <BsTelephone size={30}/> +92-333-3792949
                </div>
            </div>
            <div className='space-y-8'>
                <div className='rounded-xl flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='rounded-xl h-[40px] pl-[20px] bg-transparent border border-accent'
                    id='name' />
                </div>
                <div className='rounded-xl flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='rounded-xl h-[40px] pl-[20px] bg-transparent border border-accent'
                    id='email' />
                </div>
                <div className='rounded-xl flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea  
                    className='rounded-xl bg-transparent pl-[20px] pt-4 border border-accent'
                    id='msg' rows={8}>
                        </textarea>
                </div>
                <button className='bg-accent p-2 rounded-2xl px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact