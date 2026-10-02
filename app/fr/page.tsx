export default function HomeFR() {
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

  return (
    <main className="bg-[#F7F4EE] text-[#1E2A44]">
      <section className="bg-[#F7F4EE] border-b border-[#E7E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-16 md:py-24">
          <div className="mb-14 md:mb-20">
            <p className="uppercase tracking-[0.22em] sm:tracking-[0.35em] text-xs sm:text-sm text-[#7B826A] mb-5 md:mb-6">
              Crise humanitaire au Soudan
            </p>

            <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1.02] max-w-5xl mb-7 md:mb-10">
              L’une des plus grandes urgences humanitaires au monde.
            </h1>

            <p className="text-lg sm:text-xl leading-8 sm:leading-9 text-[#4A5565] max-w-4xl">
              Le Soudan continue de faire face à des déplacements massifs de
              population, à l’insécurité alimentaire, à des risques de
              protection, à l’effondrement des systèmes de santé et à des
              besoins humanitaires urgents touchant des millions de personnes
              à travers le pays.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
            {[
              [
                "12 M+",
                "Personnes déplacées",
                "Le Soudan connaît l’une des plus importantes crises de déplacement de population au monde.",
              ],
              [
                "12,7 M",
                "Femmes et filles exposées à des risques",
                "Des millions de femmes et de filles restent exposées aux violences basées sur le genre et à d’autres risques de protection.",
              ],
              [
                "21 M+",
                "Personnes confrontées à une faim aiguë",
                "L’insécurité alimentaire et la malnutrition continuent de progresser au sein des communautés les plus vulnérables.",
              ],
              [
                "34 M",
                "Personnes ayant besoin d’aide",
                "Les besoins humanitaires continuent d’augmenter dans l’ensemble des secteurs au Soudan.",
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
            Domaines d’intervention
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.05em] max-w-5xl leading-tight">
            Une réponse humanitaire intégrée à travers le Soudan.
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
            Azah Charitable Foundation – Soudan
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.02] lg:leading-[0.95] font-bold tracking-[-0.05em] mb-7 md:mb-10">
            Restaurer la dignité, renforcer la protection et la résilience au
            Soudan.
          </h2>

          <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#4A5565] max-w-2xl mb-8 md:mb-12">
            Azah Charitable Foundation intervient dans les domaines de la
            protection, de la santé, de la réadaptation, de l’hébergement, de
            la sécurité alimentaire et de l’éducation, ainsi que dans des
            initiatives de résilience à long terme en faveur des communautés
            vulnérables à travers le Soudan.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
            <a
              href="/fr/projects"
              className="bg-[#1E2A44] text-white px-7 md:px-8 py-4 rounded-full hover:bg-[#2B3A5D] transition text-center"
            >
              Découvrir nos projets
            </a>

            <a
              href="/fr/careers"
              className="border border-[#1E2A44] px-7 md:px-8 py-4 rounded-full hover:bg-[#1E2A44] hover:text-white transition text-center"
            >
              Rejoindre notre équipe
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#E7E2D8] rounded-[28px] md:rounded-[42px] p-6 sm:p-8 md:p-14 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7 md:mb-10">
            <p className="uppercase tracking-[0.22em] sm:tracking-[0.3em] text-xs sm:text-sm text-[#7B826A]">
              Notre programme phare
            </p>

            <p className="text-[#B89B5E] font-semibold">IRPP</p>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8">
            Programme intégré de résilience et de protection
          </h3>

          <p className="text-[#4A5565] text-base md:text-lg leading-7 md:leading-9 mb-8 md:mb-12">
            Une initiative de protection et de relèvement portée par des femmes,
            qui soutient les femmes et les filles à travers l’hébergement, le
            soutien psychosocial, les soins de santé, l’éducation, la
            réadaptation et des parcours de réintégration.
          </p>

          <a
            href="/fr/projects"
            className="inline-block bg-[#556F2B] text-white px-7 md:px-8 py-4 rounded-full hover:opacity-90 transition"
          >
            Voir les programmes
          </a>
        </div>
      </section>
    </main>
  );
}
