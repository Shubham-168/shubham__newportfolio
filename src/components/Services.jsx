import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa"; 
import resumeData  from "../data/resumeData"; 

export default function Services() {
  return (
    <Box id="services" px={{ base: 6, md: 24 }} py={16}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
        {/* Left side text */}
        <Box>
          <Heading as="h2" size="2xl">
            My Awesome <Text as="span" color="cyan.400">Services</Text>
          </Heading>
          <Text mt={4} color="gray.600">
            I specialize in frontend and full-stack development, delivering
            scalable, responsive, and performance-optimized applications.
          </Text>
          {/* <Button mt={6} bg="black" color="white" _hover={{ bg: "gray.800" }}>
            DISCOVER ALL
          </Button> */}
        </Box>

        {/* Right side cards */}
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
          {resumeData.services.map((s, i) => (
            <VStack
              key={i}
              p={6}
              borderRadius="xl"
              bg="white"
              boxShadow="lg"
              align="start"
              spacing={4}
            >
              {/* Use an icon if you have one in resumeData, fallback to code icon */}
              <Box fontSize="3xl" color="cyan.400">
                {s.icon ? <s.icon /> : <FaCode />}
              </Box>

              <Heading size="md">{s.title}</Heading>
              <Text color="gray.600">{s.desc}</Text>

              {/* <Button
                size="sm"
                bg="black"
                color="white"
                _hover={{ bg: "gray.800" }}
              >
                SEE MORE
              </Button> */}
            </VStack>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
