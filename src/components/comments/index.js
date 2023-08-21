import React from 'react'
import {Box} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import Post from "../../components/posts";
import {usePost} from "../../hooks/Posts";
import NewComment from './NewComment';
import Commentlist from './Commentlist';


export default function Comment() {
  const {id}=useParams();
  const {post,isLoading}=usePost(id);
  
  if(isLoading) 
  return "Loading...";


  return (
      <Box align="center" pt="50">
        <Post post={post}/>
        <NewComment post={post}/>
        <Commentlist post={post}/>
      </Box>
  );
}

