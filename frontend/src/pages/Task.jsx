import React, { useEffect } from "react";
import { Box,Flex } from "@chakra-ui/react";
import { DeleteIcon,EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";


const Task = () => {
  // let dataa = [
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
      <Box  w="70%" m="auto"pt="30px">
        {data.map((el) => (
         <Flex align={"center"}>
           <Flex key={el._id}  
          background="linear-gradient(180deg, #180527, #17052a, #16042d, #150430, #130433, #110436, #0d0439, #08043c)"
          borderRadius="10px" color="white" m="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" p="20px">
            <Box>
              <p >{el.content}</p>
            </Box>
            <Flex justify="flex-end" gap={30}>
           
              {/* <EditIcon w={8} h={8} color="red.500" /> */}
              
            </Flex>
          </Flex>
            <Box border="3.5px solid red" borderRadius={50} p="10px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <DeleteIcon w={6} h={6} color="red.500" onClick={() => deleteNote(el._id)} />
            </Box>
         </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Task;
