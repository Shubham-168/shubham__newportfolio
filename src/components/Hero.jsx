import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import resumeData from "../data/resumeData";
import heroImg from "../assets/profile.png";
import StatsBars from './StatsBar';

export default function Hero() {
  const nameColors = [
    "linear(to-r, #ff8aa9, #9b8cff)",
    "linear(to-r, #00c6ff, #27F5F2)",
    "linear(to-r, #f7971e, #ffd200)",
  ];

  const quoteData = [
    { text: "I am a Creative Developer", gradient: "linear(to-r, #ff8aa9, #9b8cff)" },
    { text: "I build modern UIs", gradient: "linear(to-r, #00c6ff, #27F5F2)" },
    { text: "I craft responsive websites", gradient: "linear(to-r, #f7971e, #ffd200)" },
    { text: "I love animations & design", gradient: "linear(to-r, #a1ffce, #faffd1)" },
  ];

  const [nameColorIndex, setNameColorIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setNameColorIndex((prev) => (prev + 1) % nameColors.length);
    }, 5000);
    return () => clearInterval(nameInterval);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quoteData.length);
    }, 5000);
    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <Box
      id="home"
      className="hero-bg"
      py={{ base: 5, md: 10 }}
      px={{ base: 6, md: 24 }}
    >
      <Flex
        align="center"
        justify="space-between"
        className="hero-layout"
        gap={8}
        direction={{ base: "column", md: "row" }}
      >
        {/* Mobile Image (Top) */}
        <Box
          flex="1"
          display={{ base: "block", lg: "none" }}
          textAlign="center"
          mt={{ base: 10, md: 0 }} // added margin-top for space below navbar
          mb={{ base: 0, md: 0 }}
        >
          <Box
            as="img"
            src={heroImg}
            alt="hero"
            maxW={{ base: "220px", sm: "280px" }}
            mx="auto"
            borderRadius="xl"
            objectFit="contain"
          />
        </Box>

        {/* Left Column (Text + Stats + Button) */}
        <Box flex="1" maxW={{ md: "50%" }} mt={{ base: 2, md: 10 }}>
          <Text color="gray.500" fontSize={{ base: "md", md: "lg" }} mb={2}>
            Hello there, my name is
          </Text>

          <Heading
            as="h1"
            className="hero-name"
            mb={3}
            bgGradient={nameColors[nameColorIndex]}
            bgClip="text"
          >
            <Typewriter
              words={[`${resumeData.name} ${resumeData.surname}`, "Full Stack Developer...!"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={4000}
            />
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            fontWeight={700}
            mb={8}
            bgGradient={quoteData[quoteIndex].gradient}
            bgClip="text"
          >
            <Typewriter
              words={quoteData.map((q) => q.text)}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </Text>

          {/* Stats Section */}
          <Box display="flex" justifyContent={{ base: "center", md: "flex-start" }}>
            <StatsBars />
          </Box>

          {/* Hire Me Button */}
          <Flex justify={{ base: "center", md: "flex-start" }} mt={8}>
            <Button
              size="lg"
              px={8}
              borderRadius="2xl"
              bgGradient="linear(to-r, #ff8aa9, #9b8cff)"
              color="white"
              _hover={{ opacity: 0.9 }}
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </Button>
          </Flex>
        </Box>

        {/* Desktop Image (Right Column) */}
        <Box
          flex="1"
          display={{ base: "none", lg: "block" }}
          textAlign="right"
        >
          <Box
            as="img"
            src={heroImg}
            alt="hero"
            maxW={{ md: "390px", lg: "400px" }}
            ml="auto"
            borderRadius="xl"
            objectFit="contain"
          />
        </Box>
      </Flex>
    </Box>
  );
}
