import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../lib/Firebase";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {DASHBOARD} from "../lib/routes";
import { useToast } from '@chakra-ui/react'


export function useAuth() {
  const [authUser, isLoading, error] = useAuthState(auth);

  return { user: authUser, isLoading, error };
}

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const navigate=useNavigate();
  const toast=useToast();

  async function login({ email, password, redirectTo = DASHBOARD }) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(email, password, auth);
      toast({
         title:"You are logged In",
         status:"success",
         isClosable: true,
         position:"top",
         duration:5000,  
      });
         navigate(redirectTo);
    }
    catch (error) {
        toast({
          title:"Logging in failed",
          status:error.message,
          isClosable: true,
          position:"top",
          duration:5000,  
        });
        setLoading(false);
        return false;
    }
  
    setLoading(false);
   return true;
  }
   return {login,isLoading};
}

