import { React ,useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const CoursesList = () => {

  const {navigate} = useContext(AppContext)
  return (
    <>
    <div>
      <div>
       <div>
       <h1>Courde List</h1>
        <p className='text-gray-500'>
          <span className='text-blue-600 cursol-pointer'
          onClick={()=> navigate('/')}>Home</span> / <span>Courde List</span>
        </p>
       </div>
      </div>
    </div>
    </>
  )
}

export default CoursesList