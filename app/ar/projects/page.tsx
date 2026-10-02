export default function ProjectsPageAR() {
  const projects = [
    {
      title: "البرنامج المتكامل للحماية وتعزيز القدرة على الصمود",
      status: "نشط",
      tag: "البرنامج الرئيسي",
      description:
        "برنامج للحماية والتعافي تقوده النساء، ويدعم النساء والفتيات المعرضات لخطر العنف القائم على النوع الاجتماعي من خلال المأوى الآمن، والدعم النفسي والاجتماعي، والرعاية الصحية، والتعليم، وسبل كسب العيش، ومسارات إعادة الإدماج.",
      focus: [
        "المأوى الآمن والحماية",
        "خدمات الرعاية الصحية السريرية والصحة الإنجابية",
        "الصحة النفسية والدعم النفسي والاجتماعي",
        "التعليم والمهارات الحياتية وسبل كسب العيش",
        "تمكين الناجيات وإعادة الإدماج",
      ],
      sdgs: [
        "الهدف 5",
        "الهدف 3",
        "الهدف 4",
        "الهدف 8",
        "الهدف 16",
      ],
    },
    {
      title: "مستشفى سرطان الأطفال",
      status: "مرحلة التخطيط",
      tag: "مشروع صحي",
      description:
        "مشروع متخصص في الرعاية الصحية يهدف إلى تحسين الوصول إلى خدمات تشخيص السرطان وعلاجه والرعاية والدعم النفسي والاجتماعي للأطفال المصابين بالسرطان في السودان.",
      focus: [
        "رعاية سرطان الأطفال",
        "دعم التشخيص والعلاج",
        "الدعم النفسي والاجتماعي للأطفال وأسرهم",
        "مسارات الإحالة واستمرارية الرعاية",
        "تعزيز النظام الصحي في مجال أورام الأطفال",
      ],
      sdgs: ["الهدف 3", "الهدف 10"],
    },
    {
      title: "مركز إعادة التأهيل والصحة النفسية",
      status: "مرحلة التخطيط",
      tag: "مشروع للتعافي",
      description:
        "مركز يوفر خدمات سرية للتعافي وإعادة التأهيل للأشخاص المتأثرين بالإدمان والصدمات النفسية والتحديات المرتبطة بالصحة النفسية، من خلال الجمع بين الإرشاد، وإعادة التأهيل، وتنمية المهارات الحياتية، وإعادة الإدماج المجتمعي.",
      focus: [
        "دعم التعافي من الإدمان",
        "الرعاية النفسية والاجتماعية والإرشاد",
        "خدمات الصحة النفسية",
        "إعادة الإدماج الأسري والمجتمعي",
        "دعم المهارات المهنية والحياتية",
      ],
      sdgs: ["الهدف 3", "الهدف 10", "الهدف 8"],
    },
    {
      title: "مبادرة رعاية كبار السن والدعم المجتمعي",
      status: "مرحلة التخطيط",
      tag: "الرعاية المجتمعية",
      description:
        "مبادرة دعم ترتكز على الكرامة، وتهدف إلى مساندة كبار السن وأفراد المجتمع الأكثر ضعفًا ممن يحتاجون إلى الرعاية والحماية والدعم الصحي والمساعدة على الحركة وظروف معيشية آمنة.",
      focus: [
        "رعاية كبار السن وحمايتهم",
        "الدعم الصحي والمساعدة على الحركة",
        "الاندماج الاجتماعي",
        "توفير بيئات معيشية تحفظ الكرامة",
        "الرعاية الأسرية والمجتمعية",
      ],
      sdgs: ["الهدف 3", "الهدف 10", "الهدف 11"],
    },
    {
      title: "برنامج المأوى والإقامة الإنسانية",
      status: "مرحلة التخطيط",
      tag: "الدعم الطارئ",
      description:
        "برنامج مصمم لدعم الأسر النازحة والأكثر ضعفًا من خلال توفير الإقامة المؤقتة الآمنة، والمأوى في حالات الطوارئ، والاحتياجات المنزلية الأساسية، وظروف معيشية تحفظ الكرامة.",
      focus: [
        "الإقامة في حالات الطوارئ",
        "حلول المأوى الآمن",
        "دعم الاحتياجات المنزلية الأساسية",
        "حلول سكن تراعي احتياجات الحماية",
        "دعم الأسر النازحة",
      ],
      sdgs: ["الهدف 1", "الهدف 11", "الهدف 16"],
    },
    {
      title: "برنامج الوصول إلى المياه والصرف الصحي والنظافة",
      status: "مرحلة التخطيط",
      tag: "المياه والصرف الصحي والنظافة",
      description:
        "مبادرة للصحة العامة تركز على تحسين الوصول إلى المياه النظيفة، وخدمات الصرف الصحي، ومستلزمات النظافة، والتوعية المجتمعية للحد من مخاطر الأمراض والحفاظ على الكرامة.",
      focus: [
        "الوصول إلى المياه النظيفة",
        "حقائب ومستلزمات النظافة",
        "التوعية بالصرف الصحي",
        "التثقيف الصحي المجتمعي",
        "الوقاية من الأمراض",
      ],
      sdgs: ["الهدف 6", "الهدف 3"],
    },
    {
      title: "برنامج دعم الأمن الغذائي والتغذية",
      status: "مرحلة التخطيط",
      tag: "الأمن الغذائي",
      description:
        "برنامج للاستجابة الإنسانية يهدف إلى مواجهة انعدام الأمن الغذائي من خلال المساعدات الغذائية الطارئة، والدعم التغذوي، والمبادرات المجتمعية لتعزيز القدرة على الصمود.",
      focus: [
        "المساعدات الغذائية الطارئة",
        "الدعم التغذوي",
        "استهداف الأسر الأكثر ضعفًا",
        "تعزيز قدرة المجتمعات على الصمود",
        "الربط بفرص سبل كسب العيش",
      ],
      sdgs: ["الهدف 2", "الهدف 3", "الهدف 1"],
    },
  ];

  const sectors = [
    {
      title: "حماية النساء والفتيات",
      text: "دعم النساء والفتيات من خلال خدمات الحماية، والمساحات الآمنة، والدعم النفسي والاجتماعي، ومبادرات التعافي التي تضع الناجيات في صميم الاستجابة.",
      sdgs: ["الهدف 5", "الهدف 3", "الهدف 16"],
    },
    {
      title: "الوصول إلى الرعاية الصحية",
      text: "تحسين الوصول إلى خدمات الرعاية الصحية الأساسية، والدعم الطبي، وصحة الأم، والرعاية المجتمعية في المناطق الأكثر ضعفًا.",
      sdgs: ["الهدف 3"],
    },
    {
      title: "المياه والصرف الصحي والنظافة",
      text: "توسيع نطاق الوصول إلى المياه النظيفة، والبنية التحتية للصرف الصحي، والتوعية بممارسات النظافة من أجل حماية الصحة العامة والحفاظ على الكرامة.",
      sdgs: ["الهدف 6", "الهدف 3"],
    },
    {
      title: "المأوى والإقامة الإنسانية",
      text: "دعم السكان النازحين والأكثر ضعفًا من خلال توفير المأوى في حالات الطوارئ، والإقامة الآمنة، وبيئات معيشية تحفظ الكرامة.",
      sdgs: ["الهدف 11", "الهدف 1"],
    },
    {
      title: "الأمن الغذائي والتغذية",
      text: "مواجهة انعدام الأمن الغذائي من خلال المساعدات الطارئة، والدعم التغذوي، والمبادرات المستدامة لتعزيز قدرة المجتمعات على الصمود.",
      sdgs: ["الهدف 2", "الهدف 3"],
    },
    {
      title: "إعادة التأهيل ودعم الصحة النفسية",
      text: "تقديم خدمات إعادة التأهيل، والرعاية المراعية للصدمات النفسية، ودعم الصحة النفسية، ومسارات للتعافي وإعادة الإدماج على المدى الطويل.",
      sdgs: ["الهدف 3"],
    },
  ];

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F7F4EE] text-[#1E2A44] text-right"
    >
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-20">
        <p className="tracking-[0.1em] text-sm text-[#556F2B] mb-6">
          المشاريع والبرامج
        </p>

        <h1 className="text-5xl md:text-7xl leading-tight font-semibold max-w-5xl mb-10">
          برامج عملية مصممة لاستعادة الكرامة وتعزيز الأمان ودعم التعافي.
        </h1>

        <p className="text-xl leading-9 text-[#4A5565] max-w-4xl">
          تعمل مؤسسة عزة الخيرية على تطوير مشاريع إنسانية متكاملة تستجيب
          للاحتياجات العاجلة، مع بناء مسارات طويلة الأمد للحماية والصحة وتعزيز
          القدرة على الصمود وإعادة الإدماج.
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
                          project.status === "نشط"
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
                      محاور المشروع
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
                      أهداف التنمية المستدامة ذات الصلة
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
          <p className="tracking-[0.1em] text-sm text-[#556F2B] mb-6">
            مجالات العمل
          </p>

          <h2 className="text-5xl font-bold tracking-[-0.04em] max-w-5xl leading-tight">
            قطاعات إنسانية متكاملة لدعم المجتمعات في مختلف أنحاء السودان.
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
