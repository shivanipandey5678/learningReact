// import { Heading ,Input,Container,VStack,Button} from '@chakra-ui/react'
// import { useState, useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import axios from 'axios';
// import { Navigate } from "react-router-dom";


// export default function  Login(){
    
   
//     let [email,setEmail]=useState("");
//     let [password,setPassword]=useState("");
    
//     const {
//         login,
//         authDetails: { isLogin },
//       } = useContext(AuthContext);
//     async function postUserInfo(){
//         try {
//             let res=await axios({
//                 method:"post",
//                 url:"https://reqres.in/api/login",
//                 data:{
//                  email,
//                  password,
//                 }
               
//                })
//                login(res?.data?.token)
              
//         } catch (error) {
//             console.log(error)
//         }
      
//     }
//     if(isLogin){
//         return <Navigate to="/" />
//     }
    


//     return(
//         <Container maxW={"600px"}>
//             <VStack spacing={6}>
//             <Heading as='h1' size="xl">
//                     Login
//             </Heading>
//             <Input placeholder='email' size='md' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
//             <Input placeholder=' password' size='md' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
//             <Button colorScheme='teal' variant='solid' onClick={ postUserInfo}>
//                 Login
//             </Button>
//             </VStack >
           
//         </Container>
//     )
// }


import { Heading, Input, Container, VStack, Button } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Ensure correct import path
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, authDetails: { isLogin } } = useContext(AuthContext);

  async function postUserInfo() {
    try {
      const res = await axios.post('https://reqres.in/api/login', { email, password });
      login(res.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  if (isLogin) {
    return <Navigate to="/" />;
  }
  

  return (
    <Container maxW="600px">
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Login
        </Heading>
        <Input
          placeholder="email"
          size="md"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="password"
          size="md"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button colorScheme="teal" variant="solid" onClick={postUserInfo}>
          Login
        </Button>
      </VStack>
    </Container>
  );
}

