"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/world-globe").then((mod) => mod.World), {
  ssr: false,
});

const sampleArcs = [
  {
    order: 1,
    startLat: 6.5244,
    startLng: 3.3792,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: "#3b82f6",
  },
  {
    order: 2,
    startLat: 6.5244,
    startLng: 3.3792,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.2,
    color: "#8b5cf6",
  },
  {
    order: 3,
    startLat: 6.5244,
    startLng: 3.3792,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.5,
    color: "#ec4899",
  },
];

const values = [
  {
    title: "Visionary Leadership",
    description: "We think beyond the present and plan for a future that others can&apos;t yet see.",
    icon: "🚀",
  },
  {
    title: "User-Centric Design",
    description: "Our products are intuitive, seamless, and built with the end-user in mind.",
    icon: "👥",
  },
  {
    title: "Relentless Innovation",
    description: "We&apos;re not afraid to challenge the status quo and create solutions that disrupt industries.",
    icon: "💡",
  },
  {
    title: "Commitment to Excellence",
    description: "We strive for perfection in every project, ensuring quality and reliability in all we do.",
    icon: "⭐",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-dot-white/[0.15] flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                C Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Our mission is clear. To innovate and make a meaningful difference in your everyday life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At <span className="font-semibold text-foreground">C Technology</span>, we don&apos;t just create products – we create possibilities. We believe in the power of innovation to change lives, transform industries, and inspire a better tomorrow.
                </p>
                <p>
                  Guided by the vision to become the next iconic tech giant – the next Apple – we&apos;re on a mission to redefine the way people connect, interact, and experience technology.
                </p>
                <p>
                  C Technology&apos;s mission extends beyond mere products. It encompasses a vision for a connected tomorrow. As we unveil our future plans and innovative offerings, we invite you to be part of this journey towards creating technology that truly makes a difference.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="h-[400px] w-full">
                <World
                  data={sampleArcs}
                  globeConfig={{
                    pointSize: 4,
                    globeColor: "#1d072e",
                    showAtmosphere: true,
                    atmosphereColor: "#3b82f6",
                    atmosphereAltitude: 0.15,
                    emissive: "#000000",
                    emissiveIntensity: 0.1,
                    shininess: 0.9,
                    polygonColor: "rgba(59,130,246,0.7)",
                    ambientLight: "#ffffff",
                    directionalLeftLight: "#ffffff",
                    directionalTopLight: "#ffffff",
                    pointLight: "#ffffff",
                    arcTime: 2000,
                    arcLength: 0.9,
                    rings: 1,
                    maxRings: 3,
                  }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-blue-600">C</span> Technology
                </h3>
                <p className="text-lg text-muted-foreground">
                  = <span className="font-semibold text-foreground">See</span> Technology
                </p>
                <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
                  We help you see the future of technology, connecting the world one innovation at a time.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                Our Vision: Becoming the Next{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Apple
                </span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
                <p>
                  What makes Apple one of the most admired companies in the world? It&apos;s more than just great products – it&apos;s about creating an ecosystem that people love, trust, and rely on.
                </p>
                <p>
                  At C Technology, we&apos;re driven by that same philosophy. Our focus isn&apos;t just on building products that work – we&apos;re building experiences that change the way people live and work.
                </p>
                <p className="font-semibold text-foreground text-xl text-center pt-4">
                  We don&apos;t settle for good enough. We aim for greatness.
                </p>
                <p className="text-center">
                  Every product we build, every solution we offer, is designed to push boundaries and deliver something extraordinary.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why C Technology?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re building something extraordinary. Here&apos;s what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500/50 bg-card/50 backdrop-blur-sm">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Join Us on This{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-12">
              Whether you&apos;re a developer, investor, or technology enthusiast, there&apos;s a place for you in the C Technology family. Together, we&apos;re not just building products – we&apos;re building the future.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-colors"
              >
                Explore Our Products
              </Link>
              <a
                href="https://chat.whatsapp.com/F9QPZuDZDmR4xXYMARe7d7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white hover:bg-white/90 rounded-lg transition-colors"
              >
                Join Community
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
