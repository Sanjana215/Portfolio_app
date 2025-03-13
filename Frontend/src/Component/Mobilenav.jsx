import React, { useState } from 'react';
import { Box, HStack, Icon, VStack, Text } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineMenuUnfold, AiOutlineProject } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlineWorkOutline, MdCastForEducation } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { Link } from 'react-scroll';
import "./Component.css";

const Mobilenav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null); 

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOptionClick = (section) => {
    setActive(section);
    setOpen(false);
  };

  return (
    <Box 
      className='mobile' 
      background="linear-gradient(135deg, #1E293B, #0F172A)" 
      color="white"
      padding="15px"
      boxShadow="lg"
      position={'fixed'}
      width={'100%'}
      zIndex={'1'}
    >
      <VStack align="start">
        <HStack 
          justify="space-between" 
          width="100%" 
          paddingX="10px"
        >
          <Icon 
            as={open ? AiOutlineMenuUnfold : AiOutlineMenu} 
            boxSize={7} 
            cursor="pointer" 
            onClick={handleClick} 
            color="white"
            _hover={{ color: "#fcba29" }}
          />
          <Text fontSize="lg" fontWeight="bold" color={'#fcba29'}>
            My Portfolio App
          </Text>
        </HStack>

        {open && (
            <Box 
              position="absolute"   // Make it overlap elements
              top="50px"            // Adjust as needed to align below navbar
              left="0"
              width="60%" 
              padding="10px"
              background="linear-gradient(135deg, #1E293B, #0F172A)" // Optional for better visibility
              boxShadow="lg"
              borderRadius="5px"
            >

            {[
              { to: "profile", icon: RiProfileLine, color: "blue.300", label: "Profile" },
              { to: "skills", icon: GiSkills, color: "green.300", label: "Skills" },
              { to: "projects", icon: AiOutlineProject, color: "red.300", label: "Projects" },
              { to: "education", icon: MdCastForEducation, color: "orange.300", label: "Education" },
              { to: "experience", icon: MdOutlineWorkOutline, color: "purple.300", label: "Experience" },
              { to: "contact", icon: BiSolidContact, color: "yellow.300", label: "Contact" }
            ].map(({ to, icon, color, label }, index) => (
              <HStack 
                key={index} 
                padding="8px" 
                borderRadius="5px" 
                _hover={{ 
                  background: "#fcba29", 
                  color: "black", 
                  transition: "0.3s ease-in-out"
                }}
                background={active === to ? "#fcba29" : "transparent"}  
                color={active === to ? "black" : "white"}  
                transition="0.3s ease-in-out"
                cursor="pointer"
                width="100%"
                
              >
                <Link 
                    to={to} 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    offset={-50}
                    className="nav-link"
                    style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}
                    onClick={() => handleOptionClick(to)}
                  >
                    <Icon as={icon} boxSize={6} color={color} />
                    <Text>{label}</Text>
                  </Link>

              </HStack>
            ))}
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export default Mobilenav;
