import React, { useEffect } from "react";
import { Box,Flex } from "@chakra-ui/react";
import { DeleteIcon,EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";

// let data = [
//   {
//     id: "1",
//     task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//   },
//   {
//     id: "",
//     task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//   },
//   {
//     id: "3",
//     task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//   },
//   {
//     id: "4",
//     task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//   },
//   {
//     id: "5",
//     task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//   },
//   {
//     id: "6",
//     task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
//   },
// ];

const Task = () => {
  const [data, setData] = useState([])
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("tokenStore");
    setToken(token);
    if (token) {
      getNotes(token);
    }
  }, []);

  const getNotes = async (token) => {
    const res = await axios.get(
      "http://localhost:8080/api/tasks",
      {
        headers: { Authorization: token },
      }
    );
    setData(res.data);
  };

  const deleteNote = async (id) => {
    try {
      if (token) {
        await axios.delete(
          `http://localhost:8080/api/tasks/${id}`,
          {
            headers: { Authorization: token },
          }
        );
        getNotes(token);
      }
    } catch (error) {
      window.location.href = "/";
    }
  };


  return (
    <Box>
      <Box border="1px solid black">
        {data.map((el) => (
          <Box key={el._id} border="1px solid black">
            <Box>
              <p>{el.content}</p>
            </Box>
            <Flex justify="flex-end" gap={30}>
           
              <EditIcon w={8} h={8} color="red.500" />
              <DeleteIcon w={8} h={8} color="red.500" onClick={() => deleteNote(el._id)}/>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Task;
