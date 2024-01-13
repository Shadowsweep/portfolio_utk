import React from 'react'






const HeaderItem = ({name,Icon,onClick}) => {
  return (
    // <div>HeaderItem</div>
    <div className='text-white flex  items-center gap-3 
     text-[17px] font-semibold cursor-pointer  hover:underline underline-offset-8 '  >
   
     <Icon/>
    <h2  className='hidden md:block'  >{name}</h2>
    </div>
    )
}

export default HeaderItem