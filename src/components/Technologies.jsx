import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiTailwindcss, SiFlask, SiDjango, SiTypescript, SiPython, SiJavascript, SiGit, SiGithub, SiVuedotjs } from 'react-icons/si'
import { FaNodeJs, FaAws } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { animate, motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      {/* Languages */}
      <motion.div 
      whileInView={{opasity: 1, x : 0}}
      initial= {{opasity: 0, x : -100}}
      transition={{duration: 2}}
      className="mb-10">
        <h3 className="text-2xl mb-6 text-center">Languages</h3>
        <div className="flex justify-center gap-8">
          <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiJavascript className="text-7xl text-yellow-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiPython className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiTypescript className="text-7xl text-blue-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Frontend */}
      <motion.div 
      whileInView={{opasity: 1, x : 0}}
      initial= {{opasity: 0, x : 100}}
      transition={{duration: 2}}
      className="mb-10">
        <h3 className="text-2xl mb-6 text-center">Frontend</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <TbBrandNextjs className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiTailwindcss className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiVuedotjs className="text-7xl text-green-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div 
      whileInView={{opasity: 1, x : 0}}
      initial= {{opasity: 0, x : -100}}
      transition={{duration: 2}}
      className="mb-10">
        <h3 className="text-2xl mb-6 text-center">Backend</h3>
        <div className="flex justify-center gap-8">
          <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className="text-7xl text-green-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiFlask className="text-7xl text-black-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiDjango className="text-7xl text-green-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Database */}
      <motion.div 
      whileInView={{opasity: 1, x : 0}}
      initial= {{opasity: 0, x : 100}}
      transition={{duration: 2}}
      className="mb-10">
        <h3 className="text-2xl mb-6 text-center">Database</h3>
        <motion.div className="flex justify-center gap-8">
          <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMongodb className="text-7xl text-green-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <BiLogoPostgresql className="text-7xl text-blue-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Tools */}
      <motion.div
      whileInView={{opasity: 1, x : 0}}
      initial= {{opasity: 0, x : -100}}
      transition={{duration: 2}}>
        <h3 className="text-2xl mb-6 text-center">Tools</h3>
        <div 
        
        className="flex justify-center gap-8">
          <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiGit className="text-7xl text-orange-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiGithub className="text-7xl text-black-400" />
          </motion.div>
          <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaAws className="text-7xl text-yellow-400" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Technologies
