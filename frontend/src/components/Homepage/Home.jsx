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
  useToast
} from "@chakra-ui/react";
const Home = () => {
  const [resize, setResize] = useState("horizontal");
  const [text, setText] = useState("");

  const toast = useToast()

  

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    toast({
        position: 'top',
        duration: 1000,
        isClosable: true,
        status: 'success',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
          Converted to uppercase
          </Box>
        ),
      })
  };

  const handleDefault = () => {
    setText("Enter Your Text");
    toast({
        position: 'top',
        duration: 1000,
        isClosable: true,
        status: 'success',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
          Converted to default
          </Box>
        ),
      })
  };

  const handleLower = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    toast({
        position: 'top',
        duration: 1000,
        isClosable: true,
        status: 'success',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
          Converted to lowercase
          </Box>
        ),
      })
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
        position: 'top',
        duration: 1000,
        isClosable: true,
        status: 'success',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
          color changed
          </Box>
        ),
      })
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);

  };

  const handleCopy=() => {
    let text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    toast({
        position: 'top',
        duration: 1000,
        isClosable: true,
        status: 'success',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
          copied sucessfully
          </Box>
        ),
      })
    // props.showAlert("Text Copied","success")
  };
  const handleExtraSpace=() => {
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    toast({
        position: 'top',
        duration: 1000,
        isClosable: true,
        status: 'success',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
          extra space removed
          </Box>
        ),
      })
    // props.showAlert("Hiiiii","success")
  }
  return (
    <Box  >
      <Box  m="30px auto 0 auto" >
        <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
          <Stack direction="row" spacing={5}>
            <Radio value="horizontal">Horizontal</Radio>
            <Radio value="vertical">Vertical</Radio>
          </Stack>
        </RadioGroup>

        <Textarea
          placeholder="Enter your text here.."
          size="sm"
          id="myBox"
          resize={resize}
          value={text}
          onChange={(e) => setText(e.target.value)}
        //   bgGradient="linear(to-t, green.200, pink.200)"
        />
      </Box>
      <Flex gap="5" m="10px" justify="center">
        <Tooltip label="This will change your text to uppercase" bg="yellow.300">
          <Button colorScheme='purple' onClick={handleUpper}>Upper</Button>
        </Tooltip>
        <Tooltip label="This will change your text to lowercase" bg="red.600">
          <Button colorScheme='purple' onClick={handleLower}>Lower</Button>
        </Tooltip>
        <Tooltip label="This will change your text area to default" bg="red.600">
          <Button  colorScheme='purple'onClick={handleDefault}>Default</Button>
        </Tooltip>
        <Tooltip label="This will change color of your text " bg="red.600">
          <Button colorScheme='purple' onClick={() => changeColor(Math.floor(Math.random() * 5))}>Color</Button>
        </Tooltip>
        <Tooltip label="This will copy your text" bg="red.600">
          <Button colorScheme='purple' onClick={handleCopy}>Copy</Button>
        </Tooltip>
        <Tooltip label="This will turn your text to audio" bg="red.600">
          <Button  colorScheme='purple'onClick={speak}>Voice</Button>
        </Tooltip>
        <Tooltip label="This will remove extra space from your text" bg="red.600">
          <Button colorScheme='purple' onClick={handleExtraSpace}>Extra Space</Button>
        </Tooltip>
      </Flex>
      <Box>
        <p>
          {text.split(" ").length}-words and {text.length}-characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read.</p>
      </Box>
    </Box>
  );
};

export default Home;
