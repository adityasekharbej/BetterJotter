import { Box, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import "./C.css";
const C = () => {
  return (
    <Box h={[500, 600, 700]} w={[1100, 1200, 1300]} m="auto" p="auto">
      <HStack justify="center" h="50%">
        <Box
          w="40%"
          bgSize="100%"
          mr="1%"
          h="95%"
          className="C"
          backgroundImage="url('https://i.postimg.cc/wjLrjCmC/99960489.jpg')"
          role="group"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Heading
            w="100%"
            h="100%"
            pt="35%"
            align="right"
            fontSize={"50px"}
            mr="2%"
            _groupHover={{ backdropFilter: "none" }}
            className="animate-charcter"
            _hover={{ fontSize:"40px", cursor: "pointer" }}

          >
            Susmita
          </Heading>
        </Box>
        <Box
          w="40%"
          bgSize="100%"
          h="95%"
          role="group"
          backgroundImage="url('https://i.postimg.cc/L8YQhnJQ/Whats-App-Image-2022-09-02-at-5-54-07-PM.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Heading    w="100%"
            h="100%"
            fontSize={"50px"}
            pt="35%"  ml="2%"
            _groupHover={{ backdropFilter: "none" }}
            _hover={{ fontSize:"40px", cursor: "pointer" }}
            className="animate-charcter">
            Aditya
          </Heading>
        </Box>
      </HStack>
      <Flex justify="center" h="50%">
        {" "}
        <Box
          bgSize="100%"
          w="40%"
          className="C"
          h="100%"
          role="group"
          backgroundImage="url('https://i.postimg.cc/BQ46Q0kF/resumepic.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Heading    w="100%"
            h="100%"
            pt="45%"
          
            align="center"
            fontSize={"50px"}
            _groupHover={{ backdropFilter: "none" }}
            _hover={{ fontSize:"40px", cursor: "pointer", paddingTop:"55%",
            }}
             className="animate-charcter">
            Santanu
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default C;
