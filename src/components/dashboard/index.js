import { HStack, Box, Heading, Button, Textarea } from '@chakra-ui/react';
import React from 'react'
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from 'react-hook-form';
import { useAuth } from "../../hooks/auth";
import { useAddPost,usePosts} from "../../hooks/Posts";
import Postlist from  "../posts/Postlist";

export function NewPost () {
  const { register, handleSubmit ,reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();
 
 
  function handlePost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    })

    reset();
  }

  return (
    <Box max="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handlePost)}>
        <HStack justify="space-around">
          <Heading size="lg">New Post</Heading>
          <Button colorScheme='teal' type="submit" isLoading={authLoading || addingPost} loadingtext="Loading">Post</Button>

        </HStack>

        <Textarea as={TextareaAutosize} resize="none" mt="5" placeholder="Create a New Post..." minRows={3} {...register('text', { required: true })} />

      </form>
    </Box>
  );

}

export default function Dashboard  () {
   const {posts,isLoading:postLoading}=usePosts();
   
   if(postLoading) return "Loading posts...";

  return (
    <>
      <NewPost />
      <Postlist posts={posts}/>
    </>
    
  );
}

