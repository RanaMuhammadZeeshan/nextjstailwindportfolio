import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

function TechnologiesComponent() {
  return (
    <section>
      <div className='mt-20 '>
        <h1 className='text-4xl text-blue-800 font-bold text-center'>
          Technologies I am good with
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 my-8'>
          <FaReact
            size={180}
            className='text-cyan-500 w-full text-center mt-20'
          />
          <SiNextdotjs
            size={180}
            className='text-gray-900 w-full text-center mt-20'
          />
          <SiJavascript
            size={180}
            className='text-yellow-500 w-full text-center mt-20'
          />
          <FaCss3
            size={180}
            className='text-blue-500 w-full text-center mt-20'
          />
          <FaSass
            size={180}
            className='text-pink-500 w-full text-center mt-20'
          />
          <FaBootstrap
            size={180}
            className='text-blue-800 w-full text-center mt-20'
          />
          <SiTailwindcss
            size={180}
            className='text-blue-400 w-full text-center mt-20'
            title='Tailwind CSS'
          />
          <FaNodeJs
            size={180}
            className='text-green-500 w-full text-center mt-20 '
          />
          <FaHtml5
            size={180}
            className='text-yellow-500 w-full text-center mt-20'
          />
        </div>
      </div>
    </section>
  )
}

export default TechnologiesComponent
