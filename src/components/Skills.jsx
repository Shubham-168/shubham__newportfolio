import React, { useState, useEffect, useRef } from "react"
import Slider from "react-slick";
import { Box, Flex, Heading, Text, Image, Progress, VStack, SimpleGrid, Icon } from "@chakra-ui/react"
import { motion, useInView } from "framer-motion"
import resumeData from "../data/resumeData"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MotionBox = motion(Box)
const MotionVStack = motion(VStack)


// Single Skill Component
function SkillBar({ skill, index, isInView }) {
  const [value, setValue] = useState(0)
  const [hovered, setHovered] = useState(false)
  const IconComponent = skill.icon
  const intervalRef = useRef(null)
  const timerRef = useRef(null)
  const hoverIntervalRef = useRef(null)

  useEffect(() => {
    if (isInView) {
      // Animate progress bar on scroll into view
      timerRef.current = setTimeout(() => {
        let current = 0
        const step = skill.level / 30
        intervalRef.current = setInterval(() => {
          current += step
          if (current >= skill.level) {
            current = skill.level
            if (intervalRef.current) {
              clearInterval(intervalRef.current)
              intervalRef.current = null
            }
          }
          setValue(Math.floor(current))
        }, 20)
      }, index * 50) // Stagger animation

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current)
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }
  }, [isInView, skill.level, index])

  useEffect(() => {
    if (hovered && value < skill.level) {
      // Smooth fill on hover if not already at max
      const step = (skill.level - value) / 10
      hoverIntervalRef.current = setInterval(() => {
        setValue(prev => {
          if (prev >= skill.level) {
            if (hoverIntervalRef.current) {
              clearInterval(hoverIntervalRef.current)
              hoverIntervalRef.current = null
            }
            return skill.level
          }
          return Math.min(prev + step, skill.level)
        })
      }, 20)

      return () => {
        if (hoverIntervalRef.current) {
          clearInterval(hoverIntervalRef.current)
          hoverIntervalRef.current = null
        }
      }
    }
  }, [hovered, skill.level, value])

  return (
    <MotionBox
      w="100%"
      p={{ base: 3, md: 4 }}
      borderRadius="lg"
      bg="gray.50"
      border="1px solid"
      borderColor="gray.200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      cursor="pointer"
      whileHover={{
        scale: 1.02,
        borderColor: "purple.300",
        boxShadow: "0 4px 12px rgba(155, 140, 255, 0.2)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Flex justify="space-between" align="center" mb={2}>
        <Flex align="center" gap={2}>
          {IconComponent && (
            <Icon
              as={IconComponent}
              boxSize={{ base: 5, md: 6 }}
              color="purple.500"
            />
          )}
          <Text
            fontWeight="semibold"
            fontSize={{ base: "sm", md: "md" }}
            color="gray.800"
          >
            {skill.name}
          </Text>
        </Flex>
        <Text
          fontWeight="bold"
          fontSize={{ base: "sm", md: "md" }}
          color="purple.600"
          minW="45px"
          textAlign="right"
        >
          {value}%
        </Text>
      </Flex>
      <Progress
        value={value}
        size="md"
        colorScheme="purple"
        borderRadius="full"
        bg="gray.200"
        sx={{
          '& > div': {
            background: 'linear-gradient(90deg, var(--hero-accent-1), var(--hero-accent-2))',
            transition: 'width 0.3s ease-in-out'
          }
        }}
      />
    </MotionBox>
  )
}


const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 6,          // shows 2 cards at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,              // slow smooth movement
  cssEase: "linear",
  pauseOnHover: true,
};

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // return (
  //   <Box
  //     id="skills"
  //     px={{ base: 6, md: 24 }}
  //     py={{ base: 10, md: 20 }}
  //     position="relative"
  //     overflow="hidden"
  //   >
  //     {/* Background decoration */}
  //     <Box
  //       position="absolute"
  //       top="0"
  //       right="0"
  //       w={{ base: "200px", md: "400px" }}
  //       h={{ base: "200px", md: "400px" }}
  //       bg="linear-gradient(135deg, rgba(255, 138, 169, 0.1) 0%, rgba(155, 140, 255, 0.1) 100%)"
  //       borderRadius="full"
  //       filter="blur(80px)"
  //       transform="translate(30%, -30%)"
  //       zIndex={0}
  //     />

  //     <Box textAlign={'center'} marginBottom={{ base: 2, md: 4 }}>
  //       <Heading
  //         className="gradient-text"
  //         size={{ base: "lg", md: "xl" }}
  //         mb={2}
  //         fontWeight="bold"
  //       >
  //         My Programming Skills
  //       </Heading>
  //       <Text
  //         color="gray.600"
  //         fontSize={{ base: "sm", md: "md" }}
  //         mt={2}
  //       >
  //         Technologies I work with and my proficiency level
  //       </Text>
  //     </Box>

  //     <Flex
  //       direction={{ base: "column", lg: "row" }}
  //       align={{ base: "center", lg: "center" }}
  //       gap={{ base: 6, lg: 12 }}
  //       position="relative"
  //       zIndex={1}
  //     >
  //       {/* Illustration */}
  //       <MotionBox
  //         initial={{ opacity: 0, x: -50 }}
  //         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  //         transition={{ duration: 0.6, ease: "easeOut" }}
  //         flex={{ base: "none", lg: "0 0 40%" }}
  //         w={{ base: "100%", md: "80%", lg: "auto" }}
  //         maxW={{ base: "400px", lg: "none" }}
  //       >
  //         <Image
  //           src='https://img.freepik.com/premium-vector/programming-concept-illustration_114360-1351.jpg'
  //           alt="Programming illustration"
  //           w="100%"
  //           h="auto"
  //           borderRadius="xl"
  //           className="illustration-card"
  //           loading="lazy"
  //         />
  //       </MotionBox>

  //       {/* Skills Section */}
  //       <MotionVStack
  //         ref={ref}
  //         align="stretch"
  //         spacing={6}
  //         flex="1"
  //         w="100%"
  //         initial={{ opacity: 0, x: 50 }}
  //         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
  //         transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  //         // border={'2px solid'}
  //         overflowY={'auto'}
  //       >
  //         <SimpleGrid
  //           columns={{ base: 1, sm: 2 }}
  //           spacing={{ base: 4, md: 6 }}
  //           w="100%"
  //           h={{ base: 400, md: 550 }}
  //         >
  //           {resumeData.skills.map((skill, i) => (
  //             <SkillBar
  //               key={i}
  //               skill={skill}
  //               index={i}
  //               isInView={isInView}
  //             />
  //           ))}
  //         </SimpleGrid>
  //       </MotionVStack>
  //     </Flex>
  //   </Box>
  // )

  return (
    <Box
      id="skills"
      px={{ base: 6, md: 24 }}
      py={{ base: 6, md: 12 }}
      position="relative"
      overflow="hidden"
    >
      {/* Header */}
      <Box textAlign="center" mb={{ base: 4, md: 6 }}>
        <Heading className="gradient-text" size={{ base: "lg", md: "xl" }}>
          My Programming Skills
        </Heading>
        <Text color="gray.600" mt={2}>
          Technologies I work with and my proficiency level
        </Text>
      </Box>

      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        gap={{ base: 6, lg: 12 }}
      >
        {/* Illustration */}
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          flex="0 0 40%"
          maxW={{ base:'400px', lg:"550px"}}
        >
          <Image
            src="https://img.freepik.com/premium-vector/programming-concept-illustration_114360-1351.jpg"
            borderRadius="xl"
            w="100%"
            h='auto'  
          />
        </MotionBox>

        <MotionVStack
          ref={ref}
          flex="1"
          align="stretch"
          w={{ base: "100%", lg:'70%' }}
          h={{ base: "420px", md: "550px" }}
          overflow="hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          columns={{ base: 1, sm: 2 }}
          spacing={{ base: 4, md: 6 }}
        >
          <Slider {...sliderSettings}>
            {resumeData.skills.map((skill, i) => (
              <Box key={i} px={2} py={2}>
                <SkillBar
                  skill={skill}
                  index={i}
                  isInView={isInView}
                />
              </Box>
            ))}
          </Slider>
        </MotionVStack>
      </Flex>
    </Box>
  );
}

export default Skills;
