import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import { Flex, Box, HStack, Link, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, useDisclosure, useToast, Spinner, useTheme } from '@chakra-ui/react'
import { transparentize } from "@chakra-ui/theme-tools";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'Hi Shubham,\n\nI came across your portfolio and was really impressed. I\'d love to connect!\n\nBest regards,\n[Your Name]'
  })
  const [loading, setLoading] = useState(false)

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

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={{ base: 6, md: 12 }}
      py={4}
      w="100%"
      h='9%'
      pos="fixed"
      top="0"
      left="0"
      zIndex={1000}
      bgGradient={`linear(to-r, 
      ${transparentize("blue.500", 0.3)({ theme })}, 
      ${transparentize("purple.500", 0.3)({ theme })}
      )`}
      backdropFilter="blur(70px)"
      borderBottom="1px solid rgba(255,255,255,0.2)"
      boxShadow="sm"
    >

      {/* Logo */}
      <HStack spacing={3} align="center">
        <Box bg="white" w={10} h={10} borderRadius="full"
          display="flex" alignItems="center" justifyContent="center" boxShadow="sm">

          <Link href="#home"><Text fontWeight={700} className="text-[#27F5F2]">S</Text></Link>
        </Box>
        <Text fontWeight={700} className="text-[#27F5F2]">Shubham</Text>
      </HStack>

      {/* Links */}
      <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
        <Link href="#home" color="cyan.500" _hover={{ color: "yellow.500" }}>Home</Link>
        <Link href="#services" color="cyan.500" _hover={{ color: "yellow.500" }}>Services</Link>
        <Link href="#projects" color="cyan.500" _hover={{ color: "yellow.500" }}>Projects</Link>
        <Link href="#skills" color="cyan.500" _hover={{ color: "yellow.500" }}>Skills</Link>
      </HStack>

      {/* Buttons */}
      <HStack spacing={3}>
        {/* Resume Download */}
        <Button
          as="a"
          href="/Shubham_Saini_NewResume.pdf"
          download="Shubham_Saini_NewResume.pdf"
          colorScheme="blue"
          variant="solid"
          size="sm"
          borderRadius="full"
          bg="white"
          color="blue.600"
          _hover={{ bg: "yellow.300", color: "black" }}
        >
          <FaDownload size={16} />
        </Button>

        {/* Contact Me */}
        <Button
          colorScheme="pink"
          size="sm"
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
};
