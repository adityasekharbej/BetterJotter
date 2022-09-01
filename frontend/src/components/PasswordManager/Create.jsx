import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Create = () => {
  const COPY_SUCCESS = "Password successfully copied to clipboard";
  const COPY_Fail = "Password successfully copied to clipboard";
  const numbers = "0123456789";

  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

  const specialCharacters = "!^+%&?_#$½§{[]}@é";
  useEffect(() => {
    console.log(passwordLength);
  });

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(6);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("Please select atleast one checkbox", true);
    } else if (passwordLength == "") {
      notify("Please select length", true);
    } else {
      let characterList = "";
      if (includeNumbers) {
        characterList = characterList + numbers;
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }
      setPassword(createPassword(characterList));
      notify("Password is generated successfully", false);
    }
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.random() * characterListLength;
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };
  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };
  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleCopyPassword = () => {
    if (password === "") {
      notify(COPY_Fail, true);
    } else {
      copyToClipboard(password);
      setPassword("");
      notify(COPY_SUCCESS);
    }
  };
  return (
    <Box w="100%" m="auto" p="auto">
      <Box w="60%" m="auto">
        <Center>
          {" "}
          <Heading m="auto" color="#4CAF50" p="5%" size="xl">
            Password Generator
          </Heading>
        </Center>

        {password != "" ? (
          <Flex
            mb="5%"
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p="2%"
            borderRadius="5px"
            ml="20%"
            mr="20%"
            justify="center"
          >
            {" "}
            <Spacer />
            <Heading m="auto" size="md">
              {password}
            </Heading>
            <Spacer />{" "}
            <Button
              color="white"
              bg="#4CAF50"
              _hover={{
                boxShadow:
                  "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)",
              }}
              align="right"
              onClick={handleCopyPassword}
            >
              Copy
            </Button>
          </Flex>
        ) : (
          ""
        )}

        <Flex
          ml="30%"
          mb="2%"
          mr="30%"
          _hover={{
            cursor: "pointer",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
          boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
          justify={"center"}
        >
          <Spacer />
          <Box m="auto" htmlFor="password-strength">
            Password length
          </Box>
          <NumberInput
            ml="1%"
            w="80px"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e)}
            //  value={value}
            id="password-stregth"
            name="password-strength"
            max={26}
            min={4}
          >
            {" "}
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Spacer />
        </Flex>
        <Flex
          _hover={{
            cursor: "pointer",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
          ml="30%"
          mr="30%"
          mb="2%"
          boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
          p="auto"
          justify={"center"}
        >
          <Box p="2%" htmlFor="uppercase-letters">
            Include Uppercase{" "}
          </Box>
          <Checkbox
            isChecked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
            type="checkbox"
            id="uppercase-letters"
            name="uppercase-letters"
          />
        </Flex>
        <Flex
          _hover={{
            cursor: "pointer",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
          ml="30%"
          mr="30%"
          mb="2%"
          boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
          p="auto"
          justify={"center"}
        >
          <Box p="2%" htmlFor="lowercase-letters">
            Include Lowercase{" "}
          </Box>
          <Checkbox
            isChecked={includeLowerCase}
            onChange={(e) => setIncludeLowerCase(e.target.checked)}
            type="checkbox"
            id="lowercase-letters"
            name="lowercase-letters"
          />
        </Flex>
        <Flex
          _hover={{
            cursor: "pointer",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
          ml="30%"
          mr="30%"
          mb="2%"
          boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
          p="auto"
          justify={"center"}
        >
          <Box p="2%" htmlFor="include-numbers">
            Include Numbers
          </Box>
          <Checkbox
            isChecked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            type="checkbox"
            id="include-numbers"
            name="include-numbers"
          />
        </Flex>
        <Flex
          _hover={{
            cursor: "pointer",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
          ml="30%"
          mr="30%"
          mb="5%"
          boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
          p="auto"
          justify={"center"}
        >
          <Box p="2%" htmlFor="include-symbols">
            Include Symbols
          </Box>
          <Checkbox
            isChecked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            type="checkbox"
            id="include-symbols"
            name="include-symbols"
          />
        </Flex>
        <Center>
          {" "}
          <Button
            color="white"
            bg="#4CAF50"
            _hover={{
              boxShadow:
                "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)",
            }}
            onClick={handleGeneratePassword}
          >
            Generate Password
          </Button>
        </Center>
        <ToastContainer
          position="bottom-center"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Box>
    </Box>
  );
};
