"use client";

import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useRef } from "react";

export default function CTechLearn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-left md:text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Roadmap:{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Building for the Future
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our journey doesn&apos;t stop at Bubble. At C Technology, we have a roadmap
            filled with ambitious projects designed to disrupt industries and
            redefine the future of tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">📚</div>
              <h3 className="text-3xl md:text-5xl font-bold">C Tech Learn</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              A SaaS platform designed for developers of all levels—beginners,
              intermediate, and advanced—to master Front-End, Back-End, and
              Full-Stack Development.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border">
                <div className="text-3xl mb-2">🌱</div>
                <h4 className="font-semibold text-lg mb-2">Beginners</h4>
                <p className="text-sm text-muted-foreground">
                  Start your coding journey with comprehensive tutorials
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold text-lg mb-2">Intermediate</h4>
                <p className="text-sm text-muted-foreground">
                  Level up your skills with advanced concepts
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border">
                <div className="text-3xl mb-2">⭐</div>
                <h4 className="font-semibold text-lg mb-2">Advanced</h4>
                <p className="text-sm text-muted-foreground">
                  Master full-stack development and beyond
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-left md:text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Towards a Brighter Future in Tech
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            C Technology is not just about learning, it&apos;s about innovation. We&apos;re
            committed to building a better future for web developers across Nigeria
            by creating cutting-edge tech devices and software solutions. Join us on
            this exciting journey as we make a meaningful impact in the tech world.
          </p>
          <div className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Transform Your Passion Into Reality
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The future is bright for those who dare to dream—and at C Technology,
            we&apos;re here to support you every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
