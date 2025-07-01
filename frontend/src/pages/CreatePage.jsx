import { Box, Button, Container, Heading, useColorMode, VStack, useColorModeValue,Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useProductStore } from '../store/product'
import { Toast, useToast } from '@chakra-ui/react'
import { set } from 'mongoose'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })

  const toast = useToast();



  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    console.log(newProduct);
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true
      })
    }
    else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setNewProduct({name:"",price:"",image:""})
    }
    console.log("Success", success);
    console.log("Message", message);
  }
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"} bg={useColorModeValue("gray.800", "white")}
          p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input type="text"
              placeholder='product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              w={'full'}/>
            <Input type="number"
              placeholder='Price'
              name='price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value }) } w={'full'}
            />
            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} w={'full'}
            />

            <Button w={'full'} colorScheme='blue' onClick={handleAddProduct}>Add Product</Button>

          </VStack>
        </Box>

      </VStack>

    </Container>
  )
}

export default CreatePage
