import {Box, Heading ,Button ,useToast } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom';


export default function  Home(){
    const toast = useToast()
    let Navigate=useNavigate();
    function toastcome(){
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 10000,
            isClosable: true,
          })
          Navigate("/login")
    }
    return(
        <Box>
           <Heading as="h1" size="sm" >Home</Heading>
       
           <Button variant='solid' colorScheme="red">button</Button>
           <Button colorScheme='teal' variant='solid' onClick={toastcome}>
                Button
            </Button>
          
        </Box>

    )
}