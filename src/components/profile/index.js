import React, { useEffect, useState } from 'react';
import { Divider, Flex, HStack, Stack, Text} from "@chakra-ui/react";
import PostsList from "../posts/Postlist";
import { usePosts } from "../../hooks/Posts";
import { useUser } from '../../hooks/users';
import { useParams } from 'react-router-dom';
import Avatar from './Avatar';
import { format } from 'date-fns';


function Profile(){
    
    const { id } = useParams(); // Extracting the ID parameter from the URL using the useParams hook
    const { posts, isLoading: postsLoading } = usePosts(id); // Fetching the user's posts and loading status using the usePosts hook
    const { user, isLoading: userLoading } = useUser(id); // Fetching the user data and loading status using the useUser hook
    const [totalLikes, setTotalLikes] = useState(0);
  
    useEffect(() => {
      let likes = 0;
      if (posts) {
        posts.forEach(post => {
          likes += post.likes.length;
        });
      }
      setTotalLikes(likes);
    }, [posts]);
  
    if (userLoading) return "Loading...";

    return (
        <Stack spacing="5">
          <Flex p={["4", "6"]} pos="relative" align="center">
            <Avatar size="2xl" user={user} /> {/* Render the user's avatar using the Avatar component */}
            
            <Stack ml="10">
              {/* ... */}
              <HStack spacing="10">
                <Text color="gray.700" fontSize={["sm", "lg"]}>
                  Posts: {posts ? posts.length : 0}
                </Text>
                <Text color="gray.700" fontSize={["sm", "lg"]}>
                  Likes: {totalLikes}
                </Text>
                <Text color="gray.700" fontSize={["sm", "lg"]}>
                  Joined: {format(user.date, "MMMM yyyy")}
                </Text>
              </HStack>
            </Stack>
        
          </Flex>
          <Divider />
          {postsLoading ? (
            <Text>Posts are loading...</Text>
          ) : (
            <PostsList posts={posts} /> 
          )}
        </Stack>
      );
    };
    
export default Profile;