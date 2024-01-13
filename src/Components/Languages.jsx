import React, { useRef,useState,useEffect } from 'react';
import c from './../assets/images/clo.jpeg'
import cpp from './../assets/images/cppl.jpeg'
import python from './../assets/images/pythonl.jpeg'
import django from './../assets/images/djl.jpeg'
import react from './../assets/images/reactt.png'
import js from './../assets/images/jsl.png'
import html from './../assets/images/htmll.jpeg'
import css from './../assets/images/cssl.png'
import mysql from './../assets/images/mysq.png'
import mui from './../assets/images/mui.png'
import tailwind from './../assets/images/twq.jpeg'

import starwarV from './../assets/videos/star-wars.mp4'
import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalGeogrphicV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'
import videol from './../assets/videos/videoo.mp4'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'


const Languages = ({item}) => {
  const videoRef = useRef(null);
  const elementRef = useRef();

  
  const [isHovered, setIsHovered] = useState(false);

  // const handleHover = () => {
  //   setIsHovered(true);
  // };

  // const handleLeave = () => {
  //   setIsHovered(false);
  // };

  // useEffect(() => {
  //   const video = videoRef.current;

  //   if (video) {
  //     if (isHovered) {
  //       video.play();
  //     } else {
  //       video.pause();
  //     }
  //   }
  // }, [isHovered]);


  const handleHover = () => {
    console.log("1")
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      // videoRef.current.currentTime = 0;
    }}
    const sliderRight = (element) => {
      element.scrollLeft+=1250
    }
  
    const sliderLeft = (element) => {
      element.scrollLeft-=1250
    }
  const Languageslist =[
    { id:1,
      image:c,
      video:pixarV
    },
    { id:2,
      image:cpp,
      video:pixarV

    },
    {
        id:3,
        image:python,
        video:disneyV
    },
    {
        id:4,
        image:django,
        video:marvelV
    },
    {
      id:5,
      image:react,
      video:starwarV 
  },
  {
      id:6,
      image:mui,
      video:videol
  },
  {
    id:7,
    image:mysql,
    video:nationalGeogrphicV
},
    {
        id:8,
        image:html,
        video:starwarV
    },
    {
        id:9,
        image:css,
        video:videol
    },
    {  id:10,
       image:js,
       video:starwarV
    },
    
   
  ]
 

  return (
    < div style={{  marginBottom:'100px',marginTop:'100px' , width:'97vw',display: 'flex', flexDirection: 'column' }}>
    <h1 style={{marginLeft:'10px'}}>Languages :</h1>
    {/* <HiChevronLeft className='  hidden md:block text-white text-[30px] absolute scroll-smooth mx-8 mt-[80px] cursor-pointer  ' onClick={() => sliderLeft(elementRef.current)} style={{ color: '#fff' ,fontSize:'45px',fontStyle:'bold' }} />
        <HiChevronRight className=' hidden md:block  text-white text-[30px] absolute  scroll-smooth mx-8 mt-[80px] cursor-pointer right-0  ' onClick={() => sliderRight(elementRef.current)} style={{ color: '#fff',fontSize:'45px' ,fontStyle:'bold'}} />
  */}
    <div style={{  width: '100vw' }}>
   
  <div className='flex gap-2 mt-10 md:gap-5 p-2 px-5 md:px-16 overflow-x-auto   scrollbar-none '>
    {Languageslist.map((item) => (
      <div key={item.id} className='flex-shrink-0 border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer  shadow-xl shadow-black ' style={{ width: '250px' }}>
        <img src={item.image} alt={item.name} className='w-full z-[1]' style={{ height: '140px', width: '100%', borderRadius: '10px' }} />
        <video src={item.video} className='absolute top-0 z-0 opacity-0 hover:opacity-50 transition-all duration-300 ease-in-out'
         autoPlay loop playsInline style={{ height: '140px', width: '100%', borderRadius: '10px' }} 
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
        // onMous={handleHover}
        ref={videoRef}
        />
      </div>
    ))}
  </div>
</div>
</div>
  )
}

export default Languages