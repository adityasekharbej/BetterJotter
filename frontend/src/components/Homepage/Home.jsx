import React, { useEffect, useState } from "react";
import {
  Box,
  RadioGroup,
  Stack,
  Radio,
  Textarea,
  Tooltip,
  Button,
  Flex,
  useToast,
  leftIcon,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { EmailIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const Home = ({ setIsLogin, isLogin }) => {
  const [resize, setResize] = useState("horizontal");
  const [text, setText] = useState("");

  const toast = useToast();

  useEffect(() => {
    const token = localStorage.getItem("tokenStore");
    console.log("hiii",isLogin)
    if(!token){
      navigate('/login')
    }
  }, [])
  

  const createNote = async () => {
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const newNote = {
          content: text,
        };

        await axios.post("http://localhost:8080/api/tasks", newNote, {
          headers: { Authorization: token },
        });
      }
      setText("");
      toast({
        position: "top",
        duration: 1000,
        isClosable: true,
        status: "success",
        render: () => (
          <Box color="white" p={3} bg="green.500">
            Task added successfully 
          </Box>
        ),
      });
    } catch (err) {
      // window.location.href = "/";
      console.log("error happened")
    }
  };

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    toast({
      position: "top",
      duration: 1000,
      isClosable: true,
      status: "success",
      render: () => (
        <Box color="white" p={3} bg="green.500">
          Converted to uppercase
        </Box>
      ),
    });
  };

  const handleDefault = () => {
    setText("");
    toast({
      position: "top",
      duration: 1000,
      isClosable: true,
      status: "success",
      render: () => (
        <Box color="white" p={3} bg="green.500">
          Converted to default
        </Box>
      ),
    });
  };

  const handleLower = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    toast({
      position: "top",
      duration: 1000,
      isClosable: true,
      status: "success",
      render: () => (
        <Box color="white" p={3} bg="green.500">
          Converted to lowercase
        </Box>
      ),
    });
  };

  const color = [
    "red",
    "blue",
    "yellow",
    "orange",
    "green",
    "black",
    "pink",
    "salmon",
    "teal",
  ];
  const changeColor = (number) => {
    document.getElementById("myBox").style.color = color[number];
    toast({
      position: "top",
      duration: 1000,
      isClosable: true,
      status: "success",
      render: () => (
        <Box color="white" p={3} bg="green.500">
          color changed
        </Box>
      ),
    });
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    toast({
      position: "top",
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
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    toast({
      position: "top",
      duration: 1000,
      isClosable: true,
      status: "success",
      render: () => (
        <Box color="white" p={3} bg="green.500">
          extra space removed
        </Box>
      ),
    });
    // props.showAlert("Hiiiii","success")
  };
  const navigate = useNavigate();
  const logoutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <Box>
      <Text align="center" onClick={logoutSubmit}>
        Logout
      </Text>
      <Box m="0 auto">
        <Flex justify="center">
          <RadioGroup defaultValue={resize} onChange={setResize} mb={6} mt={6}>
            <Stack direction="row" spacing={5}>
              <Radio value="horizontal">
                <Button colorScheme="green">Horizontal</Button>
              </Radio>
              <Radio value="vertical">
                <Button colorScheme="green">Vertical</Button>
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>

        <Flex gap="5" m="10px" justify="center">
          <Tooltip
            label="This will change your text to uppercase"
            bg="yellow.300"
          >
            <Button
              colorScheme="purple"
              onClick={handleUpper}
              leftIcon={<EmailIcon />}
              variant="solid"
            >
              Upper
            </Button>
          </Tooltip>
          <Tooltip
            label="This will change your text to lowercase"
            bg="yellow.300"
          >
            <Button colorScheme="purple" onClick={handleLower}>
              Lower
            </Button>
          </Tooltip>
          <Tooltip
            label="This will change your text area to default"
            bg="yellow.300"
          >
            <Button colorScheme="purple" onClick={handleDefault}>
              Clear
            </Button>
          </Tooltip>
          <Tooltip label="This will change color of your text " bg="yellow.300">
            <Button
              colorScheme="purple"
              onClick={() => changeColor(Math.floor(Math.random() * 5))}
            >
              Color
            </Button>
          </Tooltip>
          <Tooltip label="This will copy your text" bg="yellow.300">
            <Button colorScheme="purple" onClick={handleCopy}>
              Copy
            </Button>
          </Tooltip>
          <Tooltip label="This will turn your text to audio" bg="yellow.300">
            <Button colorScheme="purple" onClick={speak}>
              Voice
            </Button>
          </Tooltip>
          <Tooltip
            label="This will remove extra space from your text"
            bg="yellow.300"
          >
            <Button colorScheme="purple" onClick={handleExtraSpace}>
              Extra Space
            </Button>
          </Tooltip>
        </Flex>
        <Flex gap="30px" justify="center" mt="30px">
          <Button colorScheme="teal" variant="outline">
            <p>
              {text == " "
                ? text.split(" ").length
                : text.split(" ").length - 1}
              -words and {text.replace(/\s/g, "").length}-characters
            </p>
          </Button>
          <Button colorScheme="teal" variant="outline">
            <p>
              {text == "" ? 0 : 0.008 * text.split(" ").length} minutes to read.
            </p>
          </Button>
        </Flex>

        <Textarea
          placeholder="Enter your text here"
          size="sm"
          id="myBox"
          resize={resize}
          value={text}
          mt="30px"
          onChange={(e) => setText(e.target.value)}
        />
        <Flex justify="center" mt="10px">
          <Button colorScheme="purple" onClick={createNote}>
            Add
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
