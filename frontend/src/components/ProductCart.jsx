import { Box, HStack, IconButton, useColorMode, useColorModeValue, Heading,Image,Text, useToast, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, VStack, useDisclosure,Input, ModalFooter, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';

const ProductCart = ({product}) => {

    const {isOpen,onOpen,onClose}=useDisclosure();
    const textColor=useColorModeValue("gray.600","gray.200");
    const bg=useColorModeValue("white","gray.800");
    const {deleteProduct}=useProductStore();
     const toast=useToast();
    const handleDeleteProduct=async (pid)=>{
        const {success,message}=await deleteProduct(pid);
       
        if(!success){
            toast({
                title:"error",
                description:message,
                status:"error",
                duration:3000,
                isClosable:true,
            })
        }
        else{
            toast({
                title:"success",
                description:message,
                status:"success",
                duration:3000,
                isClosable:true,
            })
        }
    }

    const [updatedProduct,setUpdatedProduct]=useState(product);
    const {updateProduct}=useProductStore()
    const handleUpdatedProduct=async (pid,updatedProduct)=>{
        const {success,message}=await updateProduct(pid,updatedProduct);
         if(!success){
            toast({
                title:"error",
                description:message,
                status:"error",
                duration:3000,
                isClosable:true,
            })
        }
        else{
            toast({
                title:"success",
                description:message,
                status:"success",
                duration:3000,
                isClosable:true,
            })
        }
        onClose();
    }
    return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{transform:'translateY(-5px)', shadow:'xl'}}
    bg={bg}
    >
        <Image  src={product.image} alt={product.name} h={48} w='full' objectFit='cover'/>
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight="bold" fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>

            <HStack spacing={2}>
                <IconButton colorScheme='blue' onClick={onOpen}><FaEdit /></IconButton>
                <IconButton colorScheme='red' onClick={()=>handleDeleteProduct(product._id)}><MdDelete /></IconButton>
                
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
                <ModalContent>
                    <ModalBody>Update Product</ModalBody>
                    <ModalCloseButton></ModalCloseButton>

                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                            placeholder="product Name" name='name'
                            value={updatedProduct.name} onChange={(e)=>setUpdatedProduct({...updatedProduct,name:e.target.value})}
                            />
                            <Input placeholder='price' type='number'
                            value={updatedProduct.price}
                            onChange={(e)=>setUpdatedProduct({...updatedProduct,price:e.target.value})}
                            
                            />
                            <Input placeholder='Image Url' name='image'
                            value={updatedProduct.image}
                            onChange={(e)=>setUpdatedProduct({...updatedProduct,image:e.target.value})}
                            />

                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} colorScheme='blue' onClick={()=>handleUpdatedProduct(product._id,updatedProduct)}>
                            Update
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Cancel</Button>
                    </ModalFooter>

                </ModalContent>
            </ModalOverlay>

        </Modal>
        

    </Box>
  )
}

export default ProductCart
