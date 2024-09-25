import { Flex, Avatar, Box, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";

// Destructure props correctly
const SuggestedUser = ({ followers, name, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2} >
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name} {/* Use name here to display the user's name */}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {followers} followers {/* Display followers */}
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        cursor={"pointer"}
        color={"blue.400"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"} {/* Button toggles Follow/Unfollow */}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
