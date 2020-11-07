import React, { useContext } from "react";
import { Box } from "@chakra-ui/core";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import FilterSidebar from "../components/FilterBar/FilterSidebar";

import { Context } from "../Context";

function Homepage() {
  const { isSearch, searchResults } = useContext(Context);

  const headerStyles = {
    position: "absolute",
    top: "100px",
    color: "white",
    left: "150px",
    fontSize: "25px",
    fontWeight: "100"
  };

  return (
    <Box
      bg="primaryBackground"
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll"
      }}
    >
      <h1 style={headerStyles}>{isSearch ? null : "Popular Movies"}</h1>
      <NavBar />
      <FilterSidebar />
      <Grid searchResults={searchResults} />
    </Box>
  );
}

export default Homepage;
