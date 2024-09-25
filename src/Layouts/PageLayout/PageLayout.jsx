import {Flex,Box, Spinner} from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';  
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

// instead of using the Sidebar component directly to every page, we will add it to the PageLayout component and wrap with the children prop.this way, we can use the Sidebar component in every page without repeating the code. except for the auth page, we will not show the sidebar in the auth page.

 const PageLayout =({children})=> {
 const {pathname} = useLocation();
 const [user,loading]=useAuthState(auth);
 const canRenderSidebar = pathname !== "/auth" && user;
 const canRenderNavbar = !user && !loading && pathname !== "/auth"; 
 const checkingUserIsAuth=!user && loading
 if(checkingUserIsAuth){
     return <PageLayoutSpinner/>
 }

  return (
    <Flex flexDir={canRenderNavbar ? "column" :"row"}>
    {/* sidebar on the left */}
    {canRenderSidebar ? (
        <Box w={{base:"70px",md:"240px"}}>
            <Sidebar/>
        </Box>
    ): null} 
    {/* Navbar */}
    {canRenderNavbar ? <Navbar/> : null} 
    {/* the page content on the right */}
    <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}}>
        {children}
    </Box>
    </Flex>

  )
}

export default PageLayout;

const PageLayoutSpinner=()=>{
  return (
    <Flex flexDir={"column"}  h={"100vh"} alignItems={"center"} justifyContent={"center"}>
    <Spinner size="xl"/>
    </Flex>
  )
}