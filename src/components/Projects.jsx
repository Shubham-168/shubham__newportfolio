import React from "react"
import Slider from "react-slick"
import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Icon,
  Button,
  VStack,
  Flex,
  IconButton,
} from "@chakra-ui/react"
import { ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import resumeData from "../data/resumeData"
import { color } from "framer-motion"

// === Arrows ===
function NextArrow(props) {
  const { onClick } = props
  return (
    <IconButton
      aria-label="next"
      icon={<ChevronRightIcon />}
      onClick={onClick}
      pos="absolute"
      right="-14px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="10"
      rounded="full"
      colorScheme="blue"
      shadow="lg"
    />
  )
}
function PrevArrow(props) {
  const { onClick } = props
  return (
    <IconButton
      aria-label="previous"
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      pos="absolute"
      left="-14px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="10"
      rounded="full"
      colorScheme="blue"
      shadow="lg"
    />
  )
}

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Box id="projects" maxW="1000px" mx="auto" py={12} px={{ base: 6, md: 0 }}>
      <Heading className="gradient-text" as="h2" size="xl" mb={2} textAlign="center">
        Recent Projects
      </Heading>
      <p className="text-sm font-sans text-gray-500 font-normal text-center pb-6">
        Exploring a Selection of My Diverse Creations
      </p>

      <Slider {...settings}>
        {resumeData.projects.map((project, index) => (
          <Box key={index} px={3}>
            <Box
              bg="white"
              rounded="2xl"
              shadow="xl"
              overflow="hidden"
              _hover={{ transform: "translateY(-6px)", shadow: "2xl" }}
              transition="0.3s ease"
              maxW="800px"
              mx="auto"
            >
              {/* Banner */}
              {project.banner && (
                <Image
                  src={project.banner}
                  alt={project.title}
                  objectFit="cover"
                  w="100%"
                  h={{ base: "200px", md: "300px" }}
                />
              )}

              {/* Content */}
              <VStack align="start" spacing={4} p={6}>
                <Heading size="md" color='red.500'>{project.title}</Heading>
                <Text fontSize="sm" color="gray.600">
                  {project.desc}
                </Text>

                {/* Tech icons */}
                {project.tech?.length > 0 && (
                  <HStack spacing={3} flexWrap="wrap">
                    {project.tech.map((tech, i) => (
                      <Image
                        key={i}
                        src={tech.logo}
                        alt={tech.name}
                        boxSize="30px"
                        objectFit="contain"
                        title={tech.name}
                      />
                    ))}
                  </HStack>
                )}


                {/* Buttons */}
                <Flex w="100%" justify="flex-end">
                  <Button
                    as="a"
                    href={project.url || project.live}
                    target="_blank"
                    colorScheme="orange"
                    _hover={{ bg: "green.500" }}
                    size="sm"
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
    </Box>
  )
}
