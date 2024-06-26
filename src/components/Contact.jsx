import React from "react";
import ParallaxText from "./ParallaxText";
import { motion } from "framer-motion";

const ContactVerticalanimation = () => {
  return (
    <section>
      <ParallaxText baseVelocity={-4}>Contact</ParallaxText>
    </section>
  );
};

const Contact = () => {
  return (
    <div className="h-screen flex flex-col text-white relative">
      <div className="flex-1">
        <ContactVerticalanimation />
      </div>
      <motion.div
        className=" flex items-center flex-col justify-center absolute h-screen w-full rounded-md font-opensans"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 0.5 }}
        animate={{ type: "easeinout" }}
      >
        <div className="max-w-xs md:max-w-lg lg:max-w-2xl flex flex-col items-center">
          <div className="text-lg md:text-2xl py-1">What's Next?</div>
          <div className="text-4xl md:text-6xl font-bold py-1 text-intro">
            Get in Touch
          </div>
          <div className="text-lg md:text-xl py-1 text-center">
            If you're interested in working together, have any questions, or
            just want to say hello, I'd love to hear from you! You can reach me
            at{" "}
            <a href="mailto:saitheja.kunta@gmail.com" className=" text-[#E4D091] ">kuntasaitheja@gmail.com</a>{" "}
            or connect with me on Twitter-
            <span className="  text-[#E4D091] ">@kunta_saiteja</span>. Thank you
            for visiting my portfolio website, and I look forward to connecting
            with you soon!
          </div>
          <a
            href="mailto:kuntasaitheja@gmail.com"
            className="inline-flex items-center mt-2 px-5 py-3 text-lg font-medium text-gray-900 bg-skills rounded-lg  "
          >
            Say Hello!
          </a>
        </div>
      </motion.div>
      <motion.div className="flex-1 bottom-0 right-0 text-[40px] md:text-[150px] lg:text-[180px] absolute opacity-10 font-opensans">
        Contact
      </motion.div>
    </div>
  );
};

export default Contact;
