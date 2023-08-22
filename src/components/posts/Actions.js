import {Flex,IconButton} from "@chakra-ui/react";
import {FaRegHeart,FaHeart,FaComment,FaRegComment,FaTrash} from 'react-icons/fa';
import { PROTECTED } from "../../lib/routes";
import {useAuth} from "../../hooks/auth";
import {Link} from 'react-router-dom';
import { useToggleLike,useDeletePost} from "../../hooks/Posts";
import {useComments} from "../../hooks/comments";

export default function Actions({post}) {
  
  const {likes,id}=post;
  const {user,isLoading:userLoading}=useAuth();
 
  const isLiked=likes.includes(user?.id);
  const config={id,isLiked,uid:user?.id};
  
  
  const {toggleLike,isLoading:likeLoading}=useToggleLike(config);
  const {comments,isLoading:commentLoading}=useComments(id);
  const {deletePost,isLoading:deleteLoading}=useDeletePost(id);


  
    return (
      <Flex p="2">
        <Flex alignItems="center">
            <IconButton onClick={toggleLike}  isLoading={likeLoading ||userLoading} size="md" colorScheme="red" variant="ghost" 
            icon={isLiked? <FaHeart/>:<FaRegHeart/>}  isRound/>
            {likes.length}
            
        </Flex>
        <Flex alignItems="center" ml="2">
        <IconButton size="md"as={Link}  to={`${PROTECTED}/comments/${id}`} colorScheme="teal" variant="ghost"  isLoading={commentLoading}
            icon={comments?.length===0?<FaRegComment/>:<FaComment/>}  isRound/>
             {comments?.length}
        </Flex>

        <Flex alignItems="center" ml="auto">
        <IconButton onClick={deletePost} isLoading={deleteLoading} size="md"  colorScheme="red" variant="ghost" 
            icon={<FaTrash/>}  isRound/>
            
        </Flex>
      </Flex>
   )
}