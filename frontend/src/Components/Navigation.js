import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["sm"];
  return (
    <div>
      {sizes.map((size) => (
        <Button onClick={() => handleClick(size)} key={size} m={4}>
          open
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Nav</DrawerHeader>
          <DrawerBody>
            <UnorderedList>
              <ListItem as={Link} to="/">
                Home
              </ListItem>
              <ListItem as={Link} to="/list">
                List
              </ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navigation;
