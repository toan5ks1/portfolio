"use client";

import React from "react";
import { featuredData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Showcase() {
  return (
    <section
      id="featured"
      className="mb-28 max-w-full sm:max-w-4xl text-center sm:mb-40"
    >
      <h2 className="text-4xl font-bold mb-10">Featured</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        {featuredData.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="bg-white border border-gray-300 rounded-xl p-5 pb-12 dark:bg-white/10 dark:text-white/80 shadow-md">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-52 object-cover"
                />
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
