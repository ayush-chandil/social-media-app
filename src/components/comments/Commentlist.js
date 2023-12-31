import React from 'react'
import {Box} from '@chakra-ui/react';
import {useComments} from "../../hooks/comments";
import Comment from "./Comment";

export default function Commentlist({post}) {
   const {id}=post;
   const {comments,isLoading}=useComments(id);

    if(isLoading)
        return "Loading...";

       
    
     return (
        <Box>
            {comments.map((comment)=>(
                <Comment key={comment.id} comment={comment}/>
            ))}
        </Box>
     );
     
    
}
