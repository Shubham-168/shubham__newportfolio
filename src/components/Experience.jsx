import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";


const services = [
  {
    title: "Website UI",
    desc: "Crafting intuitive and engaging user interfaces that guide seamless digital journeys.",
    icon: "https://res.cloudinary.com/dhnjppjlh/image/upload/v1758739005/web-design_7754798_tdfuk0.png",
  },
  {
    title: "Redesign UI",
    desc: "Breathing new life into digital spaces through impactful redesigns.",
    icon: "https://img.icons8.com/color/96/design.png",
  },
  {
    title: "Responsive UI",
    desc: "Ensuring flawless functionality and aesthetics across devices.",
    icon: "https://res.cloudinary.com/dhnjppjlh/image/upload/v1758738811/responsive_371854_luk9rv.png",
  },
  {
    title: "Mobile UI",
    desc: "Elevating user experiences through sleek mobile interfaces.",
    icon: "https://img.icons8.com/color/96/smartphone.png",
  },
  {
    title: "Web App UI",
    desc: "Designing immersive and efficient user interfaces for applications.",
    icon: "https://img.icons8.com/color/96/web-design.png",
  },
  {
    title: "Animations",
    desc: "Infusing websites with captivating animations that enhance interactivity.",
    icon: "https://res.cloudinary.com/dhnjppjlh/image/upload/v1758738936/animation_1454776_yaehby.png",
  },
];

const MyServices = () => {
  return (
    <Box id="myservices" bg="#e8f8f4" py={16} textAlign="center">
      <Heading mb={4} fontSize="2xl" color="pink.500">
        My Best UI Services
      </Heading>
      <Text mb={10} maxW="600px" mx="auto" color="gray.600">
        From creating captivating website UIs and implementing eye-catching
        animations to ensuring seamless responsiveness and optimizing for search
        engines, I specialize in every aspect of crafting user-centric digital
        experiences.
      </Text>

      <SimpleGrid columns={[1, 2, 3]} spacing={10} maxW="1000px" mx="auto">
        {services.map((service, i) => (
          <Box
            key={i}
            p={6}
            rounded="xl"
            shadow="md"
            bg="white"
            _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
            transition="all 0.3s"
          >
            <Image src={service.icon} alt={service.title} mx="auto" boxSize="50px" />
            <Heading mt={4} mb={2} fontSize="lg" fontWeight="bold">
              {service.title}
            </Heading>
            <Text color="gray.600" fontSize="sm">
              {service.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MyServices;