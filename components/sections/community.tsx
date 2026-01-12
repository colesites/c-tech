"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="community" ref={ref} className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Join a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Thriving Community
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-12">
            Connect with like-minded individuals in our vibrant WhatsApp community.
            Share insights, ask questions, and learn from one another as you
            navigate your tech journey.
          </p>
          <Link
            href="https://chat.whatsapp.com/F9QPZuDZDmR4xXYMARe7d7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 text-lg rounded-full"
            >
              Join the Community
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Join Us in{" "}
            <span className="text-blue-400">Shaping the Future of Tech!</span>
          </h3>
          <p className="text-xl text-center text-white/80 mb-6">
            Be Part of Something Bigger!
          </p>
          <p className="text-lg text-center text-white/70 max-w-4xl mx-auto">
            We&apos;re not just building a company, We&apos;re more than a tech company.
            We&apos;re a catalyst for change, a pioneer of innovation, and a builder of
            dreams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            We&apos;re building a{" "}
            <span className="text-purple-400">movement.</span>
          </h3>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A movement driven by the belief that technology can make the world a
            better place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
            We&apos;re inviting visionary investors, talented creators, and passionate
            users to join us on this journey.
          </p>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Together, we&apos;re shaping a future
          </h3>
          <div className="space-y-4">
            <p className="text-2xl md:text-4xl font-bold tracking-wider">
              that&apos;s{" "}
              <span className="text-blue-400">smarter</span>
            </p>
            <p className="text-2xl md:text-4xl font-bold tracking-wider">
              that&apos;s{" "}
              <span className="text-purple-400">safer</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to the future.
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome to C Technology.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
