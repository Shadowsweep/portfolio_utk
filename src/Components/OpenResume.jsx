import React from 'react';

/**
 * A component that renders a button to open the resume in a new tab.
 *
 * @param {string} pdfPath - The path to the PDF file.
 * @return {JSX.Element} - The JSX element representing the open button.
 */
const OpenResumeButton = ({ pdfPath }) => {
  const handleOpenResume = () => {
    window.open(pdfPath);
  };

  return (
    <button 
    style={{
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft:'10px',
        backgroundColor: 'yellowgreen',
        // color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
      }}
    onClick={handleOpenResume}>Open Resume</button>
  );
};

export default OpenResumeButton;