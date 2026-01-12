import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Vision from "@/components/sections/vision";
import NextApple from "@/components/sections/next-apple";
import Bubble from "@/components/sections/bubble";
import CTechLearn from "@/components/sections/ctech-learn";
import Community from "@/components/sections/community";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Vision />
        <NextApple />
        <Bubble />
        <CTechLearn />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
