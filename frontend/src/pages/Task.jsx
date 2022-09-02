import React, { useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Img,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { CopyIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link as Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
const Task = () => {
  
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const toast = useToast();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("tokenStore");
    setToken(token);
    if (token) {
      getNotes(token);
    } else {
      navigate("/login");
    }
  }, []);

  const getNotes = async (token) => {
    const res = await axios.get(
      "https://lit-basin-77633.herokuapp.com/api/tasks",
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
          `https://lit-basin-77633.herokuapp.com/api/tasks/${id}`,
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

  const speak = (text) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopy = (text) => {
    // let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text);
    toast({
      position: "top-right",
      duration: 1000,
      isClosable: true,
      status: "success",
      render: () => (
        <Box color="white" p={3} bg="green.500">
          copied sucessfully
        </Box>
      ),
    });
    // props.showAlert("Text Copied","success")
  };

  return (
    <Box minW={"800px"} minH={"600px"}>
      <Box w="70%" m="auto" pt="50px">
        <Center>
          <Link to="/create">
            <Text border="3.5px solid teal" p="5px" borderRadius="10px" fontWeight={"600"} bg="#e6fffa">
              Create Task✍️
            </Text>
          </Link>
        </Center>
        {data.length ? (
          data.map((el) => (
            <Flex align={"center"}>
              <Flex
                width="100%"
                key={el._id}
                background="linear-gradient(180deg, #180527, #17052a, #16042d, #150430, #130433, #110436, #0d0439, #08043c)"
                borderRadius="10px"
                color="white"
                m="10px"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                p="20px"
              >
                <Box>
                  <p id="myBox">{el.content}</p>
                </Box>
                <Flex justify="flex-end" gap={30}>
                  {/* <EditIcon w={8} h={8} color="red.500" /> */}
                </Flex>
              </Flex>
              <Box
                border="3.5px solid #dd6b20"
                borderRadius={50}
                p="10px 10px 7px 10px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <Icon
                  as={MdOutlineRecordVoiceOver}
                  w={6}
                  h={6}
                  color="orange.400"
                  onClick={() => speak(el.content)}
                />
              </Box>
              <Box
                border="3.5px solid teal"
                borderRadius={50}
                p="10px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                ml="10px"
              >
                <CopyIcon
                  w={6}
                  h={6}
                  color="cyan.500"
                  onClick={() => handleCopy(el.content)}
                />
              </Box>

              <Box
                border="3.5px solid red"
                borderRadius={50}
                p="9px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                ml="10px"
              >
                <DeleteIcon
                  w={6}
                  h={6}
                  color="red.400"
                  onClick={() => deleteNote(el._id)}
                />
              </Box>
            </Flex>
          ))
        ) : (
          <Center>
            <Box>
              <Img
                src="https://media3.giphy.com/media/YHpmahJgMjxL6S29Au/giphy.gif"
                alt=""
              />
              <Center>
                <VStack>
                  <Heading fontSize={"4xl"}>Add some task !!!!!!!</Heading>
                  <Link to="/">
                    <Text fontSize={"xl"} color="blue">
                      Create Here👇
                    </Text>
                  </Link>
                </VStack>
              </Center>
            </Box>
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default Task;
