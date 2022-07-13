import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/Hampton.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
      Turnik and brusya
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      mb="30px"
    >
      Easy to start <br />
      Easy to follow
    </Typography>
    <Button
      variant="contained"
      color="error"
      href="#exercises"
      // sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="100px"
    >
      Explore Exercises
    </Button>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      // overflow:hidden
      // object-fit:cover
      // class="cover"
      style={{ width: "750px", height: "850px" }}
    />
  </Box>
);

export default HeroBanner;
