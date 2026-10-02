export default function ProjectsPageFR() {
  const projects = [
    {
      title: "Programme intégré de résilience et de protection",
      status: "Actif",
      tag: "Programme phare",
      description:
        "Un programme de protection et de relèvement porté par des femmes, qui soutient les femmes et les filles exposées aux violences basées sur le genre grâce à des solutions d’hébergement sécurisé, un soutien psychosocial, des soins de santé, l’éducation, des moyens de subsistance et des parcours de réintégration.",
      focus: [
        "Hébergement sécurisé et protection",
        "Services de santé clinique et reproductive",
        "Santé mentale et soutien psychosocial",
        "Éducation, compétences de vie et moyens de subsistance",
        "Leadership des personnes survivantes et réintégration",
      ],
      sdgs: ["ODD 5", "ODD 3", "ODD 4", "ODD 8", "ODD 16"],
    },
    {
      title: "Hôpital pédiatrique d’oncologie",
      status: "Actif",
      tag: "Projet de santé",
      description:
        "Un projet de santé spécialisé visant à améliorer l’accès au diagnostic, au traitement, aux soins et au soutien psychosocial pour les enfants atteints de cancer au Soudan.",
      focus: [
        "Prise en charge des cancers pédiatriques",
        "Soutien au diagnostic et au traitement",
        "Soutien psychosocial aux enfants et aux familles",
        "Parcours d’orientation et continuité des soins",
        "Renforcement du système de santé en oncologie pédiatrique",
      ],
      sdgs: ["ODD 3", "ODD 10"],
    },
    {
      title: "Centre de réadaptation et de santé mentale",
      status: "Phase de planification",
      tag: "Projet de relèvement",
      description:
        "Un centre de relèvement confidentiel destiné aux personnes touchées par les addictions, les traumatismes et les difficultés de santé mentale qui y sont associées, combinant accompagnement psychosocial, réadaptation, compétences de vie et réintégration communautaire.",
      focus: [
        "Soutien au rétablissement des personnes confrontées aux addictions",
        "Prise en charge psychosociale et accompagnement",
        "Services de santé mentale",
        "Réintégration familiale et communautaire",
        "Soutien à la formation professionnelle et aux compétences de vie",
      ],
      sdgs: ["ODD 3", "ODD 10", "ODD 8"],
    },
    {
      title: "Initiative de soutien aux personnes âgées et aux communautés",
      status: "Phase de planification",
      tag: "Soutien communautaire",
      description:
        "Une initiative de soutien fondée sur la dignité, destinée aux personnes âgées et aux membres vulnérables des communautés ayant besoin de soins, de protection, d’un soutien en matière de santé, d’une aide à la mobilité et de conditions de vie sûres.",
      focus: [
        "Soins et protection des personnes âgées",
        "Soutien en matière de santé et de mobilité",
        "Inclusion sociale",
        "Espaces de vie dignes",
        "Prise en charge familiale et communautaire",
      ],
      sdgs: ["ODD 3", "ODD 10", "ODD 11"],
    },
    {
      title: "Programme d’hébergement et d’abris humanitaires",
      status: "Phase de planification",
      tag: "Soutien d’urgence",
      description:
        "Un programme conçu pour soutenir les familles déplacées et vulnérables grâce à des solutions d’hébergement temporaire sûr, des abris d’urgence, une aide répondant aux besoins essentiels des ménages et des conditions de vie dignes.",
      focus: [
        "Hébergement d’urgence",
        "Solutions d’abris sûrs",
        "Soutien aux besoins essentiels des ménages",
        "Hébergement intégrant les besoins de protection",
        "Soutien aux familles déplacées",
      ],
      sdgs: ["ODD 1", "ODD 11", "ODD 16"],
    },
    {
      title: "Programme d’accès à l’eau, à l’assainissement et à l’hygiène",
      status: "Phase de planification",
      tag: "WASH",
      description:
        "Une initiative de santé publique visant à améliorer l’accès à l’eau potable, aux services d’assainissement, aux produits d’hygiène et à la sensibilisation communautaire afin de réduire les risques de maladie et de préserver la dignité.",
      focus: [
        "Accès à l’eau potable",
        "Kits et produits d’hygiène",
        "Sensibilisation à l’assainissement",
        "Éducation communautaire à la santé",
        "Prévention des maladies",
      ],
      sdgs: ["ODD 6", "ODD 3"],
    },
    {
      title: "Programme de soutien à la sécurité alimentaire et à la nutrition",
      status: "Phase de planification",
      tag: "Sécurité alimentaire",
      description:
        "Un programme de réponse humanitaire visant à lutter contre l’insécurité alimentaire grâce à une aide alimentaire d’urgence, un soutien nutritionnel et des initiatives communautaires de renforcement de la résilience.",
      focus: [
        "Aide alimentaire d’urgence",
        "Soutien nutritionnel",
        "Ciblage des ménages vulnérables",
        "Résilience communautaire",
        "Liens avec les moyens de subsistance",
      ],
      sdgs: ["ODD 2", "ODD 3", "ODD 1"],
    },
  ];

  const sectors = [
    {
      title: "Protection des femmes et des filles",
      text: "Soutenir les femmes et les filles grâce à des services de protection, des espaces sûrs, un soutien psychosocial et des initiatives de relèvement centrées sur les personnes survivantes.",
      sdgs: ["ODD 5", "ODD 3", "ODD 16"],
    },
    {
      title: "Accès aux soins de santé",
      text: "Améliorer l’accès aux services de santé essentiels, au soutien médical, à la santé maternelle et aux soins communautaires dans les zones vulnérables.",
      sdgs: ["ODD 3"],
    },
    {
      title: "Eau, assainissement et hygiène (WASH)",
      text: "Élargir l’accès à l’eau potable, aux infrastructures d’assainissement et à la sensibilisation aux bonnes pratiques d’hygiène afin de protéger la santé publique et la dignité.",
      sdgs: ["ODD 6", "ODD 3"],
    },
    {
      title: "Abris et hébergement humanitaire",
      text: "Soutenir les populations déplacées et vulnérables grâce à des abris d’urgence, des solutions d’hébergement sûres et des conditions de vie dignes.",
      sdgs: ["ODD 11", "ODD 1"],
    },
    {
      title: "Sécurité alimentaire et nutrition",
      text: "Lutter contre l’insécurité alimentaire grâce à une aide d’urgence, un soutien nutritionnel et des initiatives durables de résilience communautaire.",
      sdgs: ["ODD 2", "ODD 3"],
    },
    {
      title: "Réadaptation et soutien en santé mentale",
      text: "Fournir des services de réadaptation, une prise en charge tenant compte des traumatismes, un soutien en santé mentale et des parcours favorisant le relèvement et la réintégration à long terme.",
      sdgs: ["ODD 3"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#1E2A44]">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-20">
        <p className="uppercase tracking-[0.3em] text-sm text-[#556F2B] mb-6">
          Projets et programmes
        </p>

        <h1 className="text-5xl md:text-7xl leading-tight font-semibold max-w-5xl mb-10">
          Des programmes concrets conçus pour restaurer la dignité, renforcer
          la sécurité et favoriser le relèvement.
        </h1>

        <p className="text-xl leading-9 text-[#4A5565] max-w-4xl">
          Azah Charitable Foundation développe des projets humanitaires intégrés
          qui répondent aux besoins urgents tout en créant des perspectives à
          long terme en matière de protection, de santé, de résilience et de
          réintégration.
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
                          project.status === "Actif"
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
                      Axes d’intervention du projet
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
                      Objectifs de développement durable concernés
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
            Domaines d’intervention
          </p>

          <h2 className="text-5xl font-bold tracking-[-0.04em] max-w-5xl leading-tight">
            Des secteurs humanitaires intégrés au service des communautés à
            travers le Soudan.
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
