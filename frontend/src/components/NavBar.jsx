import { Flex,Button} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useContext } from 'react';
import {AuthContext} from '../context/AuthContext';
const Lists=[
    {
      to:"/",
      label:"Home"

    },
    {
        to:"/about",
        label:"About"
  
      },
      {
        to:"/contact",
        label:"Contact"
  
      },
      {
        to:"/login",
        label:"Login"
      }
     
]
export default function  Navbar(){
  let {logout}=useContext(AuthContext);
    return(
        <Flex align="center" justify='space-around'  bg="red.100" p="4" >
             {Lists?.map((List,i)=>{
              return <ChakraLink  as={ReactRouterLink}  key ={i} to={List.to} color="gray.900">{List.label}</ChakraLink >
            })}
            <Button colorScheme='teal' variant='outline' onClick={logout}>
             Logout
            </Button>
        </Flex>
    )
}

