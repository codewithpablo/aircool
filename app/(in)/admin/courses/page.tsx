import React from 'react'
import { CourseCard } from '@/components/mine/courses/CourseCard'

import { courses } from '@/constants'

const Courses = () => {
  return (
    <div className='grid grid-cols-5 gap-2 p-2 relative z-0'>
      {
        courses.map((course) => (
          <CourseCard key={course.name} name={course.name} price={course.price} image={course.image} totalHours={course.totalHours} category={course.category} amountOfLessons={course.amountOfLessons} link={course.link} />
        ))
      }
    </div>
  )
}

export default Courses