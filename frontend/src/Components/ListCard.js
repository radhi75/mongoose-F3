import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
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
import { del_user, edit_user } from "../redux/Action/UserAction";
import { useDispatch } from "react-redux";

const ListCard = ({ element }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(element.name);
  const [email, setEmail] = useState(element.email);
  const [pass, setPass] = useState(element.pass);
  const handleEdit = () => {
    dispatch(edit_user(element._id, { name, email, pass }), onClose());
  };
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{element.name}</Heading>

            <Text py="2">{element.email}</Text>
          </CardBody>

          <CardFooter>
            <Button
              variant="solid"
              colorScheme="red"
              onClick={() => dispatch(del_user(element._id))}
            >
              Delete
            </Button>
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
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
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
                  <Button variant="ghost" onClick={handleEdit}>
                    Save
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default ListCard;
