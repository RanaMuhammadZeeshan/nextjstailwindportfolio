import { FaBootstrap, FaCss3, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

function TechnologiesComponent() {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        <FaReact />
        <SiNextdotjs />
        <SiJavascript />
        <FaCss3 />
        <FaSass />
        <FaBootstrap />
        <SiTailwindcss />
        <FaNodeJs />
      </div>
    </section>
  )
}

export default TechnologiesComponent
