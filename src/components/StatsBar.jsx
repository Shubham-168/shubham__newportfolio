import React from "react";
import { Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import resumeData from "../data/resumeData";

export default function StatsBar() {
  const { stats } = resumeData;
  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mt={8} mb={6}>
      {stats.map((stat, index) => (
        <Flex
          key={index}
          p={4}
          // borderWidth="1px"
          borderRadius="lg"
          align="center"
          direction="column"
          width={'280px'}
          // shadow="md"
        >
          <Box color="cyan.400" mb={2}>
            {stat.icon ? <stat.icon size={24} /> : ""}
          </Box>
          <Text fontWeight={600}>{stat.label}</Text>
          <Text fontSize="sm" color="white">
            {stat.value}
          </Text>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
