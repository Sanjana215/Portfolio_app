import React from 'react';
import { Box, VStack, HStack, Icon, Text } from "@chakra-ui/react";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { Link } from 'react-scroll';
import { Slide } from "react-awesome-reveal";
import "./Component.css";

const Sidebar = () => {
  return (
    <Box 
      position="fixed"
      display={{ base: "none", md: "flex" }}
      left={0}
      top={0}
      height="100vh"
      background="linear-gradient(135deg, #0F172A, #1E293B)"
      color="white"
      paddingY={5}
      width="260px" 
      flexDirection="column"
      alignItems="center"
      boxShadow="lg"
      
    >
      <VStack spacing={6} mt={8} width="100%" align={'start'}>
        <Slide triggerOnce>
          <HStack padding={3}>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              activeClass="active" 
              className="nav-link" 
              spy={true}
            >
              <Icon as={RiProfileLine} boxSize={7} color="blue.400" />
              <Text fontSize="1.2rem" fontWeight="bold">Profile</Text>
            </Link>
          </HStack>

          <HStack padding={3}>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              activeClass="active" 
              className="nav-link" 
              spy={true}
            >
              <Icon as={GiSkills} boxSize={7} color="green.400" />
              <Text fontSize="1.2rem" fontWeight="bold">Skills</Text>
            </Link>
          </HStack>

          <HStack padding={3}>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              activeClass="active" 
              className="nav-link" 
              spy={true}
            >
              <Icon as={AiOutlineProject} boxSize={7} color="red.400" />
              <Text fontSize="1.2rem" fontWeight="bold">Projects</Text>
            </Link>
          </HStack>

          <HStack padding={3}>
            <Link 
              to="education" 
              smooth={true} 
              duration={500} 
              activeClass="active" 
              className="nav-link" 
              spy={true}
            >
              <Icon as={MdCastForEducation} boxSize={7} color="orange.200" />
              <Text fontSize="1.2rem" fontWeight="bold">Education</Text>
            </Link>
          </HStack>

          <HStack padding={3}>
            <Link 
              to="experience" 
              smooth={true} 
              duration={500} 
              activeClass="active" 
              className="nav-link" 
              spy={true}
            >
              <Icon as={MdOutlineWorkOutline} boxSize={7} color="purple.400" />
              <Text fontSize="1.2rem" fontWeight="bold">Experience</Text>
            </Link>
          </HStack>

          <HStack padding={3}>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              activeClass="active" 
              className="nav-link" 
              spy={true} 
              offset={-20}
            >
              <Icon as={BiSolidContact} boxSize={7} color="orange.400" />
              <Text fontSize="1.2rem" fontWeight="bold">Contact</Text>
            </Link>
          </HStack>
        </Slide>
      </VStack>
    </Box>
  );
};

export default Sidebar;
