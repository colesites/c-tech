"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Innovative Products",
    description: "Experience cutting-edge technology that sets new standards.",
    icon: "🚀",
  },
  {
    title: "Community-Driven Approach",
    description: "Be a part of shaping future releases tailored to your needs.",
    icon: "👥",
  },
  {
    title: "A Joyful Journey",
    description:
      "We're not just about products—we're about creating joyful moments that inspire connection.",
    icon: "✨",
  },
];

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-left md:text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Where Vision Meets Reality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At C Technology, we&apos;re not just creating products, we&apos;re
            crafting solutions that redefine the way we interact with
            technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-left md:text-center mb-6">
            Shaping Tomorrow Together
          </h3>
          <p className="text-lg text-left md:text-center text-muted-foreground max-w-4xl mx-auto">
            Join C Technology to shape the future! Be part of our journey to
            empower lives and drive innovation as we launch transformative
            products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500/50 bg-card/50 backdrop-blur-sm">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
