import React from 'react'; 
import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { DASHBOARD, LOGIN} from '../../lib/routes';
import {useRegister} from '../../hooks/auth';
import { useForm } from 'react-hook-form';
import { emailValidate, passwordValidate, usernameValidate } from "../../utils/form-validate";


const Register = () => {
  const {register:signup, isLoading} = useRegister();
  const {register,handleSubmit, formState:{errors}} = useForm();

  //console.log(errors); 

  async function handleRegister(data) {
      signup({
        username:data.username,
        email:data.email,
        password:data.password,
        redirectTo:DASHBOARD,

      })
  }

return (
  <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
          <Heading mb="4" size="lg" textAlign="center">Register</Heading>

          <form onSubmit={handleSubmit(handleRegister)}>
          <FormControl isInvalid={errors.username} py="2">
                  <FormLabel>Username</FormLabel>
                  <Input type="text" placeholder='username' {...register('username', usernameValidate)} />
                  <FormErrorMessage>{errors.usernmae && errors.username.message}</FormErrorMessage>
              </FormControl>

        
          <FormControl isInvalid={errors.email} py="2">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder='user@email.com' {...register('email', emailValidate)} />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
              </FormControl>
             

              <FormControl isInvalid={errors.password} py="2">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder='Password' {...register('password', passwordValidate)} />
                  <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
              </FormControl>
              {/* Submit button */}
              <Button mt="4" type='submit' colorScheme='teal' size='md' w='full' isLoading={isLoading} loadingText="Logging In">Register</Button>
          </form>

          <Text fontSize="xlg" align="center" mt="6">
             Have an account?{" "}
              <Link
                  as={RouterLink}
                  to={LOGIN}
                  color="teal.800"
                  fontWeight="medium"
                  textDecor="underline"
                  _hover={{ background: "teal.100" }}
              >
                  Login
              </Link>{" "}
              instead!
          </Text>
      </Box>
  </Center>
)
}

export default Register;