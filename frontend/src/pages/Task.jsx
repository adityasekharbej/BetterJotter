import React from "react";
import { Box,Flex } from "@chakra-ui/react";
import { DeleteIcon,EditIcon } from "@chakra-ui/icons";

let data = [
  {
    id: "1",
    task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "",
    task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "3",
    task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "4",
    task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "5",
    task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "6",
    task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const Task = () => {
  return (
    <Box>
      <Box border="1px solid black">
        {data.map((el) => (
          <Box key={el.id} border="1px solid black">
            <Box>
              <p>{el.task}</p>
            </Box>
            <Flex justify="flex-end" gap={30}>
           
              <EditIcon w={8} h={8} color="red.500" />
              <DeleteIcon w={8} h={8} color="red.500" />
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Task;
