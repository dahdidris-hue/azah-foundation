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
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="mb-20">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7B826A] mb-6">
              Sudan Humanitarian Crisis
            </p>

            <h1 className="text-6xl md:text-7xl font-bold tracking-[-0.05em] leading-[1] max-w-5xl mb-10">
              One of the world’s largest humanitarian emergencies.
            </h1>

            <p className="text-xl leading-9 text-[#4A5565] max-w-4xl">
              Sudan continues to face widespread displacement, food insecurity,
              protection risks, collapsing healthcare systems, and urgent
              humanitarian needs affecting millions across the country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              ["12M+", "Displaced people", "Sudan is experiencing one of the largest displacement crises in the world."],
              ["12.7M", "Women & girls at risk", "Millions remain exposed to gender-based violence and protection risks."],
              ["21M+", "Facing acute hunger", "Food insecurity and malnutrition continue to expand across vulnerable communities."],
              ["34M", "People needing aid", "Humanitarian needs continue to increase across all sectors in Sudan."],
            ].map(([number, title, text]) => (
              <div key={title}>
                <div className="h-[2px] bg-[#D9D3C8] mb-8" />

                <h2 className="text-7xl font-bold tracking-[-0.05em] mb-5">
                  {number}
                </h2>

                <h3 className="text-2xl font-semibold mb-4 text-[#8B3A3A]">
                  {title}
                </h3>

                <p className="text-[#4A5565] leading-8 text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-14">
          <p className="uppercase tracking-[0.35em] text-sm text-[#7B826A] mb-6">
            Areas of Work
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.05em] max-w-5xl leading-tight">
            Integrated humanitarian response across Sudan.
          </h2>
        </div>

        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6">
          {sectors.map((item) => (
            <div
              key={item.title}
              className="min-w-[85%] md:min-w-[48%] lg:min-w-[38%] snap-start bg-white rounded-[36px] overflow-hidden border border-[#E5DED3] shadow-sm"
            >
              <div className="h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-10">
                <div className="w-16 h-[3px] bg-[#556F2B] mb-8" />

                <h3 className="text-3xl font-bold leading-tight mb-6">
                  {item.title}
                </h3>

                <p className="text-[#4A5565] text-lg leading-9">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-28 grid lg:grid-cols-2 gap-24 items-center border-t border-[#E7E2D8]">
        <div>
          <p className="uppercase tracking-[0.35em] text-sm text-[#7B826A] mb-8">
            Azah Charitable Foundation Sudan
          </p>

          <h2 className="text-[5rem] leading-[0.95] font-bold tracking-[-0.05em] mb-10">
            Restoring dignity, protection, and resilience across Sudan.
          </h2>

          <p className="text-xl leading-9 text-[#4A5565] max-w-2xl mb-12">
            Azah Charitable Foundation works across protection, healthcare,
            rehabilitation, shelter, food security, education, and long-term
            resilience initiatives supporting vulnerable communities throughout
            Sudan.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/projects"
              className="bg-[#1E2A44] text-white px-8 py-4 rounded-full hover:bg-[#2B3A5D] transition"
            >
              Explore Our Projects
            </a>

            <a
              href="/careers"
              className="border border-[#1E2A44] px-8 py-4 rounded-full hover:bg-[#1E2A44] hover:text-white transition"
            >
              Join Our Team
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#E7E2D8] rounded-[42px] p-14 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <p className="uppercase tracking-[0.3em] text-sm text-[#7B826A]">
              Featured Programme
            </p>

            <p className="text-[#B89B5E] font-semibold">IRPP</p>
          </div>

          <h3 className="text-5xl font-bold leading-tight mb-8">
            Integrated Resilience & Protection Programme
          </h3>

          <p className="text-[#4A5565] text-lg leading-9 mb-12">
            A women-led protection and recovery initiative supporting women and
            girls through shelter, psychosocial support, healthcare, education,
            rehabilitation, and reintegration pathways.
          </p>

          <a
            href="/projects"
            className="inline-block bg-[#556F2B] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
          >
            View Programmes
          </a>
        </div>
      </section>
    </main>
  );
}