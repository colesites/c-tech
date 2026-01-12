"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      </div>

      <div className="absolute inset-0 dark:bg-dot-white/[0.2] bg-dot-white/[0.15] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white"
          >
            C Technology
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white/90 mb-6">
              Making things that{" "}
              <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                makes the difference
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Building Tomorrow <span className="text-blue-400">Today</span>
            </h3>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Building a Brighter Future for Web Developers and Beyond
            </p>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Revolutionizing Computer Technology and Community Learning in
              Nigeria
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link href="#products">
              <Button
                size="lg"
                className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg"
              >
                Explore Our Products
              </Button>
            </Link>
            <Link href="https://chat.whatsapp.com/KpCDIxLwefu114E17AtiOr">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg bg-transparent"
              >
                Join Our Community
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
