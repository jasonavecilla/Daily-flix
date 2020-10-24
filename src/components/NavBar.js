import React from "react";
import Searchbar from './Searchbar';
import { ThemeProvider, Box, Flex, Link, Image,  Switch , Heading, Stack} from "@chakra-ui/core";

const NavBar = () => {
    return (
        <ThemeProvider>
            <Box className="nav-bar"
              bg="#333"
              w="100%"
              px={5}
              py={2}
            >
          
            <Stack isInline justifyContent="space-between">
              <Stack isInline>
                <Image
                  src="https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png"
                  size={30}
                />
                <Heading as="h3" size="lg" color="#49c3fd">
                  Daily Flix
                </Heading>
              </Stack>
              <Stack isInline>
                <Searchbar />
                <Switch size="sm" ml={2}/>
              </Stack>
            </Stack>
              
            <Box float="right" mr={10}>
              <Link px={2} color="#fff" className="link">My Favorites</Link>
              <Link px={2} color="#fff" className="link">Watched</Link>
              <Link px={2} color="#fff" className="link">Watch List</Link>
            </Box>
          </Box>
      
        </ThemeProvider>
    )
}



export default NavBar;

