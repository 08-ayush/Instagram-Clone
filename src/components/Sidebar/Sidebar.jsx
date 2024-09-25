import React from "react";
import { Avatar, Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramMobileLogo,
  InstagramLogo,
  SearchLogo,
  NotificationsLogo,
  CreatePostLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {

  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
      link: "/search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
      link: "/notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
      link: "/create",
    },
    {
      icon: <Avatar size={"sm"} name="Burak orkez" src="/profilepic.png" />,
      text: "Profile",
      link: "/profile",
    },
  ];

  const {handleLogout,isLoggingOut}=useLogout();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 10, md: 4 }}
    >
      <Flex direction={"column"} gap={14} w={"full"} height={"full"}
       alignItems={{ base: "center", md: "flex-start" }} >
        {/* Instagram Logo */}
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
          
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={{ base: 10 }}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>

        {/* Sidebar Items */}
        <Flex
          direction={"column"}
          gap={5}
          cursor={"pointer"}
          // alignItems={{ base: "center", md: "flex-start" }} // Center items on mobile
          height={{ base: "100%", md: "auto" }} // Ensure it takes full height on mobile
        >
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "none", md: "block" }}
            >
              <Link
                display="flex"
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"} // Ensures icons and text are aligned
                gap={4} // Consistent gap between icon and text
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2} // Padding for uniform height
                w={{ base: 10, md: "full" }} // Ensures full width alignment
                justifyContent={{ base: "center", md: "flex-start" }} // Centers icon and text
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
             
              hasArrow
              label={"Logout"}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Flex
              onClick={handleLogout}
                
                alignItems={"center"} // Ensures icons and text are aligned
                gap={4} // Consistent gap between icon and text
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2} // Padding for uniform height
                w={{ base: 10, md: "full" }} // Ensures full width alignment
                justifyContent={{ base: "center", md: "flex-start" }} // Centers icon and text
                mt={"auto"}
              >
              <BiLogOut size={25} />
                <Button display={{ base: "none", md: "block" }}
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                isLoading={isLoggingOut}
                >Logout</Button>
              </Flex>
            </Tooltip> 
      </Flex>
    </Box>
  );
};

export default Sidebar;
