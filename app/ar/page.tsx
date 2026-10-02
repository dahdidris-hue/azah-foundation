export default function HomeAR() {
  const sectors = [
    {
      title: "الحماية والاستجابة للعنف القائم على النوع الاجتماعي",
      text: "مسارات الحماية، والدعم النفسي والاجتماعي، وإدارة الحالات، والخدمات التي تضع الناجين في صميم الاستجابة.",
      image: "/sector-images/protection.jpg",
    },
    {
      title: "الوصول إلى الرعاية الصحية",
      text: "دعم الوصول إلى خدمات الرعاية الصحية، والإحالات، والتوعية المجتمعية، والاستجابة الطبية الطارئة.",
      image: "/sector-images/healthcare.jpg",
    },
    {
      title: "الأمن الغذائي والتغذية",
      text: "المساعدات الغذائية الطارئة، وتعزيز القدرة على الصمود الغذائي والتغذوي، والتدخلات الإنسانية.",
      image: "/sector-images/food-security.jpg",
    },
    {
      title: "المياه والصرف الصحي والنظافة",
      text: "تحسين الوصول إلى المياه الآمنة، وأنظمة الصرف الصحي، والتوعية بممارسات النظافة.",
      image: "/sector-images/wash.jpg",
    },
    {
      title: "المأوى والإقامة",
      text: "دعم النازحين من خلال توفير حلول الإيواء التي تراعي متطلبات الحماية.",
      image: "/sector-images/shelter.jpg",
    },
    {
      title: "التعليم وسبل كسب العيش",
      text: "تعزيز القدرة على الصمود من خلال التعليم، والمهارات الحياتية، والتمكين الاقتصادي.",
      image: "/sector-images/education.jpg",
    },
  ];

  return (
    <main dir="rtl" className="bg-[#F7F4EE] text-[#1E2A44]">
      <section className="bg-[#F7F4EE] border-b border-[#E7E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-16 md:py-24">
          <div className="mb-14 md:mb-20">
            <p className="tracking-[0.05em] text-xs sm:text-sm text-[#7B826A] mb-5 md:mb-6">
              الأزمة الإنسانية في السودان
            </p>

            <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.15] max-w-5xl mb-7 md:mb-10">
              واحدة من أكبر حالات الطوارئ الإنسانية في العالم.
            </h1>

            <p className="text-lg sm:text-xl leading-8 sm:leading-9 text-[#4A5565] max-w-4xl">
              لا يزال السودان يواجه نزوحًا واسع النطاق، وانعدام الأمن الغذائي،
              ومخاطر الحماية، وانهيار أنظمة الرعاية الصحية، واحتياجات إنسانية
              ملحّة تؤثر على ملايين الأشخاص في مختلف أنحاء البلاد.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
            {[
              [
                "+12 مليون",
                "نازح",
                "يشهد السودان واحدة من أكبر أزمات النزوح في العالم.",
              ],
              [
                "12.7 مليون",
                "امرأة وفتاة معرّضات للخطر",
                "لا تزال ملايين النساء والفتيات معرّضات للعنف القائم على النوع الاجتماعي ومخاطر الحماية.",
              ],
              [
                "+21 مليون",
                "يواجهون الجوع الحاد",
                "يستمر انعدام الأمن الغذائي وسوء التغذية في الانتشار بين المجتمعات الأكثر هشاشة.",
              ],
              [
                "34 مليون",
                "بحاجة إلى مساعدات",
                "تستمر الاحتياجات الإنسانية في الارتفاع في مختلف القطاعات في السودان.",
              ],
            ].map(([number, title, text]) => (
              <div key={title}>
                <div className="h-[2px] bg-[#D9D3C8] mb-6 md:mb-8" />

                <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] mb-4 md:mb-5">
                  {number}
                </h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#8B3A3A]">
                  {title}
                </h3>

                <p className="text-[#4A5565] leading-7 md:leading-8 text-base md:text-lg">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <p className="tracking-[0.05em] text-xs sm:text-sm text-[#7B826A] mb-5 md:mb-6">
            مجالات العمل
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] max-w-5xl leading-tight">
            استجابة إنسانية متكاملة في مختلف أنحاء السودان.
          </h2>
        </div>

        <div className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6">
          {sectors.map((item) => (
            <div
              key={item.title}
              className="min-w-[88%] sm:min-w-[70%] md:min-w-[48%] lg:min-w-[38%] snap-start bg-white rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#E5DED3] shadow-sm"
            >
              <div className="h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                <div className="w-14 md:w-16 h-[3px] bg-[#556F2B] mb-6 md:mb-8" />

                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 md:mb-6">
                  {item.title}
                </h3>

                <p className="text-[#4A5565] text-base md:text-lg leading-7 md:leading-9">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-28 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center border-t border-[#E7E2D8]">
        <div>
          <p className="tracking-[0.05em] text-xs sm:text-sm text-[#7B826A] mb-6 md:mb-8">
            مؤسسة عزة الخيرية – السودان
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.15] lg:leading-[1.1] font-bold tracking-[-0.03em] mb-7 md:mb-10">
            استعادة الكرامة، وتعزيز الحماية والقدرة على الصمود في السودان.
          </h2>

          <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#4A5565] max-w-2xl mb-8 md:mb-12">
            تعمل مؤسسة عزة الخيرية في مجالات الحماية، والرعاية الصحية،
            وإعادة التأهيل، والمأوى، والأمن الغذائي، والتعليم، ومبادرات
            تعزيز القدرة على الصمود على المدى الطويل، دعمًا للمجتمعات
            الأكثر هشاشة في مختلف أنحاء السودان.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
            <a
              href="/ar/projects"
              className="bg-[#1E2A44] text-white px-7 md:px-8 py-4 rounded-full hover:bg-[#2B3A5D] transition text-center"
            >
              استكشف مشاريعنا
            </a>

            <a
              href="/ar/careers"
              className="border border-[#1E2A44] px-7 md:px-8 py-4 rounded-full hover:bg-[#1E2A44] hover:text-white transition text-center"
            >
              انضم إلى فريقنا
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#E7E2D8] rounded-[28px] md:rounded-[42px] p-6 sm:p-8 md:p-14 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7 md:mb-10">
            <p className="tracking-[0.05em] text-xs sm:text-sm text-[#7B826A]">
              برنامجنا الرئيسي
            </p>

            <p className="text-[#B89B5E] font-semibold">IRPP</p>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8">
            البرنامج المتكامل للحماية وتعزيز القدرة على الصمود
          </h3>

          <p className="text-[#4A5565] text-base md:text-lg leading-7 md:leading-9 mb-8 md:mb-12">
            مبادرة تقودها النساء للحماية والتعافي، تهدف إلى دعم النساء
            والفتيات من خلال المأوى، والدعم النفسي والاجتماعي، والرعاية
            الصحية، والتعليم، وإعادة التأهيل، ومسارات إعادة الاندماج.
          </p>

          <a
            href="/ar/projects"
            className="inline-block bg-[#556F2B] text-white px-7 md:px-8 py-4 rounded-full hover:opacity-90 transition"
          >
            عرض البرامج
          </a>
        </div>
      </section>
    </main>
  );
}
