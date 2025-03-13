import React from 'react';
import { Box, Flex, Heading, Button, VStack } from "@chakra-ui/react";
import TypeWriterEffect from 'react-typewriter-effect';


const Profile = () => {
  return (
    <Box 
      backgroundColor={'black'} 
      color={'white'} 
      padding={'20px'} 
      height={{ base: '60vh', md: '50vh' }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      
        <VStack spacing={4} textAlign="center">
          <Heading size={'3xl'} fontFamily={'monospace'} color={'aliceblue'}>
            Hi👋, I'm a
          </Heading>
          {/* Set a fixed height to prevent movement */}
          <Box 
            fontSize={{ base: "2em", sm: "1.8em", md: "1.8em", lg: "2.5em" }} 
            fontWeight="500" 
            fontFamily="monospace"
            color="#fcba29"
            height="30px" /* Adjust based on text size */
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TypeWriterEffect
              startDelay={2000}
              cursorColor="#fcba29"
              multiText={[
                "Software Developer",
                "MERN Stack Developer"
              ]}
              typeSpeed={30}
              multiTextLoop={true}
            />
          </Box>
        </VStack>
      

      {/* Keep buttons fixed */}
      <Box marginTop={'50px'} position="relative">
       
          <Flex 
            gap={4} 
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
          >
            <a href="https://api.whatsapp.com/send?phone=8431058290" target="_blank" rel="noopener noreferrer">
              <Button 
                bg="blue.500"
                color="white"
                width="150px"
                fontSize="large"
                _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
              >
                Hire Me
              </Button>
            </a>

            
            <Button 
              as="a"
              href="https://drive.google.com/file/d/1CypdnTTCOLtAZEZo8V4IA47ncRM9ZIjs/view?usp=drivesdk"
              bg="blue.500"
               target="_blank"
              color="white"
              width="150px"
              fontSize="large"
              textAlign="center"
              _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
            >
              Resume
            </Button>
          </Flex>
        
      </Box>
    </Box>
  );
};

export default Profile;
