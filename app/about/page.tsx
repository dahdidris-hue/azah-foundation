"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    {
      number: "33.7M",
      title: "People needing humanitarian assistance",
      text: "People in Sudan requiring urgent humanitarian assistance.",
    },
    {
      number: "12M+",
      title: "People displaced",
      text: "People displaced by conflict across Sudan and neighboring regions.",
    },
    {
      number: "17.1M",
      title: "Women and girls at risk",
      text: "Women and girls in need of protection, safety, and support.",
    },
  ];

  const sectors = [
    {
      title: "Protection & GBV Response",
      text: "Protection pathways, psychosocial support, case management, and survivor-centred services.",
      image: "/sector-images/protection.jpg",
    },
    {
      title: "Healthcare Access",
      text: "Supporting healthcare access, referrals, outreach, and emergency medical response.",
      image: "/sector-images/healthcare.jpg",
    },
    {
      title: "Food Security & Nutrition",
      text: "Emergency food assistance, nutritional resilience, and humanitarian interventions.",
      image: "/sector-images/food-security.jpg",
    },
    {
      title: "Water, Sanitation & Hygiene",
      text: "Improving safe water access, sanitation systems, and hygiene awareness.",
      image: "/sector-images/wash.jpg",
    },
    {
      title: "Shelter & Accommodation",
      text: "Supporting displaced populations through shelter and protection-oriented accommodation.",
      image: "/sector-images/shelter.jpg",
    },
    {
      title: "Education & Livelihoods",
      text: "Strengthening resilience through education, life skills, and economic empowerment.",
      image: "/sector-images/education.jpg",
    },
  ];

  const approach = [
    {
      title: "Protection & Dignity",
      text: "Supporting vulnerable populations through survivor-centered and dignity-based approaches.",
    },
    {
      title: "Women-Led Solutions",
      text: "Creating spaces and programmes designed for women, delivered by women, and led by women.",
    },
    {
      title: "Long-Term Recovery",
      text: "Moving beyond emergency response toward resilience, reintegration, and sustainable recovery.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sectors.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [sectors.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sectors.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sectors.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#1E2A44]">

      {/* HERO */}
      <section className="relative w-full h-[540px] overflow-hidden bg-[#1E2A44]">
        <Image
          src="/sudan-ero.png"
          alt="Sudan humanitarian response"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-end pb-16">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl leading-tight font-extrabold tracking-[-0.04em] text-white mb-8">
              <span className="bg-[#1E6C9F] px-2 box-decoration-clone">
                Responding to Sudan’s humanitarian crisis
              </span>{" "}
              <span>with dignity, protection, and hope.</span>
            </h1>

            <div className="flex items-center gap-4">
              <a
                href="/projects"
                className="border-2 border-white text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-white hover:text-[#1E2A44] transition"
              >
                READ MORE
              </a>

              <a
                href="/donate"
                className="bg-[#8B3A3A] text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-[#1E2A44] transition"
              >
                DONATE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white/70 border border-[#E5DED3] rounded-[32px] p-10"
            >
              <div className="h-[2px] bg-[#D9D3C8] mb-8" />

              <h2 className="text-6xl font-bold tracking-[-0.05em] mb-5">
                {item.number}
              </h2>

              <h3 className="text-xl font-semibold text-[#8B3A3A] mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-[#4A5565] leading-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SLIDESHOW */}
      <section className="max-w-7xl mx-auto px-8 pb-28">
        <div className="relative overflow-hidden rounded-[40px] bg-white shadow-xl border border-[#E5DED3]">
          <div className="grid lg:grid-cols-2 items-center">

            <div className="relative h-[500px]">
              <Image
                src={sectors[currentSlide].image}
                alt={sectors[currentSlide].title}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>

            <div className="p-12 md:p-16">
              <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-8">
                Humanitarian Sectors
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-[-0.04em]">
                {sectors[currentSlide].title}
              </h2>

              <p className="text-lg leading-9 text-[#4A5565] mb-12">
                {sectors[currentSlide].text}
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full bg-[#F1ECE2] hover:bg-[#556F2B] hover:text-white transition-all text-2xl"
                  aria-label="Previous sector"
                >
                  ←
                </button>

                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-[#1E2A44] text-white hover:opacity-90 transition-all text-2xl"
                  aria-label="Next sector"
                >
                  →
                </button>
              </div>

              <div className="flex gap-3 mt-10">
                {sectors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to sector ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? "bg-[#556F2B] w-10"
                        : "bg-[#D5CEC2] w-3"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="max-w-7xl mx-auto px-8 pb-28">
        <div className="bg-[#1E2A44] text-white rounded-[42px] p-12 md:p-20">

          <p className="uppercase tracking-[0.35em] text-sm text-[#D4BE8A] mb-8">
            Our Foundation
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight font-bold tracking-[-0.04em] max-w-5xl mb-8">
            Built on protection, compassion, and the belief that recovery must
            restore dignity.
          </h2>

          <p className="text-lg leading-9 text-[#D9E1EA] max-w-5xl">
            Azah Charitable Foundation Sudan was established to support
            vulnerable communities through practical humanitarian response,
            protection-focused programming, and long-term recovery initiatives.
            Our work is grounded in dignity, safety, community participation,
            and sustainable resilience.
          </p>

        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-7xl mx-auto px-8 pb-20">

        <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-8">
          Our Approach
        </p>

        <h2 className="text-4xl md:text-6xl leading-tight font-bold tracking-[-0.04em] max-w-6xl mb-14">
          Humanitarian action rooted in dignity and recovery.
        </h2>

        <div className="divide-y divide-[#DDD4C6] border-y border-[#DDD4C6]">
          {approach.map((item, index) => (
            <div
              key={item.title}
              className="grid md:grid-cols-[120px_1fr_1.4fr] gap-8 py-10 items-start"
            >
              <p className="text-[#8B3A3A] text-2xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-3xl font-bold leading-tight">
                {item.title}
              </h3>

              <p className="text-[#4A5565] text-lg leading-9 max-w-2xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* INTEGRATED APPROACH */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="bg-[#1E2A44] text-white rounded-[42px] p-12 md:p-20">

          <p className="uppercase tracking-[0.35em] text-sm text-[#D4BE8A] mb-8">
            Integrated Approach
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight font-bold tracking-[-0.04em] max-w-5xl mb-10">
            Our work connects immediate humanitarian response with long-term
            recovery.
          </h2>

          <p className="text-lg leading-9 text-[#D9E1EA] max-w-5xl">
            Across every sector, Azah prioritizes dignity, protection,
            community participation, and sustainable resilience. Our programmes
            are designed to address urgent needs while supporting people to
            rebuild their lives with safety, opportunity, and hope.
          </p>

        </div>
      </section>

    </main>
  );
}
