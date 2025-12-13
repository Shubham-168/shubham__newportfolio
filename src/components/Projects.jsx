import React from "react";
import Slider from "react-slick";
import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Button,
  VStack,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import resumeData from "../data/resumeData";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MotionBox = motion(Box);


function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="next"
      icon={<ChevronRightIcon />}
      onClick={onClick}
      pos="absolute"
      right="-12px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="20"
      rounded="full"
      colorScheme="blue"
      shadow="md"
      size="sm"
      display={{base: "block", md: "none"}}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="previous"
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      pos="absolute"
      left="-12px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="20"
      rounded="full"
      colorScheme="blue"
      shadow="md"
      size="sm"
      display={{base: "block", md: "none"}}
    />
  );
}

export default function Projects() {
  // use breakpoint to tweak slidesToShow if needed in Chakra
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 3;

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500, // transition duration (ms) - smooth and slow
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200, // time between auto transitions (ms) - smaller so movement looks continuous with long speed
    cssEase: "linear", // linear easing for smooth continuous feel
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // rtl true to make it move right -> left visually
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box id="projects" maxW="1200px" mx="auto" py={6} px={{ base: 6, md: 4 }}>
      <Heading className="gradient-text" as="h2" size="xl" mb={2} textAlign="center">
        Recent Projects
      </Heading>
      <Text fontSize="sm" color="gray.500" textAlign="center" mb={6}>
        Exploring a Selection of My Diverse Creations
      </Text>

      <Box position="relative" px={{ base: 0, md: 2 }}>
        <Box
          pointerEvents="none"
          position="absolute"
          left={0}
          top={0}
          bottom={0}
          display={{base: "none", md: "block"}}
          width={{ base: "1%", md: "2%", lg: "4%" }}
          zIndex={30}
          bgGradient="linear(to-r, rgba(255,255,255,1), rgba(255,255,255,0))"
        />

        <Slider {...settings}>
          {resumeData.projects.map((project, index) => (
            <Box key={index} px={3} py={2}>
              <Box
                bg="white"
                rounded="lg"
                shadow="lg"
                overflow="hidden"
                _hover={{ transform: "translateY(-6px)", shadow: "2xl" }}
                transition="transform 300ms ease, box-shadow 300ms ease"
                maxW="320px"
                h={{base: "450px", md: "500px"}}
                overflowY={{base: "auto", md: "hidden"}}
                scrollbarWidth={{base: "thin", md: "none"}}
                scrollbarColor={{base: "gray.300 transparent", md: "transparent"}}
                mx="auto"
              >
                {/* Banner */}
                {project.banner && (
                  <Image
                    src={project.banner}
                    alt={project.title}
                    objectFit="cover"
                    w="100%"
                    h={{ base: "140px", md: "160px" }} // smaller heights
                  />
                )}

                {/* Content */}
                <VStack align="start" spacing={3} p={4}>
                  <Heading size="sm" color="red.500">
                    {project.title}
                  </Heading>
                  <Text fontSize="xs"  height={{md: '160px'}}   color="gray.600" >
                    {project.desc}
                  </Text>

                  {/* Tech icons */}
                  {project.tech?.length > 0 && (
                    <HStack spacing={{base: 2, md: 1}} w-full flexWrap="wrap">
                      {project.tech.map((tech, i) => (
                        <MotionBox
                          key={i}
                          whileHover={{ rotateX: 360, transition: { duration: 0.6 } }}
                          w={{base: "14px", md: "40px"}}
                          h={{base: "30px", md: "48px"}}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Image
                            key={i}
                            src={tech.logo}
                            alt={tech.name}
                            boxSize="30px"
                            objectFit="contain"
                            title={tech.name}
                          />
                        </MotionBox>
                      ))}
                    </HStack>
                  )}

                  {/* Buttons */}
                  <Flex w="100%" justify='center' mt={0}>
                    <Button
                      as="a"
                      href={project.url || project.live}
                      target="_blank"
                      colorScheme="orange"
                      _hover={{ bg: "green.500" }}
                      size='sm'
                      rightIcon={<ExternalLinkIcon />}
                    >
                      View Live
                    </Button>
                  </Flex>
                </VStack>
              </Box>
            </Box>
          ))}
        </Slider>

        <Box
          pointerEvents="none"
          position="absolute"
          right={0}
          top={0}
          bottom={0}
          display={{base: "none", md: "block"}}
          width={{ base: "1%", md: "2%", lg: "4%" }}
          zIndex={30}
          bgGradient="linear(to-l, rgba(255,255,255,1), rgba(255,255,255,0))"
        />

      </Box>

    </Box>
  );
}
