import Image from "next/image";

export default function FoundersPageAR() {
  return (
    <main dir="rtl" className="bg-[#F7F4EE] text-[#1E2A44]">
      {/* Page Introduction */}
      <section className="border-b border-[#E7E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
          <p className="tracking-[0.05em] text-xs sm:text-sm text-[#556F2B] font-semibold mb-5">
            المؤسِّسات والقيادة
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.15] max-w-4xl">
            من يقف وراء مؤسسة عزة.
          </h1>

          <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#4A5565] max-w-3xl mt-8">
            التزام مشترك بالخدمة والمساءلة وإعادة بناء حياة كريمة.
          </p>
        </div>
      </section>

      {/* Azah */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 lg:gap-20 items-start">
          
          {/* Photo */}
          <div>
            <div className="relative w-full aspect-[4/4.2] md:aspect-[4/5] rounded-[28px] md:rounded-[40px] overflow-hidden bg-[#E7E2D8]">
              <Image
                src="/azah-founder-photo-2026.png"
                alt="عزة محيي الدين مبروك"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>

          {/* Profile */}
          <div className="lg:pt-4">
            <p className="tracking-[0.05em] text-xs text-[#7B826A] font-semibold mb-5">
              الرئيسة والمؤسِّسة
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
              عزة محيي الدين مبروك
            </h2>

            <div className="mt-8 border-t border-[#D9D3C8] pt-6 space-y-3">
              <div>
                <p className="font-semibold">
                  رئيسة مؤسسة عزة الخيرية
                </p>
              </div>

              <div>
                <p className="font-semibold">المؤسِّسة</p>
              </div>

              <div>
                <p className="font-semibold">
                  حرم رئيس وزراء السودان
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="mt-10 bg-white border border-[#E5DED3] rounded-[28px] md:rounded-[36px] p-7 md:p-10 shadow-sm">
              <p className="tracking-[0.05em] text-xs text-[#B89B5E] font-semibold mb-6">
                رسالة من المؤسِّسة
              </p>

              <div className="text-lg leading-9 text-[#4A5565] whitespace-pre-line">
                {`نحن في مؤسسة عزة الخيرية نؤمن إيمانًا قاطعًا بأن خدمة الإنسان وتلبية جميع احتياجاته مسؤولية أخلاقية وإنسانية، لذلك فإننا نعمل على تسخير قدراتنا لتحقيق هذا الطموح، ونأمل في تحويله إلى عمل يعيد للإنسان في هذا الوطن حياةً كريمةً.`}
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-[#E7E2D8]">
                <p className="text-lg font-bold text-[#1E2A44]">
                  عزة محيي الدين مبروك
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="border-t border-[#D9D3C8]" />
      </div>

      {/* Dahd */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 lg:gap-20 items-start">
          
          {/* Profile */}
          <div className="order-2 lg:order-1 lg:pt-4">
            <p className="tracking-[0.05em] text-xs text-[#7B826A] font-semibold mb-5">
              الرئيس التنفيذي للعمليات والمؤسِّسة المشاركة
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
              دعد كامل إدريس
            </h2>

            <div className="mt-8 border-t border-[#D9D3C8] pt-6 space-y-3">
              <div>
                <p className="font-semibold">
                  الرئيس التنفيذي للعمليات
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  المؤسِّسة المشاركة
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="mt-10 bg-white border border-[#E5DED3] rounded-[28px] md:rounded-[36px] p-7 md:p-10 shadow-sm">
              <p className="tracking-[0.05em] text-xs text-[#B89B5E] font-semibold mb-6">
                رسالة من المؤسِّسة المشاركة
              </p>

              <div className="text-lg leading-9 text-[#4A5565] whitespace-pre-line">
                {`مرحبًا بكم في مؤسسة عزة الخيرية!

تأسست هذه المؤسسة انطلاقًا من إيماننا بأن التعاطف يجب أن يُترجم إلى عمل، وأن الموارد يجب أن تُوزع وتُوظف بحكمة لتحقيق نتائج ملموسة، وأن تكون هذه النتائج قابلة للقياس والمتابعة. نعمل على المستوى الدولي، إلا أن أولويتنا الأولى هي السودان، والسبب واضح جدًا. إنه واجب.

في مؤسسة عزة، نلتزم بالمساءلة العامة الكاملة والشفافية والإفصاح. وقد أرسينا سياسة عدم التسامح مطلقًا مع الفساد في جميع مشاريعنا. كما نعتمد عملية صارمة للرصد والتقييم لكل مشروع، إلى جانب مجالس خارجية للمراجعة والإدارة المالية والرقابة.

لقد أظهرت لي خلفيتي في العلاقات الدولية والصحة العالمية أن النزاعات لا تؤثر في المؤسسات والأنظمة فحسب، بل تمتد آثارها إلى حياة البشر الحقيقية، فتعرقلها، وقد تدمرها بالكامل. هؤلاء ليسوا مجرد أرقام وإحصاءات، ولا يجوز أن يختفي الإنسان خلف الأرقام.

إن بناء هذه المؤسسة مع والدتي عزة، التي تحمل الاسم نفسه الذي تحمله أمتنا العظيمة، السودان، يمنحني شعورًا عميقًا بالفخر والسعادة. وأعتبر ذلك امتيازًا كبيرًا ومسؤولية عظيمة، مسؤولية تجاه شعب السودان، وهي مسؤولية لا يمكن أن نسمح لها بالفشل.

نركز على النزوح، ورعاية النساء والفتيات، والأطفال، والصحة، وانعدام الأمن الغذائي، والتعليم، والأمن الاجتماعي.

علينا أن نعيد بناء وترميم ما مسته الحرب. هذا هو الوقت المناسب، ومن خلال جهودنا المشتركة، يمكننا أن نفعل ذلك معًا.

تواصلوا معنا إذا كانت لديكم فكرة، أو مهارة ترغبون في المساهمة بها، أو كنتم جزءًا من منظمة ترغب في الشراكة معنا. تطوعوا، تبرعوا، تحدثوا معنا، ولنقم معًا بعمل من أجل السودان!`}
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-[#E7E2D8]">
                <p className="text-lg font-bold text-[#1E2A44]">
                  دعد كامل إدريس
                </p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/4.2] md:aspect-[4/5] rounded-[28px] md:rounded-[40px] overflow-hidden bg-[#E7E2D8]">
              <Image
                src="/dahd-founder-photo.jpg"
                alt="دعد كامل إدريس"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#1E2A44] text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20 text-center">
          <p className="tracking-[0.05em] text-xs text-[#BFC8A5] mb-5">
            مؤسسة عزة الخيرية
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
            نستعيد الكرامة. ونعيد بناء الأمل.
          </h2>
        </div>
      </section>
    </main>
  );
}
