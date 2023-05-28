import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
    return (
      <Tilt className= "xs:w-[250px] w-full">
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className= "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                 options= {{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className = "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                 <img src={icon} alt= 'web-development className' className= "w-16 h-16 object-contain" />
                 <h3 className='text-while text-[20px] font-bold text-center'>{title}</h3>
              </div>  
            </motion.div>

      </Tilt>
    )
}

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>はじめに</p>
            <h2 className={styles.sectionHeadText}>概要</h2>
        </motion.div>

        <motion.p
            variants={fadeIn("","",0.1,1)}
            className= "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
        私は、typescript と javascript の経験があり、react、node.js、three.js などのフレームワークの専門知識を持つ熟練したソフトウェア開発者です
        私は学習が早く、クライアントと緊密に協力して、現実世界の問題を解決する効率的でスケーラブルで使いやすいソリューションを作成します。
        あなたのアイデアを実現するために一緒に働きましょう!
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
        
    </>

    
  )
}

export default SectionWrapper (About, "about")