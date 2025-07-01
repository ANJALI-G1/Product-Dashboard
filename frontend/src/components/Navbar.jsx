import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdSunny } from "react-icons/io";
import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useProductStore } from '../store/product';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { products } = useProductStore();
  const navigate = useNavigate();
  console.log("Navbar mounted");



  return (
    
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sn: "row"
        }}
      >

        <Text
          bgGradient='linear(to-r, cyan.400,blue.500)'
          bgClip='text'
          fontSize={{ base: "22", sm: "28" }}
          fontWeight='extrabold'
          textAlign={"center"}
          textTransform={"uppercase"}


        >
          <Link to={"/"}>Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          {/* ✅ This navigates to /create */}
          <Link to="/create">
            <Button>
              <CiSquarePlus fontSize={30} />
            </Button>
          </Link>

          <Link to={'/create'}>
          <Text>Hello</Text>
          </Link>


          {/* ✅ This toggles color mode only */}
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon fontSize={30} /> : <IoMdSunny fontSize={30} />}
          </Button>
        </HStack>

      </Flex>

    </Container>
  )
}

export default Navbar
