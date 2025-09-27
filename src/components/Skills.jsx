import React, { useState, useEffect } from "react"
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Progress,
  VStack,
} from "@chakra-ui/react"
import resumeData from "../data/resumeData"
// import SkillsIllustration from "../assets/skills_illustration.png" // add your illustration image here


export default function Skills() {
  return (
    <Box px={{ base: 6, md: 24 }} py={12}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={12}
      >
        {/* Illustration (optional) */}
        <Image
          src='https://img.freepik.com/premium-vector/programming-concept-illustration_114360-1351.jpg'
          alt="Programming illustration"
          w={{ base: "80%", md: "40%" }}
          mx="auto"
        />

        {/* Skills with hover animation */}
        <VStack align="start" spacing={5} w="100%">
          <Heading className="gradient-text" size="lg" mb={4}>
            My Programming Skills
          </Heading>

          <div style={{ width:'100%', display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '30px', rowGap:'15px' }}>
            {resumeData.skills.map((skill, i) => (
              <SkillBar key={i} skill={skill} />
            ))}
          </div>
        </VStack>
      </Flex>
    </Box>
  )
}

// Single Skill Component
function SkillBar({ skill }) {
  const [value, setValue] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (hovered) {
      let current = 0
      const step = skill.level / 20 // controls speed
      const interval = setInterval(() => {
        current += step
        if (current >= skill.level) {
          current = skill.level
          clearInterval(interval)
        }
        setValue(Math.floor(current))
      }, 30)

      return () => clearInterval(interval)
    } else {
      setValue(skill.level);
    }
  }, [hovered, skill.level])

  return (
    <Box
      id="skills"
      w="100%"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      cursor="pointer"
    // sx={{border:'1px solid red'}}
    >
      <Flex justify="space-between" mb={1}>
        <Text>{skill.name}</Text>
        <Text>{value}%</Text>
      </Flex>
      <Progress
        value={value}
        size="sm"
        colorScheme="green"
        borderRadius="full"
        transition="all 0.3s ease"
      />
    </Box>
  )
}
