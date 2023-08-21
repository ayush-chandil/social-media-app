import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Avatar from "../profile/Avatar";
import UsernameButton from "../profile/UsernameButton";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "../../hooks/users";
import { useAuth } from "../../hooks/auth";
import { useDeleteComment } from "../../hooks/comments";

import { FaTrash } from "react-icons/fa";

export default function Comment({ comment }) {
    const { text, date, uid, id } = comment;


    const { user, isLoading: userLoading } = useUser(uid); // Fetching the user data and loading status using the useUser hook
    const { user: authUser, isLoading: authLoading } = useAuth(); // Fetching the authenticated user data and loading status using the useAuth hook
    const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id); 

    if (userLoading) {
        return "..Loading";
    }

    return (
        <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
            <Flex pb="2">
                <Avatar user={user} size="sm" /> {/* Displaying the avatar of the user who made the comment */}
                <Box flex="1" ml="4">
                    <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
                        <Box>
                            <UsernameButton user={user} />
                            <Text fontSize="xs" color="gray.500">
                                {formatDistanceToNow(date)} ago {/* Displaying the time elapsed since the comment was made */}
                            </Text>
                        </Box>
                        {!authLoading && authUser.id===uid && (

                        <IconButton onClick={deleteComment} size="sm"
                        isLoading={deleteLoading}
                            ml="auto"
                            icon={<FaTrash />}
                            variant="ghost"
                            colorScheme="red" isRound/>
                        )}

                    </Flex>
                    <Box pt="2" fontSize="sm">
                        <Text>{text}</Text> {/* Displaying the comment text */}
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

