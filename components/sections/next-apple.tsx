"use client";

import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useRef } from "react";

const qualities = [
  {
    title: "Innovation-Driven Culture",
    description:
      "We foster a culture that celebrates creativity, risk-taking, and out-of-the-box thinking.",
  },
  {
    title: "Design Excellence",
    description:
      "Our products are beautifully designed and built to provide seamless, intuitive experiences.",
  },
  {
    title: "Customer-First Approach",
    description:
      "We listen to our users and build solutions that solve real problems.",
  },
  {
    title: "Ecosystem Thinking",
    description:
      "Like Apple, we're creating an interconnected ecosystem of devices, services, and platforms that work together harmoniously.",
  },
];

export default function NextApple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-black to-blue-900/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Next{" "}
            <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Apple
            </span>{" "}
            Is Here
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            As we set our sights on becoming the next tech giant, we&apos;re
            committed to delivering groundbreaking products that resonate with
            your needs and aspirations. From cutting-edge devices to
            transformative software, we&apos;re here to push boundaries and
            elevate your tech experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Why We Will Be The Next Apple
          </h3>
          <p className="text-lg text-center text-white/60 max-w-3xl mx-auto mb-4">
            What Makes A Company The Next Apple?
          </p>
          <p className="text-xl text-center text-white/80 max-w-4xl mx-auto">
            It&apos;s not just about building great products – it&apos;s about
            creating a brand that People{" "}
            <span className="text-blue-400 font-bold">Trust</span>,{" "}
            <span className="text-purple-400 font-bold">Love</span>, And{" "}
            <span className="text-pink-400 font-bold">Want To Be Part Of</span>
          </p>
          <p className="text-lg text-center text-white/70 max-w-3xl mx-auto mt-6">
            At <span className="font-bold">C Technology</span>, we&apos;re
            taking all the right steps to become that brand.
          </p>
        </motion.div>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Here&apos;s How We Are Doing It
        </motion.h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }
              }
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {quality.title}
                </h3>
                <p className="text-white/70">{quality.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
