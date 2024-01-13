import spiv from "./../assets/images/spaceinvader.png"
import libmanagement from "./../assets/images/librarymanegement.png"
import carrental from "./../assets/images/carrental1.png"
import houserental from "./../assets/images/realstate.png"
import medassist from "./../assets/images/medassistpro.png"
import mailsystem from "./../assets/images/mailsystem.png"
import qrgen from "./../assets/images/qrimg.png"
import ytclone from "./../assets/images/Ytclone.png"
import djfood from "./../assets/images/djangofood.png"
import djmessage from "./../assets/images/Djangomessenger.png"
import React,{useEffect,useRef} from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'


const Projects = () => {
  const elementRef = useRef();

  const sliderRight = (element) => {
    element.scrollLeft+=1250
  }

  const sliderLeft = (element) => {
    element.scrollLeft-=1250
  }
  const handleImageSpivClick = () => {
    window.open("https://drive.google.com/file/d/14-1a5CohjuPuZJsff3Q8SguIjEDdY_sx/view?usp=sharing","_blank")
  };

  const handleImageLibClick = () => {
    window.open("https://drive.google.com/file/d/1DBir6yrxU6B18SgYyefjewi2C3Y_2s8O/view?usp=sharing","_blank")
  };
  
  const handleImageCarrentalClick = () => {
    window.open("https://www.linkedin.com/posts/utkarsh-gupta-075908223_codingjourney-webdevelopment-django-activity-7143125683207131136-sasY?utm_source=share&utm_medium=member_desktop","_blank")
  };

  const handleImagemedassistClick = () => {
    window.open("https://www.linkedin.com/posts/utkarsh-gupta-075908223_medassistproject-react-djangorestframework-activity-7133156947406508032-I4SH?utm_source=share&utm_medium=member_desktop","_blank")
  };

  const handleImagemailsystemClick = () => {
    window.open("https://www.linkedin.com/posts/utkarsh-gupta-075908223_automatedemailsystem-jobapplicationmadeeasy-activity-7100121279130669056-TwnE?utm_source=share&utm_medium=member_desktop","_blank")
  };

  const handleImageqrgenClick = () => {
    window.open("https://www.linkedin.com/posts/utkarsh-gupta-075908223_qrcode-django-react-activity-7131317641633304577-zVza?utm_source=share&utm_medium=member_desktop","_blank")
  };

  const handleImageytcloneClick = () => {
    window.open("https://www.linkedin.com/posts/utkarsh-gupta-075908223_techyt-youtubeclone-webdevelopment-activity-7126596418445729792-WSfD?utm_source=share&utm_medium=member_desktop","_blank")
  };
  
  const handleImagedjmessageClick = () => {
    window.open("https://www.linkedin.com/posts/utkarsh-gupta-075908223_autowhatsappsender-djangorestapi-automation-activity-7097929018095628289-jZ3e?utm_source=share&utm_medium=member_desktop","_blank")
  };

  const handleImagedjfoodClick = () => {
    window.open("https://drive.google.com/file/d/1c-kfSqR5fEPbcS0E8k7oQFoS2iNcogE7/view?usp=sharing","_blank")
  };

  const handleImagehouserentalClick = () => {
    window.open("https://drive.google.com/file/d/1xKt7wF5ru89h1vVSzxF_GUrjJNnTyAJ9/view?usp=sharing","_blank")
  };

  return (
    <div style={{marginBottom:'100px',marginTop:'100px'}}>
       <h1 style={{marginLeft:'10px'}}>Projects :</h1>
       <HiChevronLeft className='  hidden md:block text-white text-[30px] absolute scroll-smooth mx-8 mt-[80px] cursor-pointer  ' onClick={() => sliderLeft(elementRef.current)} style={{ color: '#fff' ,fontSize:'45px',fontStyle:'bold' }} />
        <HiChevronRight className=' hidden md:block  text-white text-[30px] absolute  scroll-smooth mx-8 mt-[80px] cursor-pointer right-0  ' onClick={() => sliderRight(elementRef.current)} style={{ color: '#fff',fontSize:'45px' ,fontStyle:'bold'}} />
     
    <div ref={elementRef}    className=" overflow-x-auto scrollbar-none  pt-5 px-3 pb-5  ">
        
    <div className="w-[110px] md:w-[270px]  h-140px md:h-[150px] flex gap-8   "   > 
       <img src={spiv} alt="Image" onClick={handleImageSpivClick} className="rounded  hover:border-[3px] border-gray-400  hover:scale-110 transition-all duration-150 ease-in   " />
       <div className="text-center">Space Invaders</div>
       <img src={libmanagement} alt="Image" onClick={handleImageLibClick} className="rounded hover:border-[3px] border-gray-400 border-gray-400  hover:scale-110 transition-all duration-150 ease-in   "  />
       <div className="text-center">Library Mangement</div>
       <img src={carrental} alt="Image" onClick={handleImageCarrentalClick}  className="rounded hover:border-[3px] border-gray-400 border-gray-400  hover:scale-110 transition-all duration-150 ease-in " />
       <div className="text-center">Car rental</div>
       <img src={medassist} alt="Image" onClick={handleImagemedassistClick}  className="rounded  hover:border-[3px] border-gray-400 border-gray-400  hover:scale-110 transition-all duration-150 ease-in " />
       <div className="text-center">Medical Assistance</div>
       <img src={mailsystem} alt="Image" onClick={handleImagemailsystemClick} className="rounded hover:border-[3px] border-gray-400 border-gray-400  hover:scale-110 transition-all duration-150 ease-in " />
       <div className="text-center">Auto mail</div>
       <img src={qrgen} alt="Image" onClick={handleImageqrgenClick}  className="rounded hover:border-[3px] border-gray-400 border-gray-400  hover:scale-110 transition-all duration-150 ease-in " />
       <div className="text-center">Qr gnerator</div>
       <img src={ytclone} alt="Image" onClick={handleImageytcloneClick} className="rounded hover:border-[3px] border-gray-400 border-gray-400  hover:scale-110 transition-all duration-150 ease-in " />
       <div className="text-center">Youtube Clone</div>
        <img src={djmessage} alt="Image" onClick={handleImagedjmessageClick} className="rounded hover:border-[3px] border-gray-400 border-gray-400  hover:scale-110 transition-all duration-150 ease-in " />
        <div className="text-center">Whatsapp message sender</div>
       <img src={djfood} alt="Image" onClick={handleImagedjfoodClick} className="rounded hover:border-[3px] border-gray-400 border-gray-400  hover:scale-110 transition-all duration-150 ease-in " />   
       <div className="text-center">Django Food</div> 
       <img src={houserental}  alt="Image" onClick={handleImagehouserentalClick} className="roundedhover:border-[3px] border-gray-400 border-gray-400  hover:scale-110 transition-all duration-150 ease-in " />  
       <div className="text-center">House rental site</div>

    </div>
    </div>
    </div>
  )
}

export default Projects