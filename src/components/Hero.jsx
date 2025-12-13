import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Text, Heading, Button, useToast } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resumeData from "../data/resumeData";
import bannerImg from "../assets/portfolioBannerImage.webp";
import StatsBars from './StatsBar';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export default function Hero() {
  const toast = useToast();
  const nameColors = [
    "linear(to-r, #ff8aa9, #9b8cff)",
    "linear(to-r, #00c6ff, #27F5F2)",
    "linear(to-r, #f7971e, #ffd200)",
    "linear(to-r,rgba(24, 241, 118, 1),rgb(209, 255, 220))",
    "linear(to-r, #ff6b9d, #c471ed, #12c2e9)",
  ];

  const quoteData = [
    { text: "I am a Creative Developer", gradient: "linear(to-r, #ff8aa9, #9b8cff)" },
    { text: "I build modern UIs", gradient: "linear(to-r, #00c6ff, #27F5F2)" },
    { text: "I craft responsive websites", gradient: "linear(to-r, #32dbf1ff, #ffd200)" },
    { text: "I love animations & design", gradient: "linear(to-r,rgba(20, 229, 124, 1), #edeee1ff)" },
  ];

  const [nameColorIndex, setNameColorIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showDownloadInHero, setShowDownloadInHero] = useState(true);
  const [navHeight, setNavHeight] = useState(64); // fallback nav height (px)
  const [bgMode, setBgMode] = useState("cover"); // 'cover' or 'contain' based on screen width
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

  // update name color & quote periodically
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

  // Scroll detection to hide download button when hero is out of view
  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const rect = heroSectionRef.current.getBoundingClientRect();
        setShowDownloadInHero(rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure navbar height and decide background sizing for small screens
  useEffect(() => {
    const measure = () => {
      // attempt to find a fixed navbar element (common selectors)
      const nav = document.querySelector('nav') || document.querySelector('header') || document.querySelector('.navbar');
      const computedNavHeight = nav ? Math.ceil(nav.getBoundingClientRect().height) : 64;
      setNavHeight(computedNavHeight);

      // choose background mode based on viewport width
      const isSmall = window.innerWidth <= 640; // mobile breakpoint
      setBgMode(isSmall ? "contain" : "cover");
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, []);

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
      link.download = "Shubham_Saini_Resume.pdf";
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
      ref={(node) => {
        containerRef.current = node;
        heroSectionRef.current = node;
      }}
      position="relative"
      pt={`${navHeight}px`}                         // ensure content sits below navbar
      px={{ base: 4, md: 24 }}
      minH={{ base: `calc(100vh - ${navHeight}px)`, md: "90vh" }}
      overflow="hidden"
      css={{ scrollMarginTop: `${navHeight + 8}px` }} // anchor scrolling safe
      /* background adjustments to show full banner on small screens */
      backgroundImage={`url(${bannerImg})`}
      backgroundRepeat="no-repeat"
      backgroundPosition={{ base: "center top", md: "center" }}
      backgroundSize={bgMode}
      bgColor="cyan.900"
    >
      {/* dark overlay for contrast and readability */}
      {/* <Box position="absolute" display={{base: 'block', md:'none'}} inset={0} zIndex={0} bg="rgba(0,0,0,0.32)" pointerEvents="none" />  */}

      <Flex
        zIndex={1}
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={6}
        minH="inherit"
        pt={{ base: 6, md: 0 }}
        pb={{ base: 8, md: 0 }}
      >
        {/* Left Column (Text + Stats + Button) */}
        <MotionBox
          flex="1"
          width={{ base: "100%", md: "50%" }}
          mt={{ base: 0, md: 10 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          textAlign={{ base: "center", md: "left" }}
          px={{ base: 2, md: 0 }}
        >
          <MotionText
            color="white"
            fontSize={{ base: "sm", md: "md" }}
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
            mb={3}
            bgGradient={nameColors[nameColorIndex]}
            bgClip="text"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            lineHeight={1.05}
            transition="all 0.5s ease"
            whiteSpace="normal"
            textAlign={{ base: "center", md: "left" }}
            style={{ wordBreak: "break-word" }}
          >
            <Typewriter
              words={[`${resumeData.name} ${resumeData.surname}`, "Full Stack Developer...!"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={4000}
            />
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={700}
            mb={6}
            bgGradient={quoteData[quoteIndex].gradient}
            bgClip="text"
            transition="all 0.5s ease"
            minH={{ base: "36px", md: "48px" }}
            whiteSpace="normal"
            textAlign={{ base: "center", md: "left" }}
          >
            <Typewriter
              words={quoteData.map((q) => q.text)}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </Text>

          <MotionBox
            display="flex"
            color="white"
            justifyContent={{ base: "center", md: "flex-start" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            mb={4}
          >
            <StatsBars />
          </MotionBox>

          <MotionFlex
            justify={{ base: "center",  }}
            mt={4}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              as={motion.button}
              size={{ base: "md", md: "lg" }}
              px={{ base: 6, md: 8 }}
              py={{ base: 3, md: 6 }}
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </Button>
          </MotionFlex>
        </MotionBox>

        {/* Right column kept for large screens only */}
        <MotionBox
          flex="1"
          display={{ base: "none", lg: "block" }}
          textAlign="right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Desktop graphic / illustration can be placed here */}
        </MotionBox>
      </Flex>
    </Box>
  );
}
