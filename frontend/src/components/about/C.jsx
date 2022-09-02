import { Box, Flex, Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import "./C.css"
const C = () => {
  return (
    <Box h={[500, 600, 700]} w={[1100, 1200, 1300]} m="auto"p="auto">
        <HStack justify ="center" h="50%">
            <Box w="40%"bgSize="100%" h="90%"className='C'  backgroundImage="url('https://i.postimg.cc/wjLrjCmC/99960489.jpg')"   bgPosition="center"
  bgRepeat="no-repeat"><Heading mt="25%" >Susmita</Heading></Box>
            <Box w="40%" bgSize="100%"h="90%"  backgroundImage="url('https://i.postimg.cc/L8YQhnJQ/Whats-App-Image-2022-09-02-at-5-54-07-PM.jpg')"   bgPosition="center"
  bgRepeat="no-repeat"><Heading>Aditya</Heading></Box>
           
        </HStack>
        <Flex justify="center"h="50%" > <Box bgSize="100%"w="35%" className='C' h="80%"  backgroundImage="url('https://i.postimg.cc/BQ46Q0kF/resumepic.png')"   bgPosition="center"
  bgRepeat="no-repeat"><Heading>Santanu</Heading></Box></Flex>
	</Box>
  )
}

export default C