import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import Skills from './components/Skills'
import WhyHireMe from './components/WhyHireMe.jsx'
import Projects from './components/Projects'
import TechStack from './components/TechStack.jsx'
import MyServices from './components/Experience'
import GitStats from './components/GitStats.jsx'
import Contact from './components/Contact'
// import Education from './components/Education'
// import Footer from './components/Footer'

export default function App() {
  return (
    <Box minH="100vh" bg="gray.50" color="gray.800">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Skills />
      <WhyHireMe />
      <Projects />
      <TechStack />
      <MyServices />
      <GitStats />
      <Contact />
    </Box>
  )
}
