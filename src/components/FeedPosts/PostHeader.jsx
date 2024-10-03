import {
  Avatar,
  Box,
  Button,
  Flex,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    post.createdBy
  );

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar
              src={creatorProfile.profilePicURL}
              alt="user profile pic"
              size={"sm"}
            />
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}

        <Flex fontSize={12} fontWeight={"bold"} gap="2">
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          ) : (
            <Skeleton w={"100px"} h={"10px"} />
          )}

          <Box color={"gray.500"}>• {timeAgo(post.createdAt)}</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          size={"xs"}
          bg={"transparent"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;

//! Dyanmic Story option

// import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import useFollowUser from "../../hooks/useFollowUser";
// import { timeAgo } from "../../utils/timeAgo";

// const PostHeader = ({ post, creatorProfile }) => {
// 	const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);

// 	// Add profilePicURL only if it exists
// 	const images = creatorProfile && creatorProfile.profilePicURL ? [creatorProfile.profilePicURL] : [];

// 	return (
// 		<>
// 			{/* Image Gallery */}
// 			{images.length > 0 && (
// 				<Flex
// 					gap={4}
// 					overflowX={"scroll"}
// 					pb={4}
// 					css={{
// 						// Hide scrollbar in WebKit-based browsers
// 						"&::-webkit-scrollbar": { display: "none" },
// 						// Hide scrollbar in Firefox
// 						scrollbarWidth: "none",
// 						// Enable smooth scrolling
// 						scrollBehavior: "smooth",
// 					}}
// 				>
// 					{images.map((src, idx) => (
// 						<Box key={idx} minW={"70px"} h={"70px"}>
// 							<Avatar
// 								src={src}
// 								alt={`Image ${idx + 1}`}
// 								size="md"  // Adjust size if needed
// 							/>
// 						</Box>
// 					))}
// 				</Flex>
// 			)}

// 			{/* Post Header */}
// 			<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
// 				<Flex alignItems={"center"} gap={2}>
// 					{creatorProfile ? (
// 						<Link to={`/${creatorProfile.username}`}>
// 							<Avatar src={creatorProfile.profilePicURL} alt='user profile pic' size={"sm"} />
// 						</Link>
// 					) : (
// 						<SkeletonCircle size='10' />
// 					)}

// 					<Flex fontSize={12} fontWeight={"bold"} gap='2'>
// 						{creatorProfile ? (
// 							<Link to={`/${creatorProfile.username}`}>{creatorProfile.username}</Link>
// 						) : (
// 							<Skeleton w={"100px"} h={"10px"} />
// 						)}

// 						<Box color={"gray.500"}>• {timeAgo(post.createdAt)}</Box>
// 					</Flex>
// 				</Flex>
// 				<Box cursor={"pointer"}>
// 					<Button
// 						size={"xs"}
// 						bg={"transparent"}
// 						fontSize={12}
// 						color={"blue.500"}
// 						fontWeight={"bold"}
// 						_hover={{
// 							color: "white",
// 						}}
// 						transition={"0.2s ease-in-out"}
// 						onClick={handleFollowUser}
// 						isLoading={isUpdating}
// 					>
// 						{isFollowing ? "Unfollow" : "Follow"}
// 					</Button>
// 				</Box>
// 			</Flex>
// 		</>
// 	);
// };

// export default PostHeader;
