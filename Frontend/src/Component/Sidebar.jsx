import React from 'react';
import { Box, Button, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { Link } from 'react-scroll';
import { Fade, Slide, Zoom } from "react-awesome-reveal";


import "./Component.css";


const Sidebar = () => {
  const [isopen, setIsOpen] = React.useState(true);

  const Sidebarfunc = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box className='sidebar'>
      <Box background="linear-gradient(135deg, #0F172A, #1E293B)" color={"white"} className={isopen ? 'opensidebar' : 'closesidebar'}>
        <Button className={'arrow'} onClick={Sidebarfunc}>
          {isopen ? <SlArrowLeft /> : <SlArrowRight />}
        </Button>
        
        <VStack className='vstack'>
          {isopen && (
                
                <Zoom>

                
            
               <Box className='image' >
              <Image src="images/sanjanaPhoto.jpg" />
            </Box>
            </Zoom>
          )}

         

          <Box className={!isopen && 'close-menu'}>
          <Slide triggerOnce>
            <HStack padding={2}>
              <Link to="profile" smooth={true} duration={500} activeClass="active" className="nav-link" spy="true"  >
                <Icon as={RiProfileLine} boxSize={7} color={"blue.400"} title={'profile'} />
                {isopen && <span>Profile</span>}
              </Link>
            </HStack>

            <HStack padding={2}>
              <Link to="skills" smooth={true} duration={500} activeClass="active" className="nav-link" spy="true"  >
                <Icon as={GiSkills} boxSize={6} color="green.400" title={'skills'} />
                {isopen && <span>Skills</span>}
              </Link>
            </HStack>

            <HStack padding={2}>
              <Link to="projects" smooth={true} duration={500} activeClass="active" className="nav-link" spy="true"  >
                <Icon as={AiOutlineProject} boxSize={6} color="red.400" title={'projects'} />
                {isopen && <span>Projects</span>}
              </Link>
            </HStack>

            <HStack padding={2}>
              <Link to="education" smooth={true} duration={500} activeClass="active" className="nav-link" spy="true"  >
                <Icon as={MdCastForEducation} boxSize={6} color="orange.200" title={'education'} />
                {isopen && <span>Education</span>}
              </Link>
            </HStack>

            <HStack padding={2} >
              <Link to="experience" smooth={true} duration={500} activeClass="active" className="nav-link" spy="true"  >
                <Icon as={MdOutlineWorkOutline} boxSize={6} color="purple.400" title={'experience'} />
                {isopen && <span>Experience</span>}
              </Link>
            </HStack>

            <HStack padding={2}>
              <Link to="contact" smooth={true} duration={500} activeClass="active" className="nav-link" spy="true" offset={-20} >
                <Icon as={BiSolidContact} boxSize={6} color="orange.400" title={'contact'} />
                {isopen && <span>Contact</span>}
              </Link>
            </HStack>

           </Slide>
           
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
