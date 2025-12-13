// TechStackCarousel.jsx
import React from "react";
import Slider from "react-slick";
import { Box, Heading, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bear from "../assets/zustand.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MotionBox = motion(Box);

const techIcons = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NEXT.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Zustand", src: bear },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
];


const techIconsTwo = [
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Postman", src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "ChatGPT", src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Cursor AI", src: "https://cursor.sh/favicon.ico" },
  { name: "Material UI", src: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
  { name: "REST API", src: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
];

export default function TechStackCarousel() {
  // responsive slidesToShow
  const slidesToShow = useBreakpointValue({ base: 3, sm: 4, md: 6, lg: 8 }) || 6;

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,      
    slidesToShow,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,      
    cssEase: "linear",
    pauseOnHover: true,
    rtl: true,             
    arrows: false,     
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.max(3, Math.floor(slidesToShow * 0.75)) } },
      { breakpoint: 640, settings: { slidesToShow: Math.max(2, Math.floor(slidesToShow * 0.5)) } },
    ],
  };

  return (
    <Box py={8}  px={{ base: 3, md: 6 }} bg="#e8f8f4">
      <Heading mb={6} textAlign="center" fontSize={{ base: "lg", md: "2xl" }} color="gray.700">
        Working With Latest <br/> Technologies & Stack
      </Heading>

      <Box maxW="88%" mx="auto" position="relative">
        <Slider {...settings}>
          {techIcons.concat(techIconsTwo).map((tech, i) => {
      
            return (
              <Box key={`${tech.name}-${i}`} px={3} display="flex" justifyContent="center" alignItems="center">
                <MotionBox
                  w={{ base: "26px", md: "50px" }}
                  h={{ base: "60px", md: "50px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    boxSize="80px"    
                    objectFit="contain"
                    draggable={false}
                    fallbackSrc=""
                    title={tech.name}
                    sx={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.08))" }}
                  />
                </MotionBox>
              </Box>
            );
          })}
        </Slider>
        <Slider {...settings}>
          {techIconsTwo.concat(techIcons).map((tech, i) => {
            // duplicate icons so slick can scroll smoothly and feel continuous
            return (
              <Box key={`${tech.name}-${i}`} px={3} display="flex" justifyContent="center" alignItems="center">
                <MotionBox
                  w={{ base: "26px", md: "50px" }}
                  h={{ base: "60px", md: "50px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    boxSize="80px"    
                    objectFit="contain"
                    draggable={false}
                    fallbackSrc=""
                    title={tech.name}
                    sx={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.08))" }}
                  />
                </MotionBox>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
