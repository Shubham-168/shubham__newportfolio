import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Text, Heading, Button, useToast } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resumeData from "../data/resumeData";
import heroImg from "../assets/profile.png";
import StatsBars from './StatsBar';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Hero() {
  const toast = useToast();
  const nameColors = [
    "linear(to-r, #ff8aa9, #9b8cff)",
    "linear(to-r, #00c6ff, #27F5F2)",
    "linear(to-r, #f7971e, #ffd200)",
    "linear(to-r,rgb(57, 82, 68),rgb(209, 255, 220))",
    "linear(to-r, #ff6b9d, #c471ed, #12c2e9)",
  ];

  const quoteData = [
    { text: "I am a Creative Developer", gradient: "linear(to-r, #ff8aa9, #9b8cff)" },
    { text: "I build modern UIs", gradient: "linear(to-r, #00c6ff, #27F5F2)" },
    { text: "I craft responsive websites", gradient: "linear(to-r, #f7971e, #ffd200)" },
    { text: "I love animations & design", gradient: "linear(to-r,rgb(25, 27, 26), #faffd1)" },
  ];

  const [nameColorIndex, setNameColorIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showDownloadInHero, setShowDownloadInHero] = useState(true);
  const containerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations for mouse tracking
  const springConfig = { damping: 50, stiffness: 100 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        mouseX.set(x);
        mouseY.set(y);
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setNameColorIndex((prev) => (prev + 1) % nameColors.length);
    }, 4000);
    return () => clearInterval(nameInterval);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quoteData.length);
    }, 4000);
    return () => clearInterval(quoteInterval);
  }, []);

  // Scroll detection to hide download button in hero when hero section is out of view
  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const rect = heroSectionRef.current.getBoundingClientRect();
        // Hide download button in hero when hero section bottom is above viewport
        setShowDownloadInHero(rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  // Transform values for parallax
  const backgroundX = useTransform(cursorX, (x) => x * 0.5);
  const backgroundY = useTransform(cursorY, (y) => y * 0.5);
  const imageX = useTransform(cursorX, (x) => x * 0.3);
  const imageY = useTransform(cursorY, (y) => y * 0.3);

  // Handle resume download
  const handleDownload = async () => {
    try {
      const response = await fetch("/Shubham_Saini_NewResume.pdf");
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Shubham_Saini_NewResume.pdf";
      link.click();
      window.URL.revokeObjectURL(url);

      toast({
        title: "Download Successful!",
        description: "Your resume has been downloaded 🚀",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download Failed",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      id="home"
      position="relative"
      py={{ base: 8, md: 16 }}
      px={{ base: 6, md: 24 }}
      minH={{ base: "auto", md: "90vh" }}
      overflow="hidden"
      ref={(node) => {
        containerRef.current = node;
        heroSectionRef.current = node;
      }}
      bg="gray.50"
    >
      {/* Advanced Animated Gradient Background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={0}
        overflow="hidden"
      >
        {/* Dynamic mesh gradient background */}
        <MotionBox
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 138, 169, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(155, 140, 255, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(0, 198, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 10% 80%, rgba(247, 151, 30, 0.25) 0%, transparent 50%),
              linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)
            `,
            x: backgroundX,
            y: backgroundY,
          }}
          animate={{
            background: [
              `
                radial-gradient(circle at 20% 30%, rgba(255, 138, 169, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(155, 140, 255, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(0, 198, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 10% 80%, rgba(247, 151, 30, 0.25) 0%, transparent 50%)
              `,
              `
                radial-gradient(circle at 30% 20%, rgba(0, 198, 255, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(255, 138, 169, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(155, 140, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 90% 20%, rgba(247, 151, 30, 0.25) 0%, transparent 50%)
              `,
              `
                radial-gradient(circle at 20% 30%, rgba(255, 138, 169, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(155, 140, 255, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(0, 198, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 10% 80%, rgba(247, 151, 30, 0.25) 0%, transparent 50%)
              `,
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated gradient orbs with more dynamic movement */}
        <MotionBox
          position="absolute"
          w={{ base: "400px", md: "600px" }}
          h={{ base: "400px", md: "600px" }}
          borderRadius="full"
          bg="linear-gradient(135deg, rgba(255, 138, 169, 0.35) 0%, rgba(155, 140, 255, 0.35) 100%)"
          filter="blur(100px)"
          top={{ base: "-15%", md: "-10%" }}
          right={{ base: "-15%", md: "5%" }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <MotionBox
          position="absolute"
          w={{ base: "350px", md: "500px" }}
          h={{ base: "350px", md: "500px" }}
          borderRadius="full"
          bg="linear-gradient(135deg, rgba(0, 198, 255, 0.3) 0%, rgba(39, 245, 242, 0.3) 100%)"
          filter="blur(90px)"
          bottom={{ base: "-10%", md: "0%" }}
          left={{ base: "-10%", md: "0%" }}
          animate={{
            x: [0, -40, 30, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.25, 0.85, 1],
            rotate: [0, -90, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <MotionBox
          position="absolute"
          w={{ base: "300px", md: "450px" }}
          h={{ base: "300px", md: "450px" }}
          borderRadius="full"
          bg="linear-gradient(135deg, rgba(247, 151, 30, 0.25) 0%, rgba(255, 210, 0, 0.25) 100%)"
          filter="blur(80px)"
          top={{ base: "35%", md: "25%" }}
          left={{ base: "45%", md: "35%" }}
          animate={{
            x: [0, 35, -25, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <MotionBox
          position="absolute"
          w={{ base: "250px", md: "400px" }}
          h={{ base: "250px", md: "400px" }}
          borderRadius="full"
          bg="linear-gradient(135deg, rgba(161, 255, 206, 0.2) 0%, rgba(250, 255, 209, 0.2) 100%)"
          filter="blur(70px)"
          top={{ base: "60%", md: "60%" }}
          right={{ base: "10%", md: "20%" }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -30, 0],
            scale: [1, 1.15, 0.9, 1],
            rotate: [0, -60, -120, -180],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <MotionBox
            key={particle.id}
            position="absolute"
            w={`${particle.size}px`}
            h={`${particle.size}px`}
            borderRadius="full"
            bg="rgba(255, 255, 255, 0.4)"
            left={`${particle.x}%`}
            top={`${particle.y}%`}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

        {/* Animated grid pattern overlay */}
        <MotionBox
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)"
          backgroundSize="60px 60px"
          opacity={0.4}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </Box>

      {/* Content */}
      <Flex
        align="center"
        justify="space-between"
        className="hero-layout"
        gap={8}
        direction={{ base: "column", md: "row" }}
        position="relative"
        zIndex={1}
      >
        {/* Mobile Image (Top) */}
        <MotionBox
          flex="1"
          display={{ base: "block", lg: "none" }}
          textAlign="center"
          mt={{ base: 10, md: 0 }}
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8 
          }}
        >
          <MotionBox
            as="img"
            src={heroImg}
            alt="hero"
            maxW={{ base: "220px", sm: "280px" }}
            mx="auto"
            borderRadius="xl"
            objectFit="contain"
            className="illustration-card"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -5, 5, 0],
            }}
          />
          {/* Download Resume Button - Mobile */}
          {showDownloadInHero && (
            <MotionBox
              mt={6}
              display="flex"
              justifyContent="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                as={motion.button}
                onClick={handleDownload}
                colorScheme="blue"
                variant="solid"
                size="md"
                borderRadius="full"
                bg="white"
                color="blue.600"
                px={6}
                _hover={{ bg: "yellow.300", color: "black" }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <FaDownload size={18} style={{ marginRight: "8px" }} />
                Download Resume
              </Button>
            </MotionBox>
          )}
        </MotionBox>

        {/* Left Column (Text + Stats + Button) */}
        <MotionBox
          flex="1"
          maxW={{ md: "50%" }}
          mt={{ base: 2, md: 10 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <MotionText
            color="gray.600"
            fontSize={{ base: "md", md: "lg" }}
            mb={2}
            fontWeight="500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hello there, my name is
          </MotionText>

          <Heading
            as="h1"
            className="hero-name"
            mb={3}
            bgGradient={nameColors[nameColorIndex]}
            bgClip="text"
            transition="all 0.5s ease"
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
            transition="all 0.5s ease"
            minH={{ base: "32px", md: "48px" }}
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
          <MotionBox
            display="flex"
            justifyContent={{ base: "center", md: "flex-start" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <StatsBars />
          </MotionBox>

          {/* Hire Me Button */}
          <MotionFlex
            justify={{ base: "center", md: "flex-start" }}
            mt={8}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              as={motion.button}
              size="lg"
              px={8}
              py={6}
              borderRadius="2xl"
              bgGradient="linear(to-r, #ff8aa9, #9b8cff)"
              color="white"
              fontWeight="bold"
              fontSize={{ base: "md", md: "lg" }}
              position="relative"
              overflow="hidden"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(255, 138, 169, 0.4)",
              }}
              _active={{
                transform: "translateY(0)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Box
                as="span"
                position="relative"
                zIndex={1}
              >
                Hire Me
              </Box>
              <MotionBox
                position="absolute"
                top="0"
                left="-100%"
                w="100%"
                h="100%"
                bg="linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                animate={{
                  left: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear",
                }}
              />
            </Button>
          </MotionFlex>
        </MotionBox>

        {/* Desktop Image (Right Column) */}
        <MotionBox
          flex="1"
          display={{ base: "none", lg: "block" }}
          textAlign="right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <MotionBox
              as="img"
              src={heroImg}
              alt="hero"
              maxW={{ md: "390px", lg: "400px" }}
              ml="auto"
              borderRadius="xl"
              objectFit="contain"
              className="illustration-card"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: { duration: 0.3 },
                rotate: { duration: 0.5 },
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, -2, 0],
              }}
            />
            {/* Download Resume Button - Desktop */}
            {showDownloadInHero && (
              <MotionBox
                mt={6}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button
                  as={motion.button}
                  onClick={handleDownload}
                  colorScheme="blue"
                  variant="solid"
                  size="md"
                  borderRadius="full"
                  bg="white"
                  color="blue.600"
                  px={6}
                  _hover={{ bg: "yellow.300", color: "black" }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <FaDownload size={18} style={{ marginRight: "8px" }} />
                  Download Resume
                </Button>
              </MotionBox>
            )}
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
}

const MotionText = motion(Text);
