import { Outlet, useLocation, useNavigate } from 'react-router-dom';   //outlet for rendering child routes, 
import React, { useEffect } from 'react'
import { Flex, Box } from '@chakra-ui/react';                           //useLocation for getting pathlocation,usenavigate to navigate programmtically
import { LOGIN} from "../../lib/routes";
import { useAuth } from "../../hooks/auth";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const Layout = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { user, isLoading } = useAuth();


  useEffect(() => {
    if (!isLoading && pathname.startsWith('/protected') && !user) {
      navigate(LOGIN);
    }
  }, [pathname,user,isLoading]);

  if (isLoading) return "Loading auth user...";


  return (
    <>
      <Navbar />
      <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
        <Box w="900px">
          <Outlet/>
        </Box>
        <Sidebar />
      </Flex>

    </>
  )
}

export default Layout