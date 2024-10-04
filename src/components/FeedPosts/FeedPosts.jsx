// import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
// import FeedPost from "./FeedPost";
// import useGetFeedPosts from "../../hooks/useGetFeedPosts";

// const FeedPosts = () => {
// 	const { isLoading, posts } = useGetFeedPosts();

// 	return (
// 		<Container maxW={"container.sm"} py={10} px={2}>
// 			{isLoading &&
// 				[0, 1, 2].map((_, idx) => (
// 					<VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
// 						<Flex gap='2'>
// 							<SkeletonCircle size='10' />
// 							<VStack gap={2} alignItems={"flex-start"}>
// 								<Skeleton height='10px' w={"200px"} />
// 								<Skeleton height='10px' w={"200px"} />
// 							</VStack>
// 						</Flex>
// 						<Skeleton w={"full"}>
// 							<Box h={"400px"}>contents wrapped</Box>
// 						</Skeleton>
// 					</VStack>
// 				))}

// 			{!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
// 			{!isLoading && posts.length === 0 && (
// 				<>
// 					<Text fontSize={"md"} color={"red.400"}>
// 						Dayuum. Looks like you don&apos;t have any friends.
// 					</Text>
// 					<Text color={"red.400"}>Stop coding and go make some!!</Text>
// 				</>
// 			)}
// 		</Container>
// 	);
// };

// export default FeedPosts;

import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack, Image } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import { image } from "framer-motion/client";

const ImageGallery = () => {
	const images = [
		// "https://via.placeholder.com/400x400", // replace these URLs with actual image URLs
		
		"/img1.png",
		"/img2.png",
		"/img3.png",
		"/img4.png",
		"/google.png",
		"/microsoft.png",
		"/playstore.png",
		"/auth.png",
		"/google.png",
		"/microsoft.png",
		"/playstore.png",
		"/auth.png",
		// "https://via.placeholder.com/400x400",
	];

	return (
		<Flex gap={4} overflowX={"scroll"} pb={4}
		css={{
				// Hide scrollbar in WebKit-based browsers
				"&::-webkit-scrollbar": { display: "none" },
				// Hide scrollbar in Firefox
				scrollbarWidth: "none",
				// Enable smooth scrolling
				scrollBehavior: "smooth",
				gap: "0",
			}}>
			{images.map((sr, idx) => (
				<Box key={idx} minW={"100px"} h={"100px"}>
					<Image 
						src={sr} 
						alt={`Image ${idx + 1}`} 
						w="65px"
						h="65px" 
						borderRadius={"full"} 
						objectFit={"cover"} 
						scrollBehavior={"smooth"}
					
					/>
				</Box>
			))}
		</Flex>
	);
};

const FeedPosts = () => {
	const { isLoading, posts } = useGetFeedPosts();

	return (
		<Container maxW={"container.sm"} py={10} px={2}>
			{/* Image Gallery */}
			<ImageGallery />

			{/* Feed Post Skeletons while loading */}
			{isLoading &&
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
						<Flex gap='2'>
							<SkeletonCircle size='10' />
							<VStack gap={2} alignItems={"flex-start"}>
								<Skeleton height='10px' w={"200px"} />
								<Skeleton height='10px' w={"200px"} />
							</VStack>
						</Flex>
						<Skeleton w={"full"}>
							<Box h={"400px"}>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

			{/* Display feed posts */}
			{!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}

			{/* No posts available */}
			{!isLoading && posts.length === 0 && (
				<>
					<Text fontSize={"md"} color={"red.400"}>
						Dayuum. Looks like you don&apos;t have any friends.
					</Text>
					<Text color={"red.400"}>Stop coding and go make some!!</Text>
				</>
			)}
		</Container>
	);
};

export default FeedPosts;
