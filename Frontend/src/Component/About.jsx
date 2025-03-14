import React from 'react';
import { Box, Heading, Text, Image, VStack, Stack } from "@chakra-ui/react";
import { Bounce} from "react-awesome-reveal";


const About = () => {
  return (
    
    <Box 
      id="about"
      marginX={{base:"auto", md:'180px', lg:'280px'}} // Adjusted for ThinkPad
      marginTop={'40px'} 
      padding={'2px'} 
      backgroundColor={'#fafaf8'} 
      borderRadius={'20px'} 
      boxShadow={'0px 1px 2px 0px rgba(0, 0, 0, 0.12)'}
      width={{ base: '90%', md: '85%', lg: '75%' }} // Adjusted width for ThinkPad
      paddingX={{ base: '10px', md: '30px' }} 
    >
      <Bounce damping={'0.5'} >
      <Stack 
        direction={{ base: 'column', md: 'row' }} 
        marginTop={'10px'}
        align="center"
        spacing={{ base: '20px', md: '20px', lg: '30px' }}
        paddingBottom={{base:'0px',md:'20px', lg:'30px'}}
        paddingTop={{base:'0px',md:'10px'}}
       
      >
        <Image 
          src='images/about.webp' 
          height={{ base: '160px', md: '230px', lg: '270px' }} 
          width={{ base: '100%', md: '400px', lg: '500px' }} 
          borderRadius={'10px'}
          boxShadow="lg"
          objectFit={'cover'}
        />

        <VStack 
          align="center" 
          spacing="10px" 
          textAlign="center" 
          maxW="100%" 
          width="100%" 
          paddingX={{ base: '10px', md: '15px', lg: '0px' }}
        >
          <Heading 
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} // Adjusted for ThinkPad
            color="black"
            fontFamily="sans-serif"
          >
            About Me
          </Heading>

          <Text 
            as="span"
            fontSize={{ base: "md", md: "md", lg:"lg" }} 
            color="gray.800" 
            fontFamily="sans-serif"
            lineHeight="1.8"
            wordBreak="break-word"
            width="100%" 
            paddingLeft={{ base: '0px', md: '10px', lg: '20px' }}
            textAlign={'justify'}
          >
            I am a passionate <Text as="span" color="#FACC15" fontWeight="bold">Software Developer </Text> 
            with experience in <Text as="span" color="#FACC15" fontWeight="bold">MERN Stack</Text>. 
            I love solving problems and building efficient, scalable applications. Beyond coding, I enjoy 
            <Text as="span" color="#FACC15" fontWeight="bold"> exploring new technologies, problem-solving, 
            and contributing to open-source projects</Text>. My goal is to deliver impactful solutions that 
            enhance user experience and drive innovation. I enjoy working on real-world challenges, 
            collaborating with teams, and bringing ideas to life.
          </Text>
        </VStack>
      </Stack>
      </Bounce>
    </Box>
   
  );
};

export default About;
