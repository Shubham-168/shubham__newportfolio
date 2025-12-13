import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, } from "react-icons/fa";
import { motion } from "framer-motion";
import { FormControl, FormLabel, Input, Textarea, Button, VStack, Heading, useToast, useTheme } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const toast = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Replace these with your real EmailJS ids/keys if different
  const EMAILJS_SERVICE_ID = "service_roqvrxo";
  const EMAILJS_TEMPLATE_ID = "template_5y91m39";
  const EMAILJS_PUBLIC_KEY = "lXsIOhinH26cq7LoD";

  // initialize emailjs once
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // IMPORTANT: prevent page reload
    setLoading(true);

    // Template params must match the variables in your EmailJS template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
        // if you didn't call emailjs.init, you can pass public key here as 4th param
        // EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "I'll get back to you soon 🚀",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className=" px-6 md:px-16 bg-[#e8f8f4]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* --- Cards (arranged in row) --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
        {/* LEFT SIDE → Cards in 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
          {/* Location */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-[#27F5F2] text-white text-xl">
              <FaMapMarkerAlt className="text-[#0b7078]" />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">LOCATION</h3>
            <p className="text-gray-500 text-sm">Amroha, UP, India</p>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-[#27F5F2] text-white text-xl">
              <FaPhoneAlt className="text-[#0b7078]"  />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">PHONE</h3>
            <p className="text-gray-500 text-sm">+91 9368208014</p>
          </div>

          {/* Personal Email */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-[#27F5F2] text-white text-xl">
              <FaEnvelope className="text-[#0b7078]"  />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">PERSONAL EMAIL</h3>
            <p className="text-gray-500 text-sm">saini68shubham@gmail.com</p>
          </div>

          {/* Business Social */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-[#27F5F2] text-white text-xl">
              <FaInstagram className="text-[#0b7078]"  />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">BUSINESS SOCIAL</h3>
            <div className="flex justify-center gap-4 text-[#27F5F2] text-xl mt-2">
              <a
                href="https://github.com/Shubham-168"
                target="_blank"
                className="hover:text-blue-500"
              >
                <FaGithub className="text-[#0b7078]" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham8014"
                target="_blank"
                className="hover:text-blue-500"
              >
                <FaLinkedin className="text-[#0b7078]" />
              </a>
              <a href="https://twitter.com" target="_blank" className="hover:text-blue-500">
                <FaTwitter className="text-[#0b7078]" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE → Form */}
        <div className=" rounded-lg p-8">
          <Heading as="h3" size="lg" textAlign="center" mb={6} color="gray.700">
            LET’S TALK
          </Heading>

          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl isRequired>
                {/* <FormLabel>Your Name</FormLabel> */}
                <Input
                  name="name"
                  placeholder="Please Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  borderWidth={2}
                  focusBorderColor="cyan.400"
                  borderColor='#0b7078'
                  shadow="lg"
                />
              </FormControl>

              <FormControl isRequired>
                {/* <FormLabel>Your Email</FormLabel> */}
                <Input
                  type="email"
                  name="email"
                  placeholder="Please Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  borderWidth={2}
                  focusBorderColor="cyan.400"
                  borderColor='#0b7078'
                  shadow="lg"
                />
              </FormControl>

              <FormControl isRequired>
                {/* <FormLabel>Your Message</FormLabel> */}
                <Textarea
                  name="message"
                  placeholder="Please Enter your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  borderWidth={2}
                  focusBorderColor="cyan.400"
                  borderColor='#0b7078'
                  shadow="lg"
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="blackAlpha"
                bg="black"
                color="white"
                _hover={{ bg: "green.500" }}
                isLoading={loading}
                loadingText="Sending..."
              >
                SUBMIT
              </Button>
            </VStack>
          </form>
        </div>
      </div>


      {/* --- Footer --- */}
      <footer className="mt-2  shadow-2xl border-t pt-10 pb-6 bg-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-evenly max-w-6xl mx-auto px-6 gap-8">
          {/* Logo + Tagline */}
          <div>
            <h2 className="text-3xl pb-5 font-extrabold ">
              <span className="text-[#0b7078] rounded-full text-center font-bold text-4xl bg-[#27F5F2] pl-6 pr-6 pt-2 pb-2">S</span> <span className="text-4xl text-[#0b7078] font-bold" > hubham </span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Crafting Digital Experiences, One Line of Code at a Time
            </p>
            {/* <div className="flex gap-3 mt-3 text-[#27f5f2] text-xl">
              <a href="https://github.com/Shubham-168" target="_blank"><FaGithub className="text-[#0b7078]" /></a>
              <a href="https://www.linkedin.com/in/shubham8014" target="_blank"><FaLinkedin className="text-[#0b7078]" /></a>
              <a href="mailto:saini68shubham@gmail.com" target="_blank"><FaEnvelope className="text-[#0b7078]" /></a>
            </div> */}
          </div>

          {/* Links */}
          <div>
            <h3 className="font-extrabold text-3xl text-black mb-4">Links</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="hover:text-[#0b7078] pt-3"><a href="#home" >Home</a></li>
              <li className="hover:text-[#0b7078]"><a href="#services" >Services</a></li>
              <li className="hover:text-[#0b7078]"><a href="#projects" >Projects</a></li>
              <li className="hover:text-[#0b7078]"><a href="#myservices" >Best Services</a></li>
              <li className="hover:text-[#0b7078]"><a href="#contact" >Contact Me</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-extrabold text-2xl text-black mb-5">Contact</h4>
            <p className="text-sm text-gray-600 pt-4">+91 9368208014</p>
            <p className="text-sm text-gray-600">saini68shubham@gmail.com</p>
            <p className="text-sm text-gray-600">Shubham Saini</p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 pt-4">
          © 2025 Shubham Saini. All Rights Reserved.
        </p>
      </footer>


    </motion.section>
  );
}
