import { 
    Fieldset, Input, Textarea, Box, HStack, Heading, IconButton, Text, Button, Image, VStack
  } from "@chakra-ui/react";
  import { Field } from "@/components/ui/field";
  import { CiLinkedin } from "react-icons/ci";
  import { FaInstagram } from "react-icons/fa";
  import { MdOutlineMail } from "react-icons/md"; 
  
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import React from "react";
  import { Fade, Slide, Zoom } from "react-awesome-reveal";
  
  const Contact = () => {
    const [formdata, setFormdata] = React.useState({
      name: "",
      email: "",
      message: ""
    });
  
    const handlechange = (event) => {
      setFormdata((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value
      }));
    };
  
    const handlesubmit = async (e) => {
      e.preventDefault();
  
      if (!formdata.name || !formdata.email || !formdata.message) {
        toast.error("Please provide all fields");
        return;
      }
  
      toast.success("Message sent successfully!");
      setFormdata({ name: "", email: "", message: "" });
      console.log("sending message");

      try {
        const response = await fetch("https://portfolio-backend-apx5.onrender.com/sendemail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)
        });

        const data = await response.json();
        console.log(data);
        setFormdata({
            name: "",
            email: "",
            message: ""
        });
    } catch (error) {
        toast.error("Failed to send message");
        console.error("Error sending message:", error);
    }

    }
  
    return (
      <>
        <ToastContainer position="top-center" autoClose={2000} />
  
        <Box 
          id="contact"  
          mx="auto" 
          bg="gray.50" 
          borderRadius="md" 
          boxShadow="md" 
          w={{ base: "90%", md: "70%", lg: "60%" }} 
          paddingY="20px"
          backgroundColor="#fafaf8"
          marginBottom={'180px'}
          marginLeft={{base:'20px',md:'50px',lg:'380px'}}
          
        >
         <Fade delay={100} duration={500}>
          <Heading size={{base:'3xl',md:'4xl'} }textAlign={'center'} color={'#138781'} boxShadow={'0px 1px 2px 0px rgba(0, 0, 0, 0.12)'}>Contact Me</Heading>
          </Fade>
  
          <HStack spacing={10} align="center" justify="center" flexWrap={{ base: "wrap", md: "nowrap" }}>
            <Image 
              src="images/contact-us.jpg" 
              alt="Contact Me" 
              boxSize={{ base: "250px", md: "370px" }}
              paddingTop={'20px'}
            />
            
            <VStack spacing={2} w={{ base: "100%", md: "50%" }} marginTop={'30px'}>
              <HStack spacing={4}>
                <IconButton as="a" href="https://www.linkedin.com/in/sanjana-a-56629524a/" target="_blank" rel="noopener noreferrer" color="blue.600" bg="white" borderRadius="full" boxSize="50px" border="2px solid" borderColor="blue.600" _hover={{ transform: "scale(1.2)", bg: "blue.100" }} transition="0.2s ease-in-out">
                  <CiLinkedin size="70%" />
                </IconButton>
  
                <IconButton as="a" href="https://www.instagram.com/sanjana.simha?utm_source=qr&igsh=MTFrb3phb2J4aGxxNg==" target="_blank" rel="noopener noreferrer" color="pink.500" bg="white" borderRadius="full" boxSize="50px" border="2px solid" borderColor="pink.500" _hover={{ transform: "scale(1.2)", bg: "pink.100" }} transition="0.2s ease-in-out">
                  <FaInstagram size="70%" />
                </IconButton>
  
                <IconButton as="a" href="mailto:sanjanasimha159@gmail.com" color="red.600" bg="white" borderRadius="full" boxSize="50px" border="2px solid" borderColor="red.600" _hover={{ transform: "scale(1.2)", bg: "red.100" }} transition="0.2s ease-in-out">
                  <MdOutlineMail size="70%" />
                </IconButton>
              </HStack>
              
              <form onSubmit={handlesubmit} style={{ width: "100%" }}>
                <Fieldset.Root padding="20px">
                  <Fieldset.Content>
                    <Field label="Name">
                      <Input name="name" placeholder="Enter your name" focusBorderColor="blue.400" value={formdata.name} onChange={handlechange} />
                    </Field>
                    <Field label="Email">
                      <Input name="email" type="email" placeholder="Enter your email" focusBorderColor="blue.400" value={formdata.email} onChange={handlechange} />
                    </Field>
                    <Field label="Message">
                      <Textarea name="message" placeholder="Type your message..." focusBorderColor="blue.400" value={formdata.message} onChange={handlechange} />
                    </Field>
                    <Button mt="4" w="full" bgGradient="linear(to-r, #138781, #1EA896)" color="white" fontSize="lg" fontWeight="bold" py="6" borderRadius="md" _hover={{ bgGradient: "linear(to-r, #1EA896, #138781)", transform: "scale(1.05)" }} transition="0.2s ease-in-out" type="submit">
                      Send Message
                    </Button>
                  </Fieldset.Content>
                </Fieldset.Root>
              </form>
            </VStack>
          </HStack>
        </Box>
  
        <Box as="footer" bg="gray.800" color="white" py="3" textAlign="center">
          <Text fontSize="sm">Made by Sanjana © 2025</Text>
        </Box>
      </>
    );
  };
  
  export default Contact;
  
