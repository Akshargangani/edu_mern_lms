import React from 'react'
import Hero from '../../components/student/Hero.jsx'
import Companies from '../../components/student/Companies.jsx'
import CoursesSection from '../../components/student/CoursesSection.jsx'
import TestimonialsSection from '../../components/student/testimonialsSection.jsx'

const Home = () => {
  return (
    <div className='flex flex-col items-center spacy-y-7 text-center'>
       <Hero />
       <Companies />
       <CoursesSection />
       <TestimonialsSection />
    </div>
  )
}

export default Home