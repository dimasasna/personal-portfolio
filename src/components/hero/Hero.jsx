import React from 'react'
import profil from '../../assets/profil.png'
import "./hero.css"
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollYProgress } = useScroll()
  const right = useTransform(scrollYProgress, [0, 1], [0, 400])
  const left = useTransform(scrollYProgress, [0, 1], [0, -400])
  return (
    <section id='home' className='bg-color-text w-[100%] h-[100vh]  relative overflow-hidden '>
      <div className=''>
        <div className='flex justify-center items-center'>
          <div className='text-primary flex flex-col justify-center items-center text-2xl absolute  top-[4rem] italic lg:hidden'>
            <motion.h1
              initial={{ y: -400, opacity: 1 }}
              animate={{
                y: 0,
                transition: {
                  duration: 1,
                  delay: 2.1
                }
              }}>Hello, my name is </motion.h1>
            <motion.h1
              initial={{ y: -400, opacity: 1 }}
              animate={{
                y: 0,
                transition: {
                  duration: 1,
                  delay: 2.1
                }
              }}>Dimas Asna Nugraha</motion.h1>
          </div>
        </div>
        <div className='absolute top-[20rem]'>
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2
              },
            }}
            style={{x: right}} 
            className='absolute uppercase  pointer-events-none italic text-primary   z-[1] whitespace-nowrap text-[5rem] lg:text-[10rem] font-extrabold  textFilled'>Software Engineer</motion.h1>
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2
              }
            }}
            style={{ x: right }}
            className='absolute uppercase  pointer-events-none italic text-primary  whitespace-nowrap text-[5rem] lg:text-[10rem] font-extrabold textOutlined z-[3]'>Software Engineer</motion.h1>
        </div>
        <div className='absolute top-[24rem] lg:top-[28rem]'>
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2
              }
            }}
            style={{ x: left }}
            className='absolute uppercase  pointer-events-none italic text-primary z-[1] whitespace-nowrap text-[5rem] lg:text-[10rem] font-extrabold  textFilled'>Website Developer</motion.h1>
          <motion.h1
            initial={{ x: 1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2
              }
            }}
            style={{ x: left }}
            className='absolute uppercase  pointer-events-none italic text-primary  whitespace-nowrap text-[5rem] lg:text-[10rem] font-extrabold textOutlined z-[3]'>Website Developer</motion.h1>
        </div>
        <div className='h-[100vh] flex justify-center items-center'>
          <motion.img
            initial={{ y: 400, opacity: 1 }}
            animate={{
              y: 0,
              transition: {
                duration: 1,
                delay: 2.1
              }
            }}
            className='w-[300px] lg:w-[600px] lg:h-[600px] z-[2]  border-4  border-primary' src={profil} alt="profil" />
        </div>
      </div>
    </section>
  )
}

export default Hero
