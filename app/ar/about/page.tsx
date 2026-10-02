"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPageAR() {
  const stats = [
    {
      number: "33.7M",
      title: "شخص بحاجة إلى مساعدات إنسانية",
      text: "أشخاص في السودان بحاجة إلى مساعدات إنسانية عاجلة.",
    },
    {
      number: "12M+",
      title: "شخص نازح",
      text: "أشخاص نزحوا بسبب النزاع في مختلف أنحاء السودان والمناطق المجاورة.",
    },
    {
      number: "17.1M",
      title: "امرأة وفتاة معرضات للخطر",
      text: "نساء وفتيات بحاجة إلى الحماية والأمان والدعم.",
    },
  ];

  const sectors = [
    {
      title: "الحماية والاستجابة للعنف القائم على النوع الاجتماعي",
      text: "مسارات الحماية، والدعم النفسي والاجتماعي، وإدارة الحالات، والخدمات التي تضع الناجين والناجيات في صميم الاستجابة.",
      image: "/sector-images/protection.jpg",
    },
    {
      title: "الوصول إلى الرعاية الصحية",
      text: "دعم الوصول إلى خدمات الرعاية الصحية، والإحالات، والتوعية المجتمعية، والاستجابة الطبية الطارئة.",
      image: "/sector-images/healthcare.jpg",
    },
    {
      title: "الأمن الغذائي والتغذية",
      text: "المساعدات الغذائية الطارئة، وتعزيز القدرة على الصمود في مجال التغذية، والتدخلات الإنسانية.",
      image: "/sector-images/food-security.jpg",
    },
    {
      title: "المياه والصرف الصحي والنظافة",
      text: "تحسين الوصول إلى المياه الآمنة، وأنظمة الصرف الصحي، والتوعية بممارسات النظافة.",
      image: "/sector-images/wash.jpg",
    },
    {
      title: "المأوى والإقامة",
      text: "دعم السكان النازحين من خلال توفير المأوى وحلول الإقامة التي تراعي احتياجات الحماية.",
      image: "/sector-images/shelter.jpg",
    },
    {
      title: "التعليم وسبل كسب العيش",
      text: "تعزيز القدرة على الصمود من خلال التعليم، والمهارات الحياتية، والتمكين الاقتصادي.",
      image: "/sector-images/education.jpg",
    },
  ];

  const approach = [
    {
      title: "الحماية والكرامة",
      text: "دعم الفئات الأكثر ضعفًا من خلال نهج يضع الناجين والناجيات في صميم الاستجابة ويحفظ كرامة الإنسان.",
    },
    {
      title: "حلول تقودها النساء",
      text: "إنشاء مساحات وبرامج مصممة للنساء، تنفذها النساء وتقودها النساء.",
    },
    {
      title: "التعافي طويل الأمد",
      text: "الانتقال من الاستجابة الطارئة إلى تعزيز القدرة على الصمود وإعادة الإدماج والتعافي المستدام.",
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
    <main
      dir="rtl"
      className="min-h-screen bg-[#F7F4EE] text-[#1E2A44]"
    >
      {/* HERO IMAGE */}
      <section className="relative w-full h-[540px] overflow-hidden bg-[#1E2A44]">
        <Image
          src="/sudan-hero.jpg"
          alt="الاستجابة الإنسانية في السودان"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-end pb-16">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl leading-tight font-extrabold tracking-[-0.04em] text-white mb-8">
              <span className="bg-[#1E6C9F] px-2 box-decoration-clone">
                نستجيب للأزمة الإنسانية في السودان
              </span>{" "}
              <span>
                بالكرامة والحماية والأمل.
              </span>
            </h1>

            <div className="flex items-center gap-4">
              <a
                href="/ar/about"
                className="border-2 border-white text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-white hover:text-[#1E2A44] transition"
              >
                اقرأ المزيد
              </a>

              <a
                href="/ar/donate"
                className="bg-[#8B3A3A] text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-[#1E2A44] transition"
              >
                تبرع
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

              <h2
                dir="ltr"
                className="text-6xl font-bold tracking-[-0.05em] mb-5 text-right"
              >
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
                القطاعات الإنسانية
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
                  →
                </button>

                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-[#1E2A44] text-white hover:opacity-90 transition-all text-2xl"
                >
                  ←
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
          <p className="tracking-[0.15em] text-sm text-[#D4BE8A] mb-8">
            مؤسستنا
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight font-bold tracking-[-0.04em] max-w-5xl mb-8">
            مؤسسة تقوم على الحماية والرحمة والإيمان بأن التعافي يجب أن يعيد للإنسان كرامته.
          </h2>

          <p className="text-lg leading-9 text-[#D9E1EA] max-w-5xl">
            تأسست مؤسسة عزة الخيرية في السودان لدعم المجتمعات الأكثر ضعفًا من
            خلال الاستجابة الإنسانية العملية، والبرامج التي تركز على الحماية،
            ومبادرات التعافي طويل الأمد. ويستند عملنا إلى الكرامة والأمان
            والمشاركة المجتمعية وتعزيز القدرة على الصمود بصورة مستدامة.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <p className="tracking-[0.15em] text-sm text-[#556F2B] mb-8">
          نهجنا
        </p>

        <h2 className="text-4xl md:text-6xl leading-tight font-bold tracking-[-0.04em] max-w-6xl mb-14">
          عمل إنساني يرتكز على الكرامة والتعافي.
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
          <p className="tracking-[0.15em] text-sm text-[#D4BE8A] mb-8">
            نهج متكامل
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight font-bold tracking-[-0.04em] max-w-5xl mb-10">
            يربط عملنا بين الاستجابة الإنسانية الفورية والتعافي طويل الأمد.
          </h2>

          <p className="text-lg leading-9 text-[#D9E1EA] max-w-5xl">
            في جميع القطاعات، تعطي مؤسسة عزة الأولوية للكرامة والحماية
            والمشاركة المجتمعية وتعزيز القدرة على الصمود بصورة مستدامة.
            وقد صُممت برامجنا لتلبية الاحتياجات العاجلة، مع دعم الأفراد
            والمجتمعات لإعادة بناء حياتهم في بيئة توفر لهم الأمان والفرص
            والأمل.
          </p>
        </div>
      </section>
    </main>
  );
}
