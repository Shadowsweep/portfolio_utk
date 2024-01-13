import React from 'react';

/**
 * A component that renders a button to download a PDF file.
 *
 * @param {string} pdfPath - The path to the PDF file.
 * @param {string} fileName - The desired file name for the downloaded PDF file.
 * @return {JSX.Element} - The JSX element representing the download button.
 */
const DownloadButton = ({ pdfPath, fileName }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(pdfPath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <button
    style={{
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor: 'yellowgreen',
        // color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
      }}
    
    onClick={handleDownload}> Download Resume </button>
  );
};

export default DownloadButton;