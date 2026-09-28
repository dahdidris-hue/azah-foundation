export default function Home() {
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

  return (
    <main className="bg-[#F7F4EE] text-[#1E2A44]">
      <section className="bg-[#F7F4EE] border-b border-[#E7E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-16 md:py-24">
          <div className="mb-14 md:mb-20">
            <p className="uppercase tracking-[0.22em] sm:tracking-[0.35em] text-xs sm:text-sm text-[#7B826A] mb-5 md:mb-6">
              Sudan Humanitarian Crisis
            </p>

            <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1.02] max-w-5xl mb-7 md:mb-10">
              One of the world’s largest humanitarian emergencies.
            </h1>

            <p className="text-lg sm:text-xl leading-8 sm:leading-9 text-[#4A5565] max-w-4xl">
              Sudan continues to face widespread displacement, food insecurity,
              protection risks, collapsing healthcare systems, and urgent
              humanitarian needs affecting millions across the country.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
            {[
              [
                "12M+",
                "Displaced people",
                "Sudan is experiencing one of the largest displacement crises in the world.",
              ],
              [
                "12.7M",
                "Women & girls at risk",
                "Millions remain exposed to gender-based violence and protection risks.",
              ],
              [
                "21M+",
                "Facing acute hunger",
                "Food insecurity and malnutrition continue to expand across vulnerable communities.",
              ],
              [
                "34M",
                "People needing aid",
                "Humanitarian needs continue to increase across all sectors in Sudan.",
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
          <p className="uppercase tracking-[0.22em] sm:tracking-[0.35em] text-xs sm:text-sm text-[#7B826A] mb-5 md:mb-6">
            Areas of Work
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.05em] max-w-5xl leading-tight">
            Integrated humanitarian response across Sudan.
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
          <p className="uppercase tracking-[0.22em] sm:tracking-[0.35em] text-xs sm:text-sm text-[#7B826A] mb-6 md:mb-8">
            Azah Charitable Foundation Sudan
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.02] lg:leading-[0.95] font-bold tracking-[-0.05em] mb-7 md:mb-10">
            Restoring dignity, protection, and resilience across Sudan.
          </h2>

          <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#4A5565] max-w-2xl mb-8 md:mb-12">
            Azah Charitable Foundation works across protection, healthcare,
            rehabilitation, shelter, food security, education, and long-term
            resilience initiatives supporting vulnerable communities throughout
            Sudan.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
            <a
              href="/projects"
              className="bg-[#1E2A44] text-white px-7 md:px-8 py-4 rounded-full hover:bg-[#2B3A5D] transition text-center"
            >
              Explore Our Projects
            </a>

            <a
              href="/careers"
              className="border border-[#1E2A44] px-7 md:px-8 py-4 rounded-full hover:bg-[#1E2A44] hover:text-white transition text-center"
            >
              Join Our Team
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#E7E2D8] rounded-[28px] md:rounded-[42px] p-6 sm:p-8 md:p-14 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7 md:mb-10">
            <p className="uppercase tracking-[0.22em] sm:tracking-[0.3em] text-xs sm:text-sm text-[#7B826A]">
              Featured Programme
            </p>

            <p className="text-[#B89B5E] font-semibold">IRPP</p>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8">
            Integrated Resilience & Protection Programme
          </h3>

          <p className="text-[#4A5565] text-base md:text-lg leading-7 md:leading-9 mb-8 md:mb-12">
            A women-led protection and recovery initiative supporting women and
            girls through shelter, psychosocial support, healthcare, education,
            rehabilitation, and reintegration pathways.
          </p>

          <a
            href="/projects"
            className="inline-block bg-[#556F2B] text-white px-7 md:px-8 py-4 rounded-full hover:opacity-90 transition"
          >
            View Programmes
          </a>
        </div>
      </section>
    </main>
  );
}
