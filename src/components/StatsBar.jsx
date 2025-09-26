import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import resumeData from '../data/resumeData'

export default function StatsBar(){
  const { stats } = resumeData
  return (
    <Flex justify="center" flexDirection={'row'} mt={12} mb={20} px={{base:6, md:24}}>
      {stats.map(stat => (
        <Flex maxW="900px" w="full" justify="space-between" flexDirection={'column'} align="center">
        <Box align='center' color='cyan.400' className="stats-item">
          {stat.icon ? <stat.icon /> : ""}
        </Box>
        <Box textAlign="center" className="stats-item">
          <Text fontWeight={600}>{stat.label}</Text>
        </Box>
        <Box textAlign="center" className="stats-item">
          <Text fontWeight={600}>{stat.value}</Text>
        </Box>
      </Flex>
      ))}
    </Flex>
  )
}