export default function ProjectsPage() {
  const projects = [
    {
      title: "Integrated Resilience & Protection Programme",
      status: "Active",
      tag: "Flagship Project",
      description:
        "A women-led protection and recovery programme supporting women and girls at risk of GBV through safe shelter, psychosocial support, healthcare, education, livelihoods, and reintegration pathways.",
      focus: [
        "Safe shelter and protection",
        "Clinical and reproductive health services",
        "Mental health and psychosocial support",
        "Education, life skills, and livelihoods",
        "Survivor leadership and reintegration",
      ],
      sdgs: ["SDG 5", "SDG 3", "SDG 4", "SDG 8", "SDG 16"],
    },
    {
      title: "Children’s Cancer Hospital",
      status: "Planning Phase",
      tag: "Healthcare Project",
      description:
        "A specialized healthcare project dedicated to improving access to cancer diagnosis, treatment, care, and psychosocial support for children affected by cancer in Sudan.",
      focus: [
        "Paediatric cancer care",
        "Diagnosis and treatment support",
        "Psychosocial support for children and families",
        "Referral pathways and continuity of care",
        "Health system strengthening for child oncology",
      ],
      sdgs: ["SDG 3", "SDG 10"],
    },
    {
      title: "Rehabilitation & Mental Health Centre",
      status: "Planning Phase",
      tag: "Recovery Project",
      description:
        "A confidential recovery centre for individuals affected by substance addiction, trauma, and related mental health challenges, combining counselling, rehabilitation, life skills, and community reintegration.",
      focus: [
        "Addiction recovery support",
        "Psychosocial care and counselling",
        "Mental health services",
        "Family and community reintegration",
        "Vocational and life skills support",
      ],
      sdgs: ["SDG 3", "SDG 10", "SDG 8"],
    },
    {
      title: "Elderly Care & Community Support Initiative",
      status: "Planning Phase",
      tag: "Community Care",
      description:
        "A dignity-centered support initiative for elderly people and vulnerable community members requiring care, protection, health support, mobility assistance, and safe living conditions.",
      focus: [
        "Elderly care and protection",
        "Health and mobility support",
        "Social inclusion",
        "Dignified living spaces",
        "Family and community-based care",
      ],
      sdgs: ["SDG 3", "SDG 10", "SDG 11"],
    },
    {
      title: "Shelter & Humanitarian Accommodation Programme",
      status: "Planning Phase",
      tag: "Emergency Support",
      description:
        "A programme designed to support displaced and vulnerable families with safe temporary accommodation, emergency shelter support, basic household needs, and dignified living conditions.",
      focus: [
        "Emergency accommodation",
        "Safe shelter solutions",
        "Basic household support",
        "Protection-sensitive housing",
        "Support for displaced families",
      ],
      sdgs: ["SDG 1", "SDG 11", "SDG 16"],
    },
    {
      title: "Water, Sanitation & Hygiene Access Programme",
      status: "Planning Phase",
      tag: "WASH",
      description:
        "A public health initiative focused on improving access to clean water, sanitation support, hygiene supplies, and community awareness to reduce disease risk and protect dignity.",
      focus: [
        "Clean water access",
        "Hygiene kits and supplies",
        "Sanitation awareness",
        "Community health education",
        "Disease prevention",
      ],
      sdgs: ["SDG 6", "SDG 3"],
    },
    {
      title: "Food Security & Nutrition Support Programme",
      status: "Planning Phase",
      tag: "Food Security",
      description:
        "A humanitarian response programme addressing food insecurity through emergency food support, nutrition assistance, and community-based resilience initiatives.",
      focus: [
        "Emergency food assistance",
        "Nutrition support",
        "Vulnerable household targeting",
        "Community resilience",
        "Linkages to livelihoods",
      ],
      sdgs: ["SDG 2", "SDG 3", "SDG 1"],
    },
  ];

  const sectors = [
    {
      title: "Women & Girls Protection",
      text: "Supporting women and girls through protection services, safe spaces, psychosocial support, and survivor-centered recovery initiatives.",
      sdgs: ["SDG 5", "SDG 3", "SDG 16"],
    },
    {
      title: "Healthcare Access",
      text: "Improving access to essential healthcare services, medical support, maternal health, and community-based care in vulnerable areas.",
      sdgs: ["SDG 3"],
    },
    {
      title: "Water, Sanitation & Hygiene (WASH)",
      text: "Expanding access to clean water, sanitation infrastructure, and hygiene awareness to protect public health and dignity.",
      sdgs: ["SDG 6", "SDG 3"],
    },
    {
      title: "Shelter & Humanitarian Accommodation",
      text: "Supporting displaced and vulnerable populations through emergency shelter, safe accommodation, and dignified living environments.",
      sdgs: ["SDG 11", "SDG 1"],
    },
    {
      title: "Food Security & Nutrition",
      text: "Addressing food insecurity through emergency assistance, nutrition support, and sustainable community resilience initiatives.",
      sdgs: ["SDG 2", "SDG 3"],
    },
    {
      title: "Rehabilitation & Mental Health Support",
      text: "Providing rehabilitation services, trauma-informed care, mental health support, and pathways toward long-term recovery and reintegration.",
      sdgs: ["SDG 3"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#1E2A44]">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-20">
        <p className="uppercase tracking-[0.3em] text-sm text-[#556F2B] mb-6">
          Projects & Programmes
        </p>

        <h1 className="text-5xl md:text-7xl leading-tight font-semibold max-w-5xl mb-10">
          Practical programmes designed to restore dignity, safety, and recovery.
        </h1>

        <p className="text-xl leading-9 text-[#4A5565] max-w-4xl">
          Azah Charitable Foundation develops integrated humanitarian projects
          that respond to urgent needs while creating long-term pathways for
          protection, health, resilience, and reintegration.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-8 pb-28">
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <details
              key={project.title}
              className="group bg-white rounded-[36px] border border-[#E5DED3] overflow-hidden hover:shadow-xl transition-all duration-300"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 rounded-full bg-[#F7F4EE] text-[#556F2B] text-sm border border-[#E5DED3]">
                        {project.tag}
                      </span>

                      <span
                        className={`px-4 py-2 rounded-full text-sm border ${
                          project.status === "Active"
                            ? "bg-[#556F2B] text-white border-[#556F2B]"
                            : "bg-[#F7F4EE] text-[#B89B5E] border-[#E5DED3]"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-5">
                      {project.title}
                    </h2>

                    <p className="text-[#4A5565] leading-8 max-w-4xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="text-4xl text-[#B89B5E] group-open:rotate-45 transition-transform duration-300">
                    +
                  </div>
                </div>
              </summary>

              <div className="px-8 md:px-10 pb-10">
                <div className="border-t border-[#E5DED3] pt-8 grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-5">
                      Project Focus
                    </h3>

                    <ul className="space-y-4 text-[#4A5565] leading-7">
                      {project.focus.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 w-2 h-2 rounded-full bg-[#556F2B] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-5">
                      Relevant Sustainable Development Goals
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {project.sdgs.map((sdg) => (
                        <span
                          key={sdg}
                          className="px-4 py-2 rounded-full bg-[#F7F4EE] text-sm text-[#556F2B] border border-[#E5DED3]"
                        >
                          {sdg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* SECTORS */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="mb-16">
          <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-6">
            Areas of Work
          </p>

          <h2 className="text-5xl font-bold tracking-[-0.04em] max-w-5xl leading-tight">
            Integrated humanitarian sectors supporting communities across Sudan.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="bg-white border border-[#E5DED3] rounded-[32px] p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-[3px] bg-[#556F2B] mb-8" />

              <h3 className="text-2xl font-semibold leading-snug mb-5">
                {sector.title}
              </h3>

              <p className="text-[#4A5565] leading-8 mb-8">
                {sector.text}
              </p>

              <div className="flex flex-wrap gap-2">
                {sector.sdgs.map((sdg) => (
                  <span
                    key={sdg}
                    className="px-4 py-2 rounded-full bg-[#F7F4EE] text-sm text-[#556F2B] border border-[#E5DED3]"
                  >
                    {sdg}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}