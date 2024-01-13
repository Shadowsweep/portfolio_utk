import React,{useEffect} from 'react'
import img1 from '../assets/images/Dashboard.png'
import img2 from '../assets/images/Djangomessenger.png'
import img5 from '../assets/images/Medassist.png'
import img3 from '../assets/images/Ytclone.png'
import img4 from '../assets/images/qrimg.png'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { useRef } from 'react'

const screenWidth = window.innerWidth;
function Slider(){
  const elementRef = useRef();

  const ImageGallery = ({ imagePaths }) => {
    return (
    
      <div style={{width:'97vw'}}  >
        <HiChevronLeft className='  hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer  ' onClick={() => sliderLeft(elementRef.current)} style={{ color: 'yellowgreen' ,fontSize:'60px' }} />
        <HiChevronRight className=' hidden md:block  text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0  ' onClick={() => sliderRight(elementRef.current)} style={{ color: 'yellowgreen',fontSize:'60px' }} />
      <div  className='flex  overflow-x-auto w-full px-16  scrollbar-none  md:h-[310px] scroll-smooth transition-all duration-100  ease-in ' ref={elementRef} >
        {imagePaths.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Image ${index + 1}`}
            style={{ width: '100vw',  objectFit: 'cover',marginLeft:'260px',marginRight:'285px' }}
            className="object-left-top  w-full mr-5 rounded-md scrollbar-none hover:border-[4px] border-gray-400 " 
          />
        ))}
      </div>
      <div>

      </div>
      <br />
      </div>
      
    );
  };

  const sliderRight = (element) => {
    element.scrollLeft+=1250
  }

  const sliderLeft = (element) => {
    element.scrollLeft-=1250
  }



  const imagePaths = [img1, img5, img3];
  return(
    <div className="hidden md:block" >
      {/* <h1>Image Gallery</h1> */}
      <ImageGallery imagePaths={imagePaths} />
    </div>
  )
}

export default Slider