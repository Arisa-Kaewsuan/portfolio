import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/pic.jpg"
        className="w-56 h-56 rounded-full flex-shrink-0 object-cover mt-20 -mb-20 md:mb-0  md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
      />

      <div>
        <h4> MY BACKGROUND </h4>
        <h5> Education </h5>
        <ul className="text-sm">
          <li> 2562-2566 : Self-Taugh Learnning && Online Course </li>
          <ul>
            <li>1. ) ReactJS & React Natve - Learning by Doing Project</li>
            <li> 2.) DataTH - Road to Data Engineer </li>
            <li> 3.) Expert-Programmimg Tutor</li>
            <ul>
              <li>
                - Basic Programming with Java : Database / OOP / Networking
              </li>
              <li> - Data Structure </li>
              <li> - Algorithm </li>
              <li> - Super User </li>
              <li> - Com Essential </li>
              <li> - Web Programming with PHP </li>
            </ul>
          </ul>
          <li>
            2558-2562 : Bechelor degree of Electrical Engineering at Kasetsart
            University , Sriracha Campus
            <ul>
              <li>
                Mini Project : Follow line robot / 7-Segment / speaker circuit
              </li>
              <li>
                Final Projext : Robot Arm - use RasberyPi / Python / Servo motor{" "}
              </li>
              <li>Internship : PEA - Try to use DigSilent</li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
