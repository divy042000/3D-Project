import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion.js";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt claassName="xs:w-[250px] w-full options={{ max: 45, scale: 1, speed: 1000 }}">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[210px] w-[200px] flex justify-evenly items-center flex-col"
        >
        <img src={icon} alt={title} className="w-16 h-16 object-contain"></img>
       <h3 className="text-white text-[16px] font-bold text-center">{title}</h3>
        </div>
       
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <div>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software developer with experiance in
        javascript,node.js,React.js,HTMl,TailwindCSS,express.js,MONGODB,DBMS,OS,Data
        Structures,C++.
        <br />I am a quick learner and colaborate closely with work teams to
        provide quick,effecient solutions for the real world problems...
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

const AboutPage = () => {
  return <WrappedAbout />;
};

export default AboutPage;