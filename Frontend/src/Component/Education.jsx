import React from 'react'
import { Box, Heading } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <Box 
      id="education" 
      w={{ base: "95%", sm: "80%", md: "70%", lg: "70%", xl: "60%" }} 
      mx="auto" 
      backgroundColor={'#fafaf8'} 
      marginTop={'40px'} 
      marginBottom={'30px'}
      padding={'10px'}
      
      marginLeft={{base:'5px',md:'50px',lg:'380px'}}
    >
      <Heading 
        paddingTop={'10px'} 
        size={{ base: '3xl', md: '4xl' }} 
        textAlign={'center'} 
        color={'#138781'} 
        boxShadow={'0px 1px 2px 0px rgba(0, 0, 0, 0.12)'}
      >
        Education
      </Heading>

      <VerticalTimeline animate={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ 
            background: 'white', 
            color: '#138781',  
            maxWidth: '370px',  
            borderRadius: '10px',
          }}
          date="2021-2025"
          dateClassName="custom-date"
          iconStyle={{ background: '#138781', color: 'black' }}
          icon={<MdSchool />}
          position={{ base: "right", md: "left" }} // Mobile -> Right | Desktop -> Left
        >
          <h2 className="vertical-timeline-element-title text-lg">B.E</h2>
          <h4 className="vertical-timeline-element-subtitle text-sm">Vidyavardhaka College of Engineering</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ 
            background: 'white', 
            color: '#138781',  
            maxWidth: '370px',
            borderRadius: '10px',
          }}
          date="2019-2021"
          dateClassName="custom-date"
          iconStyle={{ background: '#138781', color: 'black' }}
          icon={<MdSchool />}
          position={{ base: "right", md: "right" }} // Always Right
        >
          <h2 className="vertical-timeline-element-title text-lg">PUC</h2>
          <h4 className="vertical-timeline-element-subtitle text-sm">Marimallappa PU College, Mysore</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ 
            background: 'white', 
            color: '#138781',  
            maxWidth: '370px',
            borderRadius: '10px',
          }}
          date="2007-2019"
          dateClassName="custom-date"
          iconStyle={{ background: '#138781', color: 'black' }}
          icon={<MdSchool />}
          position={{ base: "right", md: "left" }} // Mobile -> Right | Desktop -> Left
        >
          <h2 className="vertical-timeline-element-title text-lg">High School</h2>
          <h4 className="vertical-timeline-element-subtitle text-sm">Good Shepherd Convent, Mysore</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default Education;
