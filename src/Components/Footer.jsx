import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import bgImg from "./../assets/images/foo.png"
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/youtube'
import 'react-social-icons/instagram'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'
import qrImg from "./../assets/images/qr.png"


const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(3),
    // backgroundColor: "transparent", /* Set background to transparent */
   
     /* Remove any background images */
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "30px",
    fontFamily: 'system-ui, sans-serif',
    color: "#fff",
    fontWeight: "400",
    cursor: "pointer",
    "&:hover": {
      color: "yellowgreen",
    },
  }));

  const containerStyle = {
    padding: '10px', // Add padding to the container as needed
    border: '2px solid #3498db', // Border color (change #3498db to your preferred color)
    borderRadius: '10px', // Border radius for the container
    display: 'inline-block', // Make sure the container only takes as much space as needed
    marginLeft:'20%'
  };

  const imageStyle = {
    height: '160px',
    width: '160px',
  };

  return (
    <Box   sx={{
      py: 10,
    //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})`,
    //   backgroundSize: 'cover',
      backgroundImage:`url(${bgImg})` ,
    //   backgroundSize: 'cover', // Use only 'cover'
      backgroundPosition: 'left',
      backgroundRepeat:'no-repeat',
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)', /* Add the black shadow */

      '@media (max-width: 768px)': {
        backgroundImage: 'none',
      },
    }}>
      <CustomContainer>
        {/* <CustomContainer> */}
   <Box></Box>
            
           

          <Box>
            <Typography
              sx={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: "20px",
                color: "#fff",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Resources
            </Typography>
            <SocialIcon url="www.github.com" style={{ height: 40, width: 40 , marginBottom:'10px' ,marginRight:'10px' }} />
            <a href="https://github.com/Shadowsweep" target="_blank"  >
            <FooterLink>Github</FooterLink>
            </a>
            <br />
            <SocialIcon url="www.linkedin.com" style={{ height: 40, width: 40 , marginBottom:'10px' ,marginRight:'10px'}} />
            <a href="www.linkedin.com/in/utkarsh-gupta-075908223" target="_blank"  >
            <FooterLink>LinkedIn</FooterLink>
            </a>
            <br />
            <SocialIcon url="www.instagram.com" style={{ height: 40, width: 40 , marginBottom:'10px',marginRight:'10px' }} />
            <a href="https://www.instagram.com/utkarsh.gupta1401?igshid=ZDdkNTZiNTM%3D" target="_blank"  >
            <FooterLink>Instagram</FooterLink>
           </a> 
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: "20px",
                color: "#fff",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Company
            </Typography>
            <SocialIcon url="www.youtube.com" style={{ height: 40, width: 40 , marginBottom:'10px' ,marginRight:'10px'}} />
            <a href="https://www.youtube.com/@techunsatisfied" target="_blank"  >
            <FooterLink>TechUnsatisfied</FooterLink>
            </a>
            <br />
            {/* <FooterLink>Terms of use</FooterLink> */}
            
           
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: "20px",
                color: "#fff",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Contact Me By clicking or scanning 
            </Typography>
            {/* <SocialIcon url="www.email.com" style={{ height: 40, width: 40 , marginBottom:'10px' ,marginRight:'10px'}} />
            <a href="https://lambent-salamander-48ba6c.netlify.app/contactme" target="_blank"  >
            <FooterLink>Contact Me </FooterLink>
            </a> */}
            {/* <br /> */}
            <SocialIcon url="www.email.com" style={{ height: 40, width: 40 , marginBottom:'10px' ,marginRight:'10px'}} />
            <a href="mailto:utkarshhg911@gmail.com?subject=Subject%20Here&body=Hello%20there!">
            <FooterLink>
              Click here
            </FooterLink>
            </a>
            <br />
            <FooterLink style={{   marginLeft:'40%'}}>
              Or 
            </FooterLink>
            <br />
            {/* <img src={qrImg} style={{ height: 150, width: 150 ,}}  target="_blank" /> */}
            <div style={containerStyle}>
                 <img src={qrImg} alt="QR Code" style={imageStyle} />
    
            </div>

            

            

            {/* <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox> */}
          </Box>
        {/* </CustomContainer> */}
      </CustomContainer>
    </Box>
  );
};

export default Footer;