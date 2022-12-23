import { Button, Input, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCard from "./ListCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import { add_user } from "../redux/Action/UserAction";
const List = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.users);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = () => {
    dispatch(
      add_user({ name, email, pass }),
      setEmail(""),
      setName(""),
      setPass(""),
      onClose()
    );
  };
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleSubmit}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {user.map((element) => (
        <ListCard key={element._id} element={element} />
      ))}
    </div>
  );
};

export default List;
