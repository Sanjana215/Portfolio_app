import React from 'react'
import { Box, Heading, Button, Card, Image, Text, SimpleGrid } from "@chakra-ui/react";
import projects from "../utils/projects.js";
import {Zoom } from "react-awesome-reveal";


const Projects = () => {
  return (
    <Box marginTop={'30px'} id="projects">
      
      {/* Zoom in Heading */}
    
        <Heading size={{base:'3xl',md:'4xl'}} textAlign={'center'} color={'#138781'} boxShadow={'0px 1px 2px 0px rgba(0, 0, 0, 0.12)'}>
          Recent Projects
        </Heading>
      

      {/* Description */}
      <Text textAlign={'center'} fontSize="lg" color="gray.800" paddingTop={'30px'}>
        👇 Here are some of my projects.
      </Text>

      {/* Fade-up effect for project cards (same as skills section) */}
      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 3 }} 
        spacing="5px" 
        marginLeft={{ base: "20px", md: "300px" }}
        marginBottom={'30px'}
        marginTop={{base:'20px',md:'50px'}}
        rowGap={{base:'10px', md:'30px'}}
      >
        
          {projects.map((project) => (
            <Zoom damping={0.5}>
            <Card.Root
              key={project.id}
              w={{ base: "300px", md: "300px" }}
              margin={{ base: "10px", md: "0px" }}
              h={{ base: "auto", md: "350px" }}
              overflow="hidden"
              backgroundColor={'#fafaf8'}
              boxShadow="lg"
              borderRadius="10px"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "xl",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Image
                src={`images/${project.image}`}
                w="100%"
                h="180px"
                objectFit="cover"
                transition="all 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                }}
              />
              <Card.Body p="3">
                <Card.Title fontSize="lg" fontWeight="bold">
                  {project.title}
                </Card.Title>
                <Card.Description fontSize="sm" color="gray.600">
                  {project.descrip}
                </Card.Description>
              </Card.Body>
              <Card.Footer p="3" gap="2">
                <Button
                  as="a"
                  href={project.git}
                  target="_blank"
                  variant="solid"
                  size="sm"
                  colorScheme="blue"
                  transition="all 0.3s"
                  _hover={{
                    backgroundColor: "blue.600",
                    transform: "scale(1.1)",
                  }}
                >
                  Github
                </Button>
                <Button
                  as="a"
                  href={project.live}
                  target="_blank"
                  variant="outline"
                  size="sm"
                  colorScheme="teal"
                  border="2px"
                  transition="all 0.3s"
                  _hover={{
                    backgroundColor: "teal.500",
                    color: "white",
                    transform: "scale(1.1)",
                  }}
                >
                  Live Project
                </Button>
              </Card.Footer>
            </Card.Root>
            </Zoom>
          ))}
        
      </SimpleGrid>
    </Box>
  );
}

export default Projects;  
