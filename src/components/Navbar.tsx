//   import React from 'react'
//   import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
//   import { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }
//   return (
//     <div className='container pt-8'>
//         <div className='flex justify-between items-center'>
//             <div className='text-xl font-medium'>Syed</div>
//             <ul className='flex gap-10 lg:gap-16 md:flex'>
//               <li className='menuLink'><a href="#hero">Home</a></li>
//               <li className='menuLink'><a href="#about">About</a></li>
//               <li className='menuLink'><a href="#projects">Projects</a></li>
//               <li className='menuLink'><a href="#skills">Skills</a></li>
//               <li className='menuLink'><a href="#contact">Contact</a></li>
//             </ul>
//               {/* <div className='' onClick={toggleMenu}> */}
//                 {/* {isMenuOpen ? <AiOutlineClose size={30} /> : */}
//                 {/* <AiOutlineMenu size={30} /> */}
//                 {/* } */}
//               </div>
//         </div>

//          {/* {isMenuOpen && (
//             <ul className='flex flex-col gap-4 mt-4 md:hidden'>
//               <li className='menuLink'>
//                 <a href="#hero" onClick={toggleMenu}>Home</a>
//               </li>
//               <li className='menuLink'>
//                 <a href="#about" onClick={toggleMenu}>About</a>
//               </li>
//               <li className='menuLink'>
//                 <a href="#projects" onClick={toggleMenu}>Projects</a>
//               </li>
//               <li className='menuLink'>
//                 <a href="#skills" onClick={toggleMenu}>Skills</a>
//               </li>
//               <li className='menuLink'>
//                 <a href="#contact" onClick={toggleMenu}>Contact</a>
//               </li>
//             </ul> */}
//     // </div>
//   )
// }

// export default Navbar;



import React from 'react'

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Syed</div>
            <ul className='flex gap-10 lg:gap-16 md:flex'>
              <li className='menuLink'><a href="#hero">Home</a></li>
              <li className='menuLink'><a href="#about">About</a></li>
              <li className='menuLink'><a href="#projects">Projects</a></li>
              <li className='menuLink'><a href="#skills">Skills</a></li>
              <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
          
        </div>

    </div>
  )
}

export default Navbar;