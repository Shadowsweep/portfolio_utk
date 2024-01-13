import React from 'react'
import logo from '../assets/images/logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2"

import {HiPlus , HiDotsVertical} from "react-icons/hi"
import HeaderItem from './HeaderItem'

function Header() {
    const menu=[
        // {
        //     name: "HOME",
        //     icon: HiHome  
        // },   
     
          // { name: "SEARCH", icon: HiMagnifyingGlass  },
          // { name: "WATCHLIST", icon: HiPlayCircle },
          // { name: "ORIGINALS", icon: HiTv },
          { name: "PORTFOLIO", icon: HiPlayCircle },
          // { name: "SERIES", icon: HiTv },
        

        
        
        // console.log(elements);
  
    ] 
    const handleClick = (event) => {
      // Handle the click event for the SEARCH icon
      console.log('SEARCH clicked');
    };
    



  return (
    
    <div  className='flex items-center justify-between  '   >   
    <div className='flex gap-8 items-center justify-between p-5'   >
  <a href="https://www.linkedin.com/in/utkarsh-gupta-075908223/" target="_blank">
    <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
  </a> 
  {/* <div  className='hidden  md:flex gap-8' >
  { menu.map((item) => (
        <HeaderItem name={item.name} Icon={item.icon}  />
    ))}
    </div> */}
    <div  className='hidden  md:flex gap-8' >
  {/* { menu.map((item) => (
        <HeaderItem name={item.name} Icon={item.icon} onClick={(event) => handleClick()} />
    ))} */}

    <HeaderItem name={'PORTFOLIO'} Icon={HiPlayCircle}  style={{fontSize:'100px'}}  />
    </div>

  <div  className=' flex  md:hidden gap-8' >
  { menu.map((item,index) => index<1&&(
        <HeaderItem name={''} Icon={item.icon}  />
    ))}
    </div>
    

   
    {/* <div  className='md:hidden' >
  { menu.map((item) => (
        <HeaderItem name={''} Icon={item.icon}  />
    ))}
    </div> */}

    </div>
   
    </div>
   
  )
    }
export default Header