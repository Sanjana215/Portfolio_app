import React from 'react'
import { Box, Text, VStack, HStack, Heading, SimpleGrid } from "@chakra-ui/react";
import techstack from "../utils/techstack.js";
import { Card } from "@chakra-ui/react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";



const Skills = () => {
  return (
    <Box paddingTop={'30px'} id="skills">
      
      {/* Faster Zoom for Title */}
      
        <Heading size={{base:'3xl',md:'4xl'}} textAlign={'center'} color={'#138781'} boxShadow={'0px 1px 2px 0px rgba(0, 0, 0, 0.12)'}>
          Technical Skills
        </Heading>
      

      {/* Faster Fade for Description */}
      
        <Text 
          textAlign={'center'} 
          fontSize="lg" 
          color="gray.800" 
          paddingTop={'30px'} 
          paddingLeft={{ base: '0px', md: '150px' }}
        >
          👉 including programming languages, frameworks, databases, front-end and backend tools.
        </Text>
      

      {/* Faster Slide Animation for Skills */}
      <SimpleGrid
        gap={1} 
        marginLeft={{ base: 'auto', md: '280px' }}
        flexWrap="wrap" 
        justifyContent="center"
        marginTop={'30px'}
        columns={{base:'2',md:'3'}}
        
      >
        
  {techstack.map((ele) => (
    <Slide direction='up'>
    <Card.Root
      key={ele._id}
      size="sm"
      margin="6px"
      minW={{ base: "140px", sm: "180px", md: "220px" }}
      maxW="250px"
      height={{ base: "100px", sm: "120px" }}
      borderRadius="12px"
      background="#fafaf8"
      backdropFilter="blur(10px)"
      boxShadow="md"
      transition="all 0.2s ease-in-out"
      border="1px solid rgba(255, 255, 255, 0.3)"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0px 4px 20px rgba(19, 135, 129, 0.5)",
      }}
      textAlign="center"
      padding="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width={{ base: "35px", md: "45px" }}
        height={{ base: "35px", md: "45px" }}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor={ele.color}
        marginBottom="6px"
        boxShadow="md"
      >
        <ele.icon size={{ base: "22", md: "28" }} color="white" />
      </Box>
      <Heading 
        size={{ base: "sm", md: "md" }} 
        fontWeight="bold" 
        color="gray.800"
        paddingBottom="4px"
      >
        {ele.name}
      </Heading>
    </Card.Root>
    </Slide>
  ))}



      </SimpleGrid>
    </Box>
  );
};

export default Skills;
