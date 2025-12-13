import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChartLine, FaLightbulb, FaCheckCircle, FaCoins, FaPuzzlePiece, FaHandshake } from "react-icons/fa";

const reasons = [
  {
    icon: FaChartLine,
    title: "Seamless Scaling",
    desc: "My holistic approach goes beyond creating websites; I engineer growth. Through strategic design, responsive development, and targeted digital strategies, I empower businesses to scale effectively and seize opportunities.",
  },
  {
    icon: FaLightbulb,
    title: "Fusion of Creativity and Strategy",
    desc: "I don't just craft beautiful websites; I construct experiences that resonate. My designs are a blend of creative artistry and strategic thinking, ensuring a captivating online presence that captivates your audience.",
  },
  {
    icon: FaCheckCircle,
    title: "Proven Success",
    desc: "My portfolio isn't just a collection of projects; it's a narrative of success stories. From businesses that have expanded their client base to brands that have conquered the digital realm, my track record speaks for itself.",
  },
  {
    icon: FaCoins,
    title: "ROI-Driven Approach",
    desc: "My work isn't just about pixels; it's about results. With a strong focus on user experience, SEO optimization, and engaging content, I ensure your investment yields tangible returns through increased visibility.",
  },
  {
    icon: FaPuzzlePiece,
    title: "Tailored Solutions",
    desc: "No two businesses are alike, and your digital presence should reflect your uniqueness. I curate tailored solutions that align with your brand identity and business goals, delivering a cohesive and impactful result.",
  },
  {
    icon: FaHandshake,
    title: "Partnership for Growth",
    desc: "Hiring me isn't just a transaction; it's a partnership. I'm committed to walking alongside you on your digital journey, offering guidance, insight, and expertise that contribute to your long-term success.",
  },
];

export default function WhyHireMe() {
  return (
    <Box as="section" py={20} bg="#e8f8f4">
      <Container maxW="7xl">
        {/* Heading */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, #ff8aa9, #9b8cff)"
            bgClip="text"
          >
            Why Hire Me
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl">
            In this section I will provide you with some reasons to hire me to get you to high levels of success with my services.
          </Text>
        </VStack>

        {/* Reason Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {reasons.map((reason, index) => (
            <Box
              key={index}
              p={8}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow="lg"
              borderRadius="2xl"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-8px)", shadow: "xl" }}
            >
              <VStack align="center" spacing={4}>
                <Icon as={reason.icon} boxSize={10} color="cyan.400" />
                <Heading as="h3" size="md">
                  {reason.title}
                </Heading>
                <Text color="gray.600">{reason.desc}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
