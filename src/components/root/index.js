import React from 'react'
import {Box,Button,Center} from '@chakra-ui/react'
import { LOGIN } from '../../lib/routes';
import { useNavigate } from 'react-router-dom';

function Root() {
    const navigate=useNavigate();
 
    const change=()=>{
     navigate(LOGIN);
  }

  return (
    <Box bgImage="url(https://i.postimg.cc/QdKYWzx8/feedback-2990424-1280.jpg)">
    <Center w="100%" h="100vh">
        
     <Button onClick={change} color="white" backgroundColor="green">LOGIN</Button>
     </Center>
     </Box>
    
    
  )
}

export default Root