"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPageFR() {
  const stats = [
    {
      number: "33,7 M",
      title: "Personnes ayant besoin d’une aide humanitaire",
      text: "Personnes au Soudan ayant besoin d’une aide humanitaire urgente.",
    },
    {
      number: "12 M+",
      title: "Personnes déplacées",
      text: "Personnes déplacées par le conflit au Soudan et dans les régions voisines.",
    },
    {
      number: "17,1 M",
      title: "Femmes et filles exposées à des risques",
      text: "Femmes et filles ayant besoin de protection, de sécurité et de soutien.",
    },
  ];

  const sectors = [
    {
      title: "Protection et réponse aux violences basées sur le genre",
      text: "Mécanismes de protection, soutien psychosocial, gestion des cas et services centrés sur les personnes survivantes.",
      image: "/sector-images/protection.jpg",
    },
    {
      title: "Accès aux soins de santé",
      text: "Soutien à l’accès aux soins de santé, aux systèmes d’orientation, aux actions de proximité et à la réponse médicale d’urgence.",
      image: "/sector-images/healthcare.jpg",
    },
    {
      title: "Sécurité alimentaire et nutrition",
      text: "Aide alimentaire d’urgence, renforcement de la résilience nutritionnelle et interventions humanitaires.",
      image: "/sector-images/food-security.jpg",
    },
    {
      title: "Eau, assainissement et hygiène",
      text: "Amélioration de l’accès à l’eau potable, des systèmes d’assainissement et de la sensibilisation aux bonnes pratiques d’hygiène.",
      image: "/sector-images/wash.jpg",
    },
    {
      title: "Abris et hébergement",
      text: "Soutien aux populations déplacées grâce à des solutions d’hébergement intégrant les besoins de protection.",
      image: "/sector-images/shelter.jpg",
    },
    {
      title: "Éducation et moyens de subsistance",
      text: "Renforcement de la résilience grâce à l’éducation, aux compétences de vie et à l’autonomisation économique.",
      image: "/sector-images/education.jpg",
    },
  ];

  const approach = [
    {
      title: "Protection et dignité",
      text: "Soutenir les populations vulnérables grâce à des approches centrées sur les personnes survivantes et fondées sur le respect de la dignité.",
    },
    {
      title: "Solutions portées par les femmes",
      text: "Créer des espaces et des programmes conçus pour les femmes, mis en œuvre par des femmes et dirigés par des femmes.",
    },
    {
      title: "Relèvement à long terme",
      text: "Aller au-delà de la réponse d’urgence pour renforcer la résilience, la réintégration et un relèvement durable.",
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
      {/* HERO IMAGE */}
      <section className="relative w-full h-[540px] overflow-hidden bg-[#1E2A44]">
        <Image
          src="/sudan-hero.jpg"
          alt="Réponse humanitaire au Soudan"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-end pb-16">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl leading-tight font-extrabold tracking-[-0.04em] text-white mb-8">
              <span className="bg-[#1E6C9F] px-2 box-decoration-clone">
                Répondre à la crise humanitaire au Soudan
              </span>{" "}
              <span>
                avec dignité, protection et espoir.
              </span>
            </h1>

            <div className="flex items-center gap-4">
              <a
                href="/fr/about"
                className="border-2 border-white text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-white hover:text-[#1E2A44] transition"
              >
                EN SAVOIR PLUS
              </a>

              <a
                href="/fr/donate"
                className="bg-[#8B3A3A] text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-[#1E2A44] transition"
              >
                FAIRE UN DON
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
                Secteurs humanitaires
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
                >
                  ←
                </button>

                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-[#1E2A44] text-white hover:opacity-90 transition-all text-2xl"
                >
                  →
                </button>
              </div>

              <div className="flex gap-3 mt-10">
                {sectors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
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
            Notre fondation
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight font-bold tracking-[-0.04em] max-w-5xl mb-8">
            Fondée sur la protection, la compassion et la conviction que le
            relèvement doit restaurer la dignité.
          </h2>

          <p className="text-lg leading-9 text-[#D9E1EA] max-w-5xl">
            Azah Charitable Foundation Soudan a été créée pour soutenir les
            communautés vulnérables à travers une réponse humanitaire concrète,
            des programmes axés sur la protection et des initiatives de
            relèvement à long terme. Notre action repose sur la dignité, la
            sécurité, la participation communautaire et le renforcement durable
            de la résilience.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-8">
          Notre approche
        </p>

        <h2 className="text-4xl md:text-6xl leading-tight font-bold tracking-[-0.04em] max-w-6xl mb-14">
          Une action humanitaire fondée sur la dignité et le relèvement.
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
            Approche intégrée
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight font-bold tracking-[-0.04em] max-w-5xl mb-10">
            Notre action relie la réponse humanitaire immédiate au relèvement à
            long terme.
          </h2>

          <p className="text-lg leading-9 text-[#D9E1EA] max-w-5xl">
            Dans tous les secteurs, Azah accorde la priorité à la dignité, à la
            protection, à la participation communautaire et au renforcement
            durable de la résilience. Nos programmes sont conçus pour répondre
            aux besoins urgents tout en aidant les personnes et les communautés
            à reconstruire leur vie dans la sécurité, avec des perspectives
            d’avenir et de l’espoir.
          </p>
        </div>
      </section>
    </main>
  );
}
