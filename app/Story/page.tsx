import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
     <Navbar />
    <div className="min-h-screen bg-[#FAFAFA]">

    {/* Background Image */}
<div className="absolute top-0 left-0 w-full h-full -z-10">
    <Image
      src="/images/story.png"
      alt="Story background"
      fill
      className="object-contain"
      priority
    />
  </div>
      <main className="pt-40 max-w-5xl mx-auto px-6">

        <h1 className="text-6xl font-black mb-8">
          About Al-Shams Youth Circle
        </h1>

        <p className="text-xl text-zinc-600 leading-relaxed mb-6">
          Al-Shams Youth Circle is a Karachi-based movement dedicated to
          empowering Muslim youth through faith, fitness, leadership,
          and community building.
        </p>

        <p className="text-lg text-zinc-600 leading-relaxed">
          Founded in 2026 by a small group of friends, the circle has
          grown into a vibrant network hosting sports leagues, talks,
          workshops, and community events across the city.

          
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Mission
We strive to empower Muslim youth by deepening their understanding of Islam, strengthening their relationship with Allah, and equipping them with the skills and confidence needed to become positive leaders. Through meaningful programs and strong peer support, we aim to inspire purpose-driven lives guided by Islamic principles.

Vision
We envision confident, knowledgeable, and compassionate Muslim youth who embrace their Islamic identity, lead with integrity, and serve as a source of positive change within the Ummah and beyond.
          
        </p>
      </main>



    </div>
    <Footer />
    </div>
  );
}
