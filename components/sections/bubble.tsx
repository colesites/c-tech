"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Bubble() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="products"
      ref={ref}
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_55%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_55%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider">
            Introducing{" "}
            <span className="bg-linear-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bubble
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 mb-4 tracking-wide">
            The Future of Social Media
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20 max-w-4xl mx-auto"
        >
          <div className="aspect-video rounded-3xl overflow-hidden bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 p-1">
            <div className="w-full h-full bg-black rounded-3xl flex items-center justify-center">
              <div className="text-6xl md:text-9xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Bubble
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20 -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Bubble, our revolutionary social media platform.
          </h3>
          <p className="text-xl text-white/80 mb-6">
            Why settle for ordinary? Bubble is here to redefine your social
            media experience with features and functionality that surpasses even
            the biggest names out there!
          </p>
          <p className="text-lg text-white/70 mb-6">
            With unparalleled features tailored to enhance connectivity and
            creativity, Bubble empowers you to express yourself like never
            before.
          </p>
          <p className="text-xl text-white/90 font-semibold">
            Say goodbye to limitations and hello to endless possibilities!
            Connect, share, and engage with friends like never before.
            We&apos;ve designed a platform that puts you first—because you
            deserve better.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-linear-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg rounded-full"
          >
            Coming Soon
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
