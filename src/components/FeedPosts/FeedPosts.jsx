import { Container, Flex, Skeleton, SkeletonCircle, VStack,Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost';

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <Container maxW={"container.sm"} py={10} px={2}>
    {isLoading && [0,1,2,3].map((_,idx) =>(
     <VStack key={idx}  gap={4} alignItems={"flex-start"} mb={10} >
      <Flex gap={2}>
        <SkeletonCircle size={10}/>
        <VStack gap={2} alignItems={"flex-start"}>
          <Skeleton height ='10px' w={"200px"}/>
          <Skeleton height ='10px' w={"200px"}/> 
        </VStack>
      </Flex>
      <Skeleton w={"full"}>
      <Box h={"500px"}> contents wrapped</Box> 
      </Skeleton>
     
     </VStack>
     
    ) )}
    {!isLoading && (
      <>
    <FeedPost img='/img1.png' username='asaprogrammer' avatar='/img1.png'caption='Feeling Good'/>
    <FeedPost img='/img2.png' username='aush' avatar='/img2.png'caption='Feeling Good'/>
    <FeedPost img='/img3.png' username='ammi' avatar='/img3.png'caption='Feeling Good'/>
    <FeedPost img='/img4.png' username='avi' avatar='/img4.png'caption='Feeling Good'/>
      </>
    )}

    
    </Container>
   

  )
}
export default FeedPosts; // Correct default export