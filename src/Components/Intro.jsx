import React, { useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import profileimg from '../assets/images/ss.png'
import jsPDF from 'jspdf';
import Modal from 'react-modal';
import resumeImg from '../assets/images/resume.png'
import resumePdf from '../assets/images/resume.pdf'
import DownloadButton from './DownloadButton';
import OpenResumeButton from './OpenResume';

const Intro = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeEffect] = useTypewriter({
    words: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Learner', 'Enthusiast'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,

  })
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (


    <div className="ml-10 flex-1" style={{  display: 'flex', justifyContent: 'space-between',marginTop:'100px',marginBottom:'100px' }}>
      <div >
        <h1 className="hidden sm:block">
          I'm a <span className="text-10xl">&nbsp;{typeEffect}</span>
        </h1>
        <div></div>
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2">
            <div className="text-2xl sm:w-3.5/4 mt-5">
              Hello, My name is
              <span className='text-3xl font-bold' >&nbsp;
                Utkarsh Gupta.
              </span>
              <div>
                I'm a passionate web developer on an exciting journey to become a skilled full-stack developer.
                I am interested in working on ideas and exploring new things.
              </div>

              {/* <button onClick={openModal}>
                Open Resume
              </button> */}
             
             <DownloadButton pdfPath={resumePdf} fileName="resume.pdf" />
             <OpenResumeButton pdfPath={resumePdf} fileName="resume.pdf" />


            </div>
          </div>
          <div className="sm:w-1/2 sm:flex   sm:mb-10 ">
            <img src={profileimg} alt="Portfolio" className="profileImage sm:ml-5 sm:mt-10"
              style={{
                borderRadius: '50%', height: '260px', width: '290px', borderWidth: '15px',
                // borderImage: 'linear-gradient(to right, lightgreen, darkblue) 1', 
                borderColor: '#4FFBDF',
                overflow: 'hidden'
              }}
            />    </div>
        </div>
      </div>
      
    </div>
  )
}

export default Intro