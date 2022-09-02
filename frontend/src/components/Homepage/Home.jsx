import React, { useState } from "react";
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
  leftIcon
} from "@chakra-ui/react";
import { EmailIcon} from '@chakra-ui/icons'
const Home = () => {
  const [resize, setResize] = useState("horizontal");
  const [text, setText] = useState("");

  const toast = useToast();

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

  return (
    <Box>
      <Box m="30px auto 0 auto">
        <Flex justify="center">
          <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
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
            <Button colorScheme="purple" onClick={handleUpper} leftIcon={<EmailIcon />}  variant='solid'>
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
      </Box>
    </Box>
  );
};

export default Home;
