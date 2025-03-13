import { Box, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
import { Fade, Slide, Zoom } from "react-awesome-reveal";


const Experience = () => {
  return (
    <>
    
    <Box 
      w={{ base: "90%", md: "70%", lg: "60%" }} 
       
      p={6}
      marginTop={'30px'} 
      bg="white" 
      boxShadow="lg" 
      borderRadius="lg"
      backgroundColor={'#fafaf8'}
      id="experience"
      marginBottom={'30px'}
      marginLeft={{base:'20px',md:'50px',lg:'380px'}}
      
    >
      <Fade delay={100} duration={500}>
      <Heading size={{base:'3xl',md:'4xl'} }textAlign={'center'} color={'#138781'} boxShadow={'0px 1px 2px 0px rgba(0, 0, 0, 0.12)'}>Experience</Heading>
      </Fade>

      <VStack align="start" spacing={3}>
        <Icon as={MdWork} boxSize={8} color="#138781" />
        <Heading size="md">Customer Success Intern</Heading>
        <Text fontSize="sm" color="gray.500">
          Capillary Technology | Jan 2025 - Present
        </Text>
        <Text fontSize="md">
          Assisting customers in resolving technical issues, improving customer engagement, and ensuring seamless onboarding.
        </Text>
      </VStack>
    </Box>
    </>
  );
};

export default Experience;
