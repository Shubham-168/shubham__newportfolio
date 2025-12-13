import React, { useState, useEffect, useRef } from 'react'
import emailjs from "@emailjs/browser"
import { Flex, Box, HStack, Link, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, useDisclosure, useToast, Spinner, useTheme } from '@chakra-ui/react'
import { transparentize } from "@chakra-ui/theme-tools";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const theme = useTheme();
  const navRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message:
      'Hi Shubham,\n\nI came across your portfolio and was really impressed. I\'d love to connect!\n\nBest regards,\n[Your Name]'
  })
  const [loading, setLoading] = useState(false)
  const [showDownloadInNavbar, setShowDownloadInNavbar] = useState(false)
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)

  const LOGO_COLOR = "#27F5F2" // your logo color

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await emailjs.send(
        "service_roqvrxo",
        "template_5y91m39",
        formData,
        "lXsIOhinH26cq7LoD"
      )
      toast({
        title: "Message sent!",
        description: "I'll get back to you soon 🚀",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
      setFormData({ name: "", email: "", message: "" })
      onClose()
    } catch (error) {
      console.error(error)
      toast({
        title: "Failed to send message",
        description: "Please try again later",
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

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

  // Scroll detection to toggle background when navbar passes hero/banner bottom
  useEffect(() => {
    const heroEl = () => document.getElementById("home")
    const navEl = () => navRef.current

    const checkPosition = () => {
      const hero = heroEl()
      const nav = navEl()
      if (!hero || !nav) return

      const heroRect = hero.getBoundingClientRect()
      const navHeight = nav.getBoundingClientRect().height || 0

      const passed = heroRect.bottom <= navHeight + 4
      setIsScrolledPastHero(passed)

      setShowDownloadInNavbar(heroRect.bottom < 0)
    }

    checkPosition()

    const onScroll = () => {
      requestAnimationFrame(checkPosition)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])


  const defaultBg = `linear(to-r, 
    ${transparentize("blue.500", 0.3)({ theme })}, 
    ${transparentize("purple.500", 0.3)({ theme })}
  )`


  const navbarStyles = {
    transition: "background 300ms ease, color 300ms ease, box-shadow 300ms ease",
  }

  return (
    <Flex
      ref={navRef}
      as="nav"
      align="center"
      justify="space-between"
      px={{ base: 6, md: 12 }}
      py={2}
      w="100%"
      pos="fixed"
      top="0"
      left="0"
      zIndex={1000}
      bg={isScrolledPastHero ? LOGO_COLOR : defaultBg}
      backdropFilter={isScrolledPastHero ? "none" : "blur(70px)"}
      // borderBottom={isScrolledPastHero ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.2)"} 
      boxShadow={isScrolledPastHero ? "sm" : "none"}
      style={navbarStyles}
    >
      {/* Logo */}
      <HStack spacing={3} align="center">
        <Box bg="white" w={10} h={10} borderRadius="full"
          display="flex" alignItems="center" justifyContent="center" boxShadow="sm">
          <Link href="#home"><Text fontWeight={700} color={isScrolledPastHero ? "#0b7078" : LOGO_COLOR}>S</Text></Link>
        </Box>
        <Text fontWeight={800} color={isScrolledPastHero ? "#0b7078" : LOGO_COLOR}>Shubham</Text>
      </HStack>

      {/* Links */}
      <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
        <Link href="#home" color={isScrolledPastHero ? "black" : "cyan.300"} _hover={{ color: '#0b7078' }}>Home</Link>
        <Link href="#skills" color={isScrolledPastHero ? "black" : "cyan.300"} _hover={{ color: '#0b7078' }}>Skills</Link>
        <Link href="#projects" color={isScrolledPastHero ? "black" : "cyan.300"} _hover={{ color: '#0b7078' }}>Projects</Link>
        <Link href="#services" color={isScrolledPastHero ? "black" : "cyan.300"} _hover={{ color: '#0b7078' }}>Services</Link>
        <Link href="#contact" color={isScrolledPastHero ? "black" : "cyan.300"} _hover={{ color: '#0b7078' }}>Contact</Link>
      </HStack>

      {/* Buttons */}
      <HStack spacing={3}>
        <Button
          as={motion.button}
          onClick={handleDownload}
          colorScheme="blue"
          variant="solid"
          size="sm"
          title='Download Resume'
          borderRadius="full"
          bg="white"
          color="blue.600"
          _hover={{ bg: "#0b7078", color: "white" }}
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
          <FaDownload size={16} />
        </Button>

        {/* Contact Me */}
        <Button
          colorScheme="pink"
          size="sm"
          title='Contact Me'
          borderRadius="full"
          onClick={onOpen}
        >
          <MdEmail size={18} />
        </Button>
      </HStack>

      {/* Contact Me Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4} isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" value={formData.message} onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue" mr={3}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : "Send"}
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
