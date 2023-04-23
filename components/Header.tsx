import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex items-center justify-between p-5 sticky top-0 max-w-7xl mx-auto z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://linkedin.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://youtube.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://behance.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://medium.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://email.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="font-bold  hidden md:inline-flex text-sm text-gray-400">
          GET IN TOUCH
        </p>
      </motion.div>
    </header>
  );
}
