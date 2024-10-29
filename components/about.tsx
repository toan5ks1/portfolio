"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate front-end developer with 4 years of experience,
        specializing in{" "}
        <span className="font-medium">Finance, Banking, and E-commerce</span> .
        My expertise lies in crafting dynamic user experiences with a strong
        focus on{" "}
        <span className="font-medium">
          performance, security, and scalability
        </span>
        . I have a proven ability to{" "}
        <span className="font-medium">analyze, plan, and execute</span>{" "}
        front-end projects from inception to{" "}
        <span className="font-medium">production</span>, mentoring team members.
        <br></br> My experience spans from developing simple{" "}
        <span className="font-medium">e-commerce</span> websites to complex{" "}
        <span className="font-medium">enterprise systems</span> with advanced
        access control and <span className="font-medium">high security</span>.
      </p>
    </motion.section>
  );
}
